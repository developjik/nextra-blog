import { redirect } from 'next/navigation'

/**
 * Legacy posts index route.
 *
 * `/archives` is the canonical archive page. Keep `/posts` as a stable
 * entrypoint for old internal/external links and redirect permanently.
 */
export default function LegacyPostsIndexPage() {
  redirect('/archives')
}
