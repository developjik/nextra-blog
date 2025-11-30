'use client'

import Link from 'next/link'
import { getTagColor, getTagTextColor } from '@/lib/tagColors'

interface TagBadgeProps {
  tag: string
  count?: number
  size?: 'sm' | 'md' | 'lg'
}

export function TagBadge({ tag, count, size = 'md' }: TagBadgeProps) {
  const colors = getTagColor(tag)
  const textColor = getTagTextColor(tag)

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }

  return (
    <Link
      href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={`inline-flex items-center gap-2 ${sizeClasses[size]} font-semibold rounded-full ${colors.light} dark:${colors.dark} ${textColor} border ${colors.border} hover:scale-105 hover:shadow-lg transition-all duration-200`}
    >
      <span className="flex items-center gap-1">
        <span className="text-current opacity-70">#</span>
        <span>{tag}</span>
      </span>
      {count !== undefined && (
        <span className="flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-white/50 dark:bg-black/30 text-xs font-bold">
          {count}
        </span>
      )}
    </Link>
  )
}
