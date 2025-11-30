import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MobileMenu } from './components/MobileMenu'
import { ThemeSwitch } from '@/components/ui/theme-switch'

export const metadata: Metadata = {
  title: "developjik's Dev Blog",
  description: '웹 개발, 프론트엔드, 백엔드 기술에 대한 developjik의 개발 블로그'
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  await getPageMap()

  return (
    <html lang="ko" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0a0a0a', light: '#ffffff' }} />
      <body>
        {/* Custom Enhanced Navbar */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="font-bold text-xl hidden sm:block">
                    developjik
                  </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/tags"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tags
                  </Link>
                  <a
                    href="/feed.xml"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RSS
                  </a>

                  {/* Search & Theme - Desktop */}
                  <div className="flex items-center gap-2 ml-4 border-l pl-4">
                    <Search />
                    <ThemeSwitch />
                  </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />
              </div>
            </div>
          </nav>

          {children}

          {/* Enhanced Footer */}
          <footer className="mt-20 border-t bg-muted/50">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="font-bold text-lg">
                      developjik
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    웹 개발과 기술에 대한 경험과 학습을 공유합니다
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/tags" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        All Tags
                      </Link>
                    </li>
                    <li>
                      <a href="/feed.xml" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        RSS Feed
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/developjik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="mailto:developjik@gmail.com"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Email"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  <time>{new Date().getFullYear()}</time> © developjik. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        <Analytics />
      </body>
    </html>
  )
}