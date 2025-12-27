'use client'

import { Footer as NextraFooter } from 'nextra-theme-blog'

export function Footer() {
  // 정적 연도로 하드코딩하여 hydration mismatch 방지
  const currentYear = 2025

  return (
    <NextraFooter>
      <div className="flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-400">
        <time className="font-medium">{currentYear}</time>
        <span className="text-slate-300 dark:text-slate-600">©</span>
        <span className="font-medium text-slate-700 dark:text-slate-300">
          developjik
        </span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <a
          href="/feed.xml"
          className="link-hover inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="RSS 피드 구독"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 5c7.18 0 13 5.82 13 13M6 11c3.87 0 7 3.13 7 7M6 17c1.66 0 3-1.34 3-3"
            />
          </svg>
          <span>RSS</span>
        </a>
      </div>
    </NextraFooter>
  )
}
