import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk, Syne } from 'next/font/google'
import Script from 'next/script'
import { Head } from 'nextra/components'
import { Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import '~/app/globals.css'
import { Footer, Navbar, ScrollProgress, SkipLink } from './_components'

// Swiss-International Typography System
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

const siteName = 'Developjik Blog'
const siteDescription =
  '프론트엔드 개발자를 위한 실전 기술 아티클과 커리어 성장 인사이트를 정리하는 developjik 기술 블로그'
const siteUrl = 'https://developjik.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <Head />
      <body>
        <SkipLink />
        <ScrollProgress />
        <Layout>
          <Navbar />

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <Footer />
        </Layout>

        {/* Pagefind 검색 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const script = document.createElement('script');
                script.src = '/_pagefind/pagefind.js';
                script.async = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        {/* Prism.js 코드 하이라이팅 - 지연 로딩 */}
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-jsx.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-tsx.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
