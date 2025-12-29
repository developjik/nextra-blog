'use client'

import { Footer as NextraFooter } from 'nextra-theme-blog'

export function Footer() {
  const currentYear = 2025

  return (
    <NextraFooter>
      <div className="flex flex-col items-center justify-center gap-6 py-8 px-4">
        {/* 연도 및 저자 정보 */}
        <div className="flex items-center justify-center gap-3 text-sm">
          <time className="font-semibold text-emerald-600 dark:text-emerald-400">
            {currentYear}
          </time>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            developjik
          </span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-slate-600 dark:text-slate-400">
            Made with
            <span className="inline-flex items-center justify-center w-4 h-4 mx-1">
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            using Next.js & Nextra
          </span>
        </div>

        {/* 소셜 링크 그룹 */}
        <div className="flex items-center justify-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/developjik"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-300"
            aria-label="GitHub 프로필 방문"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-medium">GitHub</span>
          </a>

          {/* RSS Feed */}
          <a
            href="/feed.xml"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300"
            aria-label="RSS 피드 구독"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 5c7.18 0 13 5.82 13 13M6 11c3.87 0 7 3.13 7 7M6 17c1.66 0 3-1.34 3-3"
              />
            </svg>
            <span className="font-medium">RSS</span>
          </a>

          {/* Email */}
          <a
            href="mailto:developjik@gmail.com"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
            aria-label="이메일 보내기"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>

        {/* 저작권 문구 */}
        <div className="text-xs text-slate-500 dark:text-slate-500 text-center max-w-md">
          All content is licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            CC BY-NC-SA 4.0
          </a>
          {' '}unless otherwise noted.
        </div>
      </div>
    </NextraFooter>
  )
}
