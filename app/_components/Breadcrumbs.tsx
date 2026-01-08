'use client'

import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs() {
  const pathname = usePathname()

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    if (pathname === '/') {
      return []
    }

    const pathSegments = pathname
      .split('/')
      .filter(Boolean)
      .map((segment) => segment.replace(/-/g, ' ').toUpperCase())

    const breadcrumbs: BreadcrumbItem[] = [{ label: 'HOME', href: '/' }]

    pathSegments.forEach((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`
      breadcrumbs.push({
        label: segment,
        href,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <nav className="mb-8" aria-label="Breadcrumb navigation">
      <ol className="flex items-center gap-2 text-meta">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[var(--color-accent)]">{item.label}</span>
            ) : (
              <a
                href={item.href}
                className="hover:text-[var(--color-accent)] transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  transition: 'color var(--transition-fast)',
                }}
              >
                {item.label}
              </a>
            )}
            {index < breadcrumbs.length - 1 && (
              <span style={{ color: 'var(--color-text-meta)' }}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
