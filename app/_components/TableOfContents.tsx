'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: TOCItem[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const activeHeading = headings.find((heading, index) => {
        const element = document.getElementById(heading.id)
        if (!element) return false
        const nextHeading = headings[index + 1]
        const nextElement = nextHeading
          ? document.getElementById(nextHeading.id)
          : null

        if (index === headings.length - 1) {
          return element.offsetTop <= scrollPosition
        }

        return (
          element.offsetTop <= scrollPosition &&
          nextElement &&
          nextElement.offsetTop > scrollPosition
        )
      })

      if (activeHeading) {
        setActiveId(activeHeading.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  if (headings.length < 3) {
    return null
  }

  return (
    <aside className="hidden lg:block sticky top-24 h-fit">
      <div
        className="relative p-6 transition-all duration-300"
        style={{
          border: '1px solid var(--color-border)',
        }}
      >
        <div
          className="text-meta mb-4 font-bold"
          style={{
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-meta)',
            color: 'var(--color-text-secondary)',
          }}
        >
          Contents
        </div>

        <nav className="space-y-3">
          {headings.map((heading, index) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  })
                }
              }}
              className={`
                block relative transition-all duration-200 ease-out
                group
                ${heading.level === 3 ? 'pl-4' : ''}
              `}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: heading.level === 2 ? 'var(--text-meta)' : '0.8rem',
                color:
                  activeId === heading.id
                    ? 'var(--color-accent)'
                    : 'var(--color-text-secondary)',
                transitionDelay: `${index * 30}ms`,
              }}
            >
              <span className="relative z-10">{heading.text}</span>

              {activeId === heading.id && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-accent)] transition-all duration-300"
                  style={{
                    boxShadow: '0 0 8px rgba(230, 57, 70, 0.5)',
                  }}
                />
              )}

              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500"
          style={{
            opacity: activeId ? 0.5 : 0,
            width: activeId ? '100%' : '0',
          }}
        />
      </div>
    </aside>
  )
}
