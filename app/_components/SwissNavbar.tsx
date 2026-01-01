import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Navbar as NextraNavbar, ThemeSwitch } from 'nextra-theme-blog'

/**
 * SwissNavbar - Swiss-International Style 내비게이션
 *
 * 특징:
 * - 왼쪽: 로고 (Space Grotesk, 대문자)
 * - 오른쪽: 내비게이션 링크 (대문자, 모노스페이스)
 * - 얇은 디바이더
 * - 미니멀한 디자인
 *
 * NOTE: Server Component로 유지
 */
export async function SwissNavbar() {
  return (
    <NextraNavbar pageMap={await getPageMap()}>
      {/* Logo - 왼쪽 정렬 */}
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

      {/* Navigation Links - 오른쪽 정렬 */}
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="text-meta link-swiss hover:text-[var(--color-accent)]"
          >
            Home
          </a>
          <a
            href="/tags"
            className="text-meta link-swiss hover:text-[var(--color-accent)]"
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

        {/* Search & Theme Switch */}
        <div className="flex items-center gap-3">
          <Search />
          <ThemeSwitch />
        </div>
      </div>

      {/* Bottom Divider - 항상 표시 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-border)]" />
    </NextraNavbar>
  )
}
