import Link from 'next/link'
import type { TagWithCount } from '../lib/get-all-tags'

interface TagCloudProps {
  tags: TagWithCount[]
}

/**
 * 태그 클라우드 컴포넌트 (미니멀 & 클린 스타일)
 *
 * 모든 태그를 포스트 수에 따라 다른 크기로 표시합니다
 */
export function TagCloud({ tags }: TagCloudProps) {
  // 포스트 수에 따라 크기 계산
  const getTagStyle = (count: number) => {
    if (count >= 5) {
      return {
        fontSize: '1rem',
        fontWeight: '600',
        padding: '0.75rem 1.25rem',
      }
    }
    if (count >= 3) {
      return {
        fontSize: '0.9375rem',
        fontWeight: '500',
        padding: '0.625rem 1rem',
      }
    }
    return {
      fontSize: '0.875rem',
      fontWeight: '400',
      padding: '0.5rem 0.875rem',
    }
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tags.map(({ name, slug, count }, index) => (
        <Link
          key={slug}
          href={`/tags/${slug}`}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200 focus-ring"
          style={{
            ...getTagStyle(count),
            transitionDelay: `${index * 30}ms`,
          }}
        >
          <span className="font-medium">#{name}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {count}
          </span>
        </Link>
      ))}
    </div>
  )
}
