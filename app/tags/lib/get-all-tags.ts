import { glob } from 'glob'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { slugifyTag } from './slugify'

/**
 * 태그와 포스트 수를 포함하는 인터페이스
 */
export interface TagWithCount {
	name: string // 원본 태그명 (표시용)
	slug: string // 슬러그 (URL용)
	count: number // 포스트 수
}

/**
 * 모든 블로그 포스트에서 태그를 추출하고 집계합니다
 *
 * @returns 모든 태그와 포스트 수의 배열 (포스트 수 내림차순)
 */
export async function getAllTags(): Promise<TagWithCount[]> {
	// 1. 모든 MDX 파일 스캔
	const postPaths = await glob('**/page.mdx', {
		cwd: `${process.cwd()}/app/posts`,
	})

	// 2. 태그 추출 및 집계 (대소문자 구분 없이)
	const tagMap = new Map<string, { count: number; originalName: string }>()

	postPaths.forEach((path) => {
		const fullPath = `${process.cwd()}/app/posts/${path}`
		const fileContents = readFileSync(fullPath, 'utf8')
		const { data } = matter(fileContents)
		const tags = (data.tags as string[]) || []

		tags.forEach((tag) => {
			const normalized = tag.toLowerCase()
			const existing = tagMap.get(normalized)

			if (existing) {
				existing.count++
			} else {
				tagMap.set(normalized, { count: 1, originalName: tag })
			}
		})
	})

	// 3. TagWithCount 형식으로 변환 및 정렬
	return Array.from(tagMap.entries())
		.map(([normalized, { count, originalName }]) => ({
			name: originalName, // 원본 태그명 유지 (표시용)
			slug: slugifyTag(normalized), // 소문자로 슬러그화
			count,
		}))
		.sort((a, b) => b.count - a.count) // 포스트 수 기준 내림차순
}
