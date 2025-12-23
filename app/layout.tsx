import { Head } from 'nextra/components'
import { Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import '~/app/globals.css'
import { Footer, Navbar } from './_components'

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
      </body>
    </html>
  )
}
