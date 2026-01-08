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
        className="p-6"
        style={{
          border: '1px solid var(--color-border)',
        }}
      >
        <div
          className="text-meta mb-4"
          style={{
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-meta)',
          }}
        >
          Contents
        </div>
        <nav className="space-y-2">
          {headings.map((heading) => (
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
              className={`block transition-colors ${
                activeId === heading.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
              }`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: heading.level === 2 ? 'var(--text-meta)' : '0.8rem',
                paddingLeft: heading.level === 3 ? '1rem' : '0',
                transition: 'color var(--transition-fast)',
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
