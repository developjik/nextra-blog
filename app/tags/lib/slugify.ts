/**
 * 태그를 URL-safe 슬러그로 변환하는 유틸리티 함수
 *
 * 예시:
 * - "JavaScript" → "javascript"
 * - "비동기 처리" → "async-processing"
 * - "C++" → "c"
 *
 * @param tag - 원본 태그 문자열
 * @returns URL-safe 슬러그 문자열
 */
export function slugifyTag(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // 공백을 하이픈으로 변환
		.replace(/[^\w\p{L}-]/gu, '') // 알파벳, 숫자, 한글, 하이픈만 유지
		.replace(/-+/g, '-') // 중복 하이픈 제거
}
