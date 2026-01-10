'use client'

import { usePathname } from 'next/navigation'
import { Search } from 'nextra/components'
import { ThemeSwitch } from 'nextra-theme-blog'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'

type SwissNavbarProps = {
  children?: ReactNode
}

export const SwissNavbar: FC<SwissNavbarProps> = ({ children }) => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <div className="relative flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
          style={{
            fontFamily: 'var(--font-hero), Space Grotesk, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-hero)',
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>●</span>
          <span className="hover:text-[var(--color-accent)] transition-colors">
            Developjik
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className={`text-meta transition-colors ${
                isActive('/')
                  ? 'text-[var(--color-accent)]'
                  : 'link-swiss hover:text-[var(--color-accent)]'
              }`}
            >
              Home
            </a>
            <a
              href="/tags"
              className={`text-meta transition-colors ${
                isActive('/tags')
                  ? 'text-[var(--color-accent)]'
                  : 'link-swiss hover:text-[var(--color-accent)]'
              }`}
            >
              Tags
            </a>
            <a
              href="https://github.com/developjik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-meta link-swiss hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Search />
            <ThemeSwitch />
            <button
              type="button"
              className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className="w-6 h-0.5 transition-transform"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  transform: mobileMenuOpen
                    ? 'rotate(45deg) translate(4px, 4px)'
                    : 'none',
                }}
              />
              <span
                className="w-6 h-0.5 transition-opacity"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="w-6 h-0.5 transition-transform"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  transform: mobileMenuOpen
                    ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[var(--color-border)]" />

      <div
        className="fixed inset-0 bg-[var(--color-bg)] md:hidden flex flex-col items-center justify-center gap-8 transition-opacity duration-300 z-50 backdrop-blur-sm"
        style={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
      >
        <a
          href="/"
          className={`text-3xl transition-all duration-200 ${
            isActive('/') ? 'text-[var(--color-accent)]' : ''
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            fontFamily: 'var(--font-heading), Syne, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-heading)',
          }}
        >
          Home
        </a>
        <a
          href="/tags"
          className={`text-3xl transition-all duration-200 ${
            isActive('/tags') ? 'text-[var(--color-accent)]' : ''
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            fontFamily: 'var(--font-heading), Syne, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-heading)',
          }}
        >
          Tags
        </a>
        <a
          href="https://github.com/developjik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl transition-all duration-200"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            fontFamily: 'var(--font-heading), Syne, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-heading)',
          }}
        >
          GitHub
        </a>
      </div>
      {children}
    </>
  )
}
