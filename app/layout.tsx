import { Head } from 'nextra/components'
import { Layout } from 'nextra-theme-blog'
import Script from 'next/script'
import 'nextra-theme-blog/style.css'
import '~/app/globals.css'
import { Footer, Navbar, ScrollProgress } from './_components'

export const metadata = {
  title: 'Developjik Blog',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Head />
      <body>
        <ScrollProgress />
        <Layout>
          <Navbar />

          {children}

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
