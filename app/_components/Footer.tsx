import { Footer as NextraFooter } from 'nextra-theme-blog'

export function Footer() {
  return (
    <NextraFooter>
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <time>{new Date().getFullYear()}</time> © developjik.
        <span className="text-gray-400">|</span>
        <a
          href="/feed.xml"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="RSS 피드 구독"
        >
          RSS 피드
        </a>
      </div>
    </NextraFooter>
  )
}
