import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - 페이지를 찾을 수 없습니다',
  description: '요청하신 페이지가 존재하지 않거나 이동되었습니다.',
}

/**
 * 404 Not Found 페이지
 *
 * 존재하지 않는 경로로 접근했을 때 표시됩니다.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-900 dark:text-gray-100">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            홈으로 이동
          </Link>
          <Link
            href="/posts"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            포스트 목록
          </Link>
        </div>
      </div>
    </div>
  )
}
