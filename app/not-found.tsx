import { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'nextra/components'
import { Button } from '@/components/ui/button'
import { StructuredData } from './components/StructuredData'

export const metadata: Metadata = {
  title: 'Page Not Found - developjik',
  description: '요청하신 페이지를 찾을 수 없습니다. 다른 콘텐츠를 검색해보세요.',
  robots: {
    index: false,
    follow: true,
  },
}

// 404 페이지용 구조화된 데이터
const errorPageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Not Found',
  description: '요청하신 페이지를 찾을 수 없습니다',
  url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/404`,
}

export default function NotFound() {
  return (
    <>
      <StructuredData data={errorPageStructuredData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">

              {/* 404 Error Illustration */}
              <div className="relative">
                <div className="text-9xl font-bold text-primary/20 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 animate-pulse">
                    <div className="w-full h-full rounded-full bg-background dark:bg-gray-900 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        role="img"
                        aria-label="탐색 불가 아이콘"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
                  페이지를 찾을 수 없어요
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                  찾으시는 페이지가 삭제되었거나 이동되었을 수 있습니다.
                  아래에서 원하는 콘텐츠를 검색하거나 메뉴를 통해 이동해보세요.
                </p>
              </div>

              {/* Search Component */}
              <div className="max-w-md mx-auto">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg border p-2 shadow-lg">
                  <Search placeholder="블로그 포스트 검색..." />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/" aria-label="홈페이지로 이동">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    홈으로 가기
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/tags" aria-label="모든 태그 보기">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    태그 보기
                  </Link>
                </Button>
              </div>

              {/* Additional Help */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  계속해서 문제가 발생한다면{' '}
                  <a
                    href="mailto:developjik@gmail.com"
                    className="text-primary hover:underline"
                    aria-label="이메일로 문의하기"
                  >
                    developjik@gmail.com
                  </a>
                  으로 연락주세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">
              인기 있는 콘텐츠
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/tags/react"
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  ⚛️
                </div>
                <h3 className="font-semibold mb-2">React</h3>
                <p className="text-sm text-muted-foreground">
                  React 관련 포스트 모아보기
                </p>
              </Link>

              <Link
                href="/tags/next.js"
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                 ▲
                </div>
                <h3 className="font-semibold mb-2">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js 활용법과 팁들
                </p>
              </Link>

              <Link
                href="/tags/typescript"
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🔷
                </div>
                <h3 className="font-semibold mb-2">TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  TypeScript 타입 시스템 이해하기
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}