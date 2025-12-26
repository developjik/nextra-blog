import { glob } from 'glob'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { slugifyTag } from './slugify'

/**
 * 포스트 메타데이터 인터페이스
 */
export interface PostMeta {
	slug: string
	title: string
	description: string
	date: string
	tags: string[]
}

/**
 * 특정 태그가 있는 모든 포스트를 반환합니다
 *
 * @param tagSlug - 태그 슬러그
 * @returns 해당 태그가 있는 포스트 배열 (날짜 내림차순)
 */
export async function getPostsByTag(tagSlug: string): Promise<PostMeta[]> {
	// 1. 모든 MDX 파일 스캔
	const postPaths = await glob('**/page.mdx', {
		cwd: `${process.cwd()}/app/posts`,
	})

	const posts: PostMeta[] = []

	postPaths.forEach((path) => {
		const fullPath = `${process.cwd()}/app/posts/${path}`
		const fileContents = readFileSync(fullPath, 'utf8')
		const { data } = matter(fileContents)
		const tags = (data.tags as string[]) || []

		// 2. 태그 슬러그가 일치하는지 확인 (대소문자 무시)
		const hasMatchingTag = tags.some(
			(tag) => slugifyTag(tag) === tagSlug.toLowerCase(),
		)

		if (hasMatchingTag) {
			const slug = path.replace(/\/page\.mdx$/, '')
			posts.push({
				slug,
				title: data.title || '제목 없음',
				description: data.description || '',
				date: data.date || new Date().toISOString(),
				tags,
			})
		}
	})

	// 3. 날짜 내림차순 정렬 (최신 포스트 먼저)
	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	)
}

/**
 * 포스트에서 원본 태그명을 찾습니다
 *
 * @param posts - 포스트 배열
 * @param tagSlug - 태그 슬러그
 * @returns 원본 태그명 또는 undefined
 */
export function findOriginalTagName(
	posts: PostMeta[],
	tagSlug: string,
): string | undefined {
	for (const post of posts) {
		const tag = post.tags.find((t) => slugifyTag(t) === tagSlug.toLowerCase())
		if (tag) return tag
	}
	return undefined
}
