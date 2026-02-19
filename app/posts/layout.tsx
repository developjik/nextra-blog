import type { ReactNode } from 'react'
import { Breadcrumbs, Comments, RelatedPosts } from '~/app/_components'

interface Props {
  children: ReactNode
}

export default function PostLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Breadcrumbs />
        <article>{children}</article>
      </div>

      <Comments />

      <RelatedPosts />
    </div>
  )
}
