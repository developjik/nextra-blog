import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostsByTag } from '../lib/get-posts-by-tag'
import { findOriginalTagName } from '../lib/get-posts-by-tag'
import { getAllTags } from '../lib/get-all-tags'

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
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
 * 동적 태그 페이지 컴포넌트
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
		<div className="min-h-screen bg-background">
			{/* Header Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 py-16 md:py-24">
				<div className="absolute inset-0 bg-grid-pattern opacity-10" />
				<div className="max-w-4xl mx-auto px-4 relative z-10">
					{/* Breadcrumb */}
					<Link
						href="/tags"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
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
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						#{originalTag}
					</h1>

					{/* Post Count */}
					<p className="text-lg text-muted-foreground">
						{posts.length}개의 포스트가 있습니다
					</p>
				</div>
			</section>

			{/* Post List Section */}
			<section className="max-w-4xl mx-auto px-4 py-16">
				<div className="space-y-6">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/posts/${post.slug}`}
							className="block group"
						>
							<article className="p-6 rounded-lg border bg-card hover:bg-accent transition-all duration-200 hover:shadow-md">
								{/* Meta Information */}
								<div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
									<time>
										{new Date(post.date).toLocaleDateString('ko-KR', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</time>
									<span>•</span>
									<span>{post.tags.length}개 태그</span>
								</div>

								{/* Title */}
								<h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
									{post.title}
								</h2>

								{/* Description */}
								<p className="text-muted-foreground line-clamp-2 mb-4">
									{post.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{post.tags.map((t) => (
										<span
											key={t}
											className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
										>
											#{t}
										</span>
									))}
								</div>
							</article>
						</Link>
					))}
				</div>

				{/* Empty State (shouldn't happen due to notFound()) */}
				{posts.length === 0 && (
					<div className="text-center py-16">
						<p className="text-muted-foreground">
							이 태그에 대한 포스트가 없습니다.
						</p>
						<Link
							href="/tags"
							className="inline-block mt-4 text-primary hover:underline"
						>
							모든 태그 보기
						</Link>
					</div>
				)}
			</section>
		</div>
	)
}
