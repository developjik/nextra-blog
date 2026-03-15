import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ALL POSTS | Developjik Blog',
  description:
    '프론트엔드 실무 중심 포스트를 검색하고 태그로 필터링할 수 있는 아카이브 페이지입니다.',
  alternates: {
    canonical: '/archives',
  },
  openGraph: {
    title: 'ALL POSTS | Developjik Blog',
    description:
      '프론트엔드 실무 중심 포스트를 검색하고 태그로 필터링할 수 있는 아카이브 페이지입니다.',
    url: '/archives',
    type: 'website',
  },
}

type ArchivesLayoutProps = {
  children: React.ReactNode
}

export default function ArchivesLayout({ children }: ArchivesLayoutProps) {
  return children
}
