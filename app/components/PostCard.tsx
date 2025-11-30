'use client'

import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { getTagColor, getTagTextColor } from '@/lib/tagColors'
import { Card, CardContent } from '@/components/ui/card'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <CardContent className="p-6 md:p-8">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => {
              const colors = getTagColor(tag)
              const textColor = getTagTextColor(tag)
              return (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                  className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full ${colors.light} dark:${colors.dark} ${textColor} border ${colors.border} hover:scale-105 hover:shadow-md transition-all`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mr-0.5">#</span>{tag}
                </Link>
              )
            })}
          </div>
        )}

        {/* Title */}
        <Link href={post.route} className="block mb-3">
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Date */}
        <time className="block text-sm text-muted-foreground mb-4">
          {new Date(post.date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>

        {/* Description */}
        {post.description && (
          <p className="text-base md:text-lg text-muted-foreground mb-6 line-clamp-3">
            {post.description}
          </p>
        )}

        {/* Read More Link */}
        <Link
          href={post.route}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium group/link"
        >
          <span>Read more</span>
          <svg
            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>


    </Card>
  )
}
