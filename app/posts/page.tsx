import { permanentRedirect } from 'next/navigation'

type LegacyPostsIndexPageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

/**
 * Legacy posts index route.
 *
 * `/archives` is the canonical archive page. Keep `/posts` as a stable
 * entrypoint for old internal/external links and redirect permanently.
 *
 * 검색/필터 쿼리(q, tags)는 유지하여 기존 공유 링크의 UX를 보존한다.
 */
export default function LegacyPostsIndexPage({
  searchParams,
}: LegacyPostsIndexPageProps) {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(searchParams ?? {})) {
    if (typeof value === 'string' && value.trim() !== '') {
      params.set(key, value)
      continue
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item.trim() !== '') {
          params.append(key, item)
        }
      }
    }
  }

  const query = params.toString()
  permanentRedirect(query === '' ? '/archives' : `/archives?${query}`)
}
