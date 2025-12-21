import { env } from '~/env'

export async function GET() {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Allow search engines to crawl all content
Allow: /posts/
Allow: /tags/
Allow: /about

# Disallow admin and development routes
Disallow: /api/
Disallow: /_next/
Disallow: /_pagefind/
Disallow: /*?*

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional crawl delay (be nice to servers)
Crawl-delay: 1

# Popular search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# Block unwanted crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}
