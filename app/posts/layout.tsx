import type { ReactNode } from 'react'
import { Breadcrumbs, Comments, RelatedPosts } from '~/app/_components'

interface Post {
  title: string
  description: string
  slug: string
  tags: readonly string[]
}

interface Props {
  children: ReactNode
}

const allPosts: Post[] = [
  {
    title: 'developjik 개발 블로그를 시작하며',
    description:
      '안녕하세요! 웹 개발에 대한 경험과 학습을 공유하는 developjik의 개발 블로그입니다.',
    slug: 'welcome',
    tags: ['소개', 'Blog', '개발'],
  },
  {
    title: 'JavaScript 비동기 처리 완벽 가이드',
    description:
      'JavaScript의 비동기 처리 메커니즘을 완벽하게 이해하고 마스터하세요.',
    slug: 'javascript-async-processing-complete-guide',
    tags: ['JAVASCRIPT', 'ASYNC', 'PROMISE', 'ASYNC-AWAIT'],
  },
  {
    title: 'JavaScript this 완벽 이해',
    description: 'JavaScript this 키워드의 모든 것을 완벽하게 이해하세요.',
    slug: 'javascript-this-complete-guide',
    tags: ['JAVASCRIPT', 'THIS', 'SCOPE'],
  },
  {
    title: 'JavaScript 프로토타입 완벽 가이드',
    description:
      'JavaScript 프로토타입 체인과 상속 메커니즘을 완벽하게 이해하세요.',
    slug: 'javascript-prototype-complete-guide',
    tags: ['JAVASCRIPT', 'PROTOTYPE', 'OOP'],
  },
  {
    title: 'JavaScript 이벤트 루프 이해',
    description: 'JavaScript 이벤트 루프와 호출 스택의 작동 원리를 이해하세요.',
    slug: 'javascript-event-loop-understanding',
    tags: ['JAVASCRIPT', 'EVENT-LOOP', 'ASYNC'],
  },
  {
    title: 'JavaScript Hoisting 이해',
    description:
      'JavaScript Hoisting과 TDZ(Temporal Dead Zone)를 완벽하게 이해하세요.',
    slug: 'understanding-javascript-hoisting',
    tags: ['JAVASCRIPT', 'HOISTING', 'SCOPE'],
  },
  {
    title: 'React Concurrent Rendering 이해',
    description:
      'React 18의 Concurrent Rendering과 자동 batching을 이해하세요.',
    slug: 'react-concurrent-rendering',
    tags: ['REACT', 'CONCURRENT', 'RENDERING'],
  },
  {
    title: 'Nextra 이해하기',
    description: 'Nextra로 정적 블로그를 쉽게 구축하는 방법을 배우세요.',
    slug: 'understanding-nextra',
    tags: ['NEXTRA', 'NEXTJS', 'STATIC-SITE'],
  },
  {
    title: 'AWS IAM 완벽 이해',
    description:
      'AWS IAM의 사용자, 그룹, 역할, 정책을 완벽하게 이해하고 마스터하세요.',
    slug: 'aws-iam-understanding',
    tags: ['AWS', 'IAM', 'SECURITY'],
  },
  {
    title: 'Event Storming 완벽 가이드',
    description:
      '도메인 주도 설계에서 Event Storming을 활용한 이벤트 모델링 방법을 배우세요.',
    slug: 'event-storming-complete-guide',
    tags: ['DDD', 'EVENT-STORMING', 'DOMAIN-DRIVEN-DESIGN'],
  },
  {
    title: 'Broadcast Channel API 완벽 가이드',
    description:
      '브라우저 탭 간 통신을 위한 Broadcast Channel API를 완벽하게 이해하세요.',
    slug: 'broadcast-channel-api',
    tags: ['JAVASCRIPT', 'API', 'WEB-WORKER'],
  },
  {
    title: 'Keycloak 완벽 가이드',
    description:
      'Keycloak으로 손쉽게 인증과 권한 관리를 구현하는 방법을 배우세요.',
    slug: 'keycloak-complete-guide',
    tags: ['AUTH', 'KEYCLOAK', 'SSO'],
  },
]

export default function PostLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Breadcrumbs />
        <article>{children}</article>
      </div>

      <Comments />

      <RelatedPosts
        currentPostTags={[]}
        allPosts={allPosts}
        currentPostSlug=""
      />
    </div>
  )
}
