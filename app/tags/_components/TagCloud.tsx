import Link from 'next/link'
import type { TagWithCount } from '../lib/get-all-tags'

interface TagCloudProps {
	tags: TagWithCount[]
}

/**
 * 태그 클라우드 컴포넌트
 *
 * 모든 태그를 포스트 수에 따라 다른 크기로 표시합니다
 */
export function TagCloud({ tags }: TagCloudProps) {
	// 포스트 수에 따라 크기 계산 (최대 4개: 더 크게, 그 외: 기본)
	const getTagStyle = (count: number) => {
		if (count >= 4) {
			return {
				fontSize: '1.125rem',
				fontWeight: '600',
			}
		}
		return {
			fontSize: '1rem',
			fontWeight: '400',
		}
	}

	return (
		<div className="flex flex-wrap gap-3">
			{tags.map(({ name, slug, count }) => (
				<Link
					key={slug}
					href={`/tags/${slug}`}
					className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card hover:bg-accent transition-all duration-200 hover:shadow-sm"
					style={getTagStyle(count)}
				>
					<span className="text-foreground">#{name}</span>
					<span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
						{count}
					</span>
				</Link>
			))}
		</div>
	)
}
