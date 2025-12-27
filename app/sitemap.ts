import { readFileSync } from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'

interface Metadata {
  title: string
  description: string
  date?: string
  tags?: string[]
}

interface SitemapEntry {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}

/**
 * MDX 파일에서 메타데이터를 추출하는 함수
 */
async function getPostMetadata(): Promise<
  Array<{ slug: string; metadata: Metadata }>
> {
  const postPaths = await glob('**/page.mdx', {
    cwd: `${process.cwd()}/app/posts`,
  })

  const posts = postPaths.map((path) => {
    const fullPath = `${process.cwd()}/app/posts/${path}`
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    // 슬러그 추출: directory-name/page.mdx -> directory-name
    const slug = path.replace(/\/page\.mdx$/, '')

    return {
      slug,
      metadata: data as Metadata,
    }
  })

  return posts
}

/**
 * Sitemap 생성 함수
 */
export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // 정적 페이지 목록
  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // 블로그 포스트 목록
  const posts = await getPostMetadata()
  const postPages: SitemapEntry[] = posts.map(({ slug, metadata }) => ({
    url: `${baseUrl}/posts/${slug}`,
    lastModified: metadata.date ? new Date(metadata.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...postPages]
}
