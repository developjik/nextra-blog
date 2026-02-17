'use client'

import { ScrollReveal } from './index'

const featuredProjects = [
  {
    title: 'Nextra Blog 리빌드',
    summary: 'Next.js App Router + Nextra 기반 기술 블로그 구축 및 콘텐츠 운영 자동화',
    href: '/about',
    tags: ['Next.js', 'Nextra', 'TypeScript'],
  },
  {
    title: 'React 성능 최적화 사례 정리',
    summary: '렌더링 병목 분석부터 개선까지 실전 관점으로 기록한 아티클 모음',
    href: '/tags',
    tags: ['React', 'Performance', 'DX'],
  },
  {
    title: '프론트엔드 학습 아카이브',
    summary: 'JavaScript/Next.js/아키텍처 학습 내용을 구조적으로 문서화',
    href: '/archives',
    tags: ['JavaScript', 'Next.js', 'Architecture'],
  },
]

const featuredPosts = [
  {
    title: 'CloudFront의 숨은 힘: 캐싱 없이도 좋아지는 프론트엔드 성능',
    href: '/posts/cloudfront-hidden-power-without-cache',
  },
  {
    title: '문을 없애고 테스트하기: 프론트엔드 코드 품질을 올리는 리팩터링 관점',
    href: '/posts/remove-branching-improve-testability',
  },
  {
    title: '좋은 타입은 선언 수가 아니라 경계에서 나온다: enum 남용에서 벗어나기',
    href: '/posts/types-boundary-over-enum',
  },
]

export function Homepage() {
  return (
    <div className="relative min-h-screen">
      <section className="section-swiss">
        <div className="grid-swiss">
          <div className="col-span-12 text-center">
            <ScrollReveal variant="up">
              <div className="text-meta mb-4">FRONTEND ENGINEER</div>
              <h1 className="text-hero mb-6">
                DEVELOPJIK
                <br />
                <span style={{ color: 'var(--color-accent)' }}>PORTFOLIO BLOG</span>
              </h1>
              <div className="divider-swiss m-swiss-auto" />
              <p
                className="text-body mt-6"
                style={{ color: 'var(--color-text-secondary)', maxWidth: '720px', marginInline: 'auto' }}
              >
                사용자 경험과 성능 최적화를 중요하게 생각하는 프론트엔드 개발자입니다.
                이 블로그는 이직을 위한 대표 프로젝트, 문제 해결 기록, 기술 아티클을 한 번에 볼 수 있는 공간입니다.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={100}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="/about" className="btn-swiss">ABOUT ME</a>
                <a href="/archives" className="btn-swiss btn-swiss-outline">TECH POSTS</a>
                <a href="https://github.com/developjik" target="_blank" rel="noopener noreferrer" className="btn-swiss btn-swiss-outline">GITHUB</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-swiss" style={{ backgroundColor: 'var(--swiss-light-gray)' }}>
        <div className="grid-swiss">
          <div className="col-span-12 mb-12">
            <div className="text-meta mb-2">01</div>
            <h2 className="text-h2">FEATURED PROJECTS</h2>
            <div className="divider-swiss" />
          </div>

          {featuredProjects.map((project, idx) => (
            <div key={project.title} className="col-span-12 md:col-span-4 mb-8">
              <a href={project.href} className="block card-swiss group h-full">
                <div className="number-swiss mb-4">0{idx + 1}</div>
                <h3 className="text-h3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h3>
                <p className="text-body mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-swiss">{tag}</span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-swiss">
        <div className="grid-swiss">
          <div className="col-span-12 mb-10">
            <div className="text-meta mb-2">02</div>
            <h2 className="text-h2">INTERVIEW QUICK LINKS</h2>
            <div className="divider-swiss" />
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <a key={post.href} href={post.href} className="block card-swiss group">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-h3 group-hover:text-[var(--color-accent)] transition-colors">{post.title}</h3>
                    <span className="text-meta">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="card-swiss">
              <div className="text-meta mb-3">CONTACT</div>
              <div className="space-y-3">
                <a href="mailto:developjik@gmail.com" className="btn-swiss btn-swiss-outline w-full">EMAIL</a>
                <a href="/about" className="btn-swiss btn-swiss-outline w-full">CAREER SUMMARY</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
