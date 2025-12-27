import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ScrollReveal } from '~/app/_components'
import { getAllTags } from '../lib/get-all-tags'
import { findOriginalTagName, getPostsByTag } from '../lib/get-posts-by-tag'

interface PageProps {
  params: Promise<{ tag: string }>
}

/**
 * 빌드 시 모든 태그 페이지를 정적으로 생성합니다
 */
export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(({ slug }) => ({ tag: slug }))
}

/**
 * 태그 페이지 메타데이터를 생성합니다
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params
  const posts = await getPostsByTag(tag)

  if (posts.length === 0) {
    return {
      title: '태그를 찾을 수 없습니다',
    }
  }

  const originalTag = findOriginalTagName(posts, tag) || tag

  return {
    title: `${originalTag} - 태그된 포스트`,
    description: `"${originalTag}" 태그가 있는 모든 블로그 포스트 (${posts.length}개)`,
    openGraph: {
      title: `${originalTag} 태그 - developjik 블로그`,
      description: `${posts.length}개의 포스트`,
      type: 'website',
    },
  }
}

/**
 * 동적 태그 페이지 컴포넌트 (미니멀 & 클린 스타일)
 */
export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  const posts = await getPostsByTag(tag)

  // 태그가 없으면 404
  if (posts.length === 0) {
    notFound()
  }

  // 원본 태그명 찾기
  const originalTag = findOriginalTagName(posts, tag) || tag

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal variant="up">
            {/* Breadcrumb */}
            <Link
              href="/tags"
              className="link-hover inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              모든 태그
            </Link>

            {/* Tag Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <span className="text-2xl">#</span>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
                  {originalTag}
                </h1>
              </div>

              {/* Post Count */}
              <p className="text-slate-600 dark:text-slate-400">
                {posts.length}개의 포스트가 있습니다
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Post List Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} variant="up" delay={index * 100}>
              <Link href={`/posts/${post.slug}`} className="block group">
                <article className="card-minimal p-6 md:p-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500 mb-4">
                    <time className="font-medium">
                      {new Date(post.date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span>{post.tags.length}개 태그</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="badge-minimal">
                        #{t}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
