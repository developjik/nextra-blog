'use client'

import { useEffect } from 'react'
import type { FallbackProps } from 'react-error-boundary'

/**
 * 글로벌 에러 바운더리 컴포넌트
 *
 * 런타임 에러가 발생했을 때 사용자에게 친절한 에러 메시지를 표시합니다.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function GlobalError({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  useEffect(() => {
    // 에러 로깅 서비스로 전송 (선택사항)
    console.error('Unhandled error:', error)
  }, [error])

  return (
    <html lang="ko">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-gray-100">
              오류가 발생했습니다
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              죄송합니다. 예기치 않은 문제가 발생했습니다.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={resetErrorBoundary}
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                다시 시도
              </button>
              <a
                href="/"
                className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                홈으로 이동
              </a>
            </div>
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                기술 정보 보기
              </summary>
              <pre className="mt-4 overflow-auto rounded-lg bg-gray-100 p-4 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {error.message}
              </pre>
            </details>
          </div>
        </div>
      </body>
    </html>
  )
}
