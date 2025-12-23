import type { ReactNode } from 'react'
import { Comments } from '~/app/_components'

type Props = {
  children: ReactNode
}

export default function PostLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-16">{children}</article>

      {/* 댓글 섹션 */}
      <Comments />
    </div>
  )
}
