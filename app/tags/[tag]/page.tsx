import Link from 'next/link'
import { getPostsByTag, getAllTags } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { TagBadge } from '@/app/components/TagBadge'
import { PostCard } from '@/app/components/PostCard'
import { getTagColor } from '@/lib/tagColors'
import { StructuredData } from '@/app/components/StructuredData'
import { generateCollectionPageSchema, generateBreadcrumbSchema, SITE_URL } from '@/lib/structuredData'

type Props = {
  params: Promise<{
    tag: string
  }>
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(tag => ({
    tag: tag.toLowerCase()
  }))
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)

  const tagUrl = `${SITE_URL}/tags/${tag}`

  return {
    title: `#${decodedTag} - 블로그 글 목록 | developjik's Dev Blog`,
    description: `#${decodedTag} 태그가 적용된 모든 블로그 글을 확인하세요. 웹 개발, 프론트엔드, React, Next.js 등 다양한 주제의 기술 글이 있습니다.`,
    keywords: [decodedTag, '블로그', '웹 개발', '프론트엔드', '기술 블로그'],
    alternates: {
      canonical: `/tags/${tag}`,
    },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      url: tagUrl,
      title: `#${decodedTag} - 블로그 글 목록`,
      description: `#${decodedTag} 태그가 적용된 모든 블로그 글을 확인하세요.`,
      siteName: "developjik's Dev Blog",
    },
    twitter: {
      card: 'summary',
      title: `#${decodedTag} - 블로그 글 목록`,
      description: `#${decodedTag} 태그가 적용된 모든 블로그 글을 확인하세요.`,
    },
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = await getPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  const colors = getTagColor(decodedTag)

  // Generate structured data for this tag page
  const collectionSchema = generateCollectionPageSchema(
    'CollectionPage',
    `#${decodedTag} - 블로그 글 목록`,
    `#${decodedTag} 태그가 적용된 모든 블로그 글 목록입니다. 총 ${posts.length}개의 글이 있습니다.`,
    `/tags/${tag}`,
    posts
  )

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Tags', url: `${SITE_URL}/tags` },
    { name: `#${decodedTag}`, url: `${SITE_URL}/tags/${tag}` },
  ])

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <StructuredData data={collectionSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Header Section with Tag Color */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors.light} dark:${colors.dark} py-16 md:py-24`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link
            href="/tags"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>All Tags</span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              #{decodedTag}
            </h1>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this topic
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.route} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
