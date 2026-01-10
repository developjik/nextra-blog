'use client'

import { useEffect, useState } from 'react'
import { PostCardSkeleton, ScrollReveal } from './index'

export function Homepage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className="relative min-h-screen">
      <section className="section-swiss">
        <div className="grid-swiss">
          <div className="col-span-12 text-center">
            <div className="space-swiss-sm">
              <ScrollReveal variant="up">
                <div className="text-meta mb-4">01</div>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-hero mb-6">
                  DEVELOPPIK'S
                  <br />
                  <span style={{ color: 'var(--color-accent)' }}>DEV BLOG</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={200}>
                <div className="divider-swiss m-swiss-auto" />
              </ScrollReveal>
              <ScrollReveal variant="up" delay={300}>
                <div
                  className="text-body mt-6"
                  style={{
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    marginInline: 'auto',
                  }}
                >
                  웹 개발에 대한 경험과 학습을 기록하고 공유하는 공간입니다.
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-swiss"
        style={{ backgroundColor: 'var(--swiss-light-gray)' }}
      >
        <div className="grid-swiss">
          <div className="col-span-12 mb-12">
            <ScrollReveal variant="up">
              <div className="text-meta mb-2">02</div>
              <h2 className="text-h2">LATEST POSTS</h2>
              <div className="divider-swiss" />
            </ScrollReveal>
          </div>

          {loading ? (
            <>
              <div className="col-span-12 md:col-span-4 mb-8">
                <PostCardSkeleton />
              </div>
              <div className="col-span-12 md:col-span-4 mb-8">
                <PostCardSkeleton />
              </div>
              <div className="col-span-12 md:col-span-4 mb-8">
                <PostCardSkeleton />
              </div>
            </>
          ) : (
            <>
              <div className="col-span-12 md:col-span-4 mb-8">
                <ScrollReveal variant="up" delay={100}>
                  <a href="/posts/welcome" className="block card-swiss group">
                    <div className="number-swiss mb-4">01</div>
                    <h3 className="text-h3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                      WELCOME
                    </h3>
                    <div
                      className="text-body mb-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      개발 블로그를 시작하며 안녕하세요!
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="tag-swiss">INTRO</span>
                      <span className="tag-swiss">BLOG</span>
                    </div>
                    <div className="flex items-center gap-2 text-meta">
                      <span>2025.11.18</span>
                      <span style={{ color: 'var(--color-text-meta)' }}>→</span>
                    </div>
                  </a>
                </ScrollReveal>
              </div>

              <div className="col-span-12 md:col-span-4 mb-8">
                <ScrollReveal variant="up" delay={200}>
                  <a
                    href="/posts/javascript-async-processing-complete-guide"
                    className="block card-swiss group"
                  >
                    <div className="number-swiss mb-4">02</div>
                    <h3 className="text-h3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                      JAVASCRIPT ASYNC
                    </h3>
                    <div
                      className="text-body mb-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      비동기 처리 완벽 가이드
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="tag-swiss">JAVASCRIPT</span>
                      <span className="tag-swiss">ASYNC</span>
                    </div>
                    <div className="flex items-center gap-2 text-meta">
                      <span>READ MORE</span>
                      <span style={{ color: 'var(--color-text-meta)' }}>→</span>
                    </div>
                  </a>
                </ScrollReveal>
              </div>

              <div className="col-span-12 md:col-span-4 mb-8">
                <ScrollReveal variant="up" delay={300}>
                  <a
                    href="/posts/javascript-this-complete-guide"
                    className="block card-swiss group"
                  >
                    <div className="number-swiss mb-4">03</div>
                    <h3 className="text-h3 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                      THIS COMPLETE GUIDE
                    </h3>
                    <div
                      className="text-body mb-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      JavaScript this 완벽 이해
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="tag-swiss">JAVASCRIPT</span>
                      <span className="tag-swiss">THIS</span>
                    </div>
                    <div className="flex items-center gap-2 text-meta">
                      <span>READ MORE</span>
                      <span style={{ color: 'var(--color-text-meta)' }}>→</span>
                    </div>
                  </a>
                </ScrollReveal>
              </div>
            </>
          )}

          <div className="col-span-12 text-center mt-8">
            <ScrollReveal variant="up" delay={400}>
              <a href="/archives" className="btn-swiss btn-swiss-outline">
                VIEW ALL POSTS
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-swiss">
        <div className="grid-swiss">
          <div className="col-span-12 md:col-span-6">
            <ScrollReveal variant="up">
              <div className="text-meta mb-2">03</div>
              <h2 className="text-h2 mb-6">ABOUT THIS BLOG</h2>
              <div className="divider-swiss mb-6" />
              <div
                className="text-body mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                이 블로그는 제가 개발하면서 배우고 경험한 것들을 기록하고
                공유하기 위해 만들었습니다.
              </div>
              <div
                className="text-body"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                JavaScript, React, Next.js, TypeScript 등 현대 웹 개발 기술에
                대한 실용적인 팁과 경험을 공유합니다.
              </div>
            </ScrollReveal>
          </div>

          <div className="col-span-12 md:col-span-6">
            <ScrollReveal variant="up" delay={100}>
              <div className="text-meta mb-2">04</div>
              <h2 className="text-h2 mb-6">TECH STACK</h2>
              <div className="divider-swiss mb-6" />

              <div className="space-y-3">
                <div>
                  <div className="text-meta mb-2">FRONTEND</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-swiss">React</span>
                    <span className="tag-swiss">Next.js</span>
                    <span className="tag-swiss">TypeScript</span>
                    <span className="tag-swiss">Tailwind CSS</span>
                  </div>
                </div>

                <div>
                  <div className="text-meta mb-2">BACKEND</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-swiss">Node.js</span>
                    <span className="tag-swiss">Express</span>
                    <span className="tag-swiss">PostgreSQL</span>
                    <span className="tag-swiss">MongoDB</span>
                  </div>
                </div>

                <div>
                  <div className="text-meta mb-2">TOOLS</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-swiss">Git</span>
                    <span className="tag-swiss">Docker</span>
                    <span className="tag-swiss">Vercel</span>
                    <span className="tag-swiss">AWS</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        className="section-swiss"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="grid-swiss">
          <div className="col-span-12 text-center">
            <ScrollReveal variant="up">
              <div className="text-meta mb-2">05</div>
              <h2 className="text-h2 mb-6">LET'S CONNECT</h2>
              <div className="divider-swiss m-swiss-auto" />
              <div
                className="text-body mt-6"
                style={{ maxWidth: '500px', marginInline: 'auto' }}
              >
                궁금한 점이 있으시거나 피드백을 남기고 싶으시면 언제든지
                연락주세요!
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <a
                  href="https://github.com/developjik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-swiss"
                >
                  GITHUB
                </a>
                <a
                  href="mailto:developjik@gmail.com"
                  className="btn-swiss btn-swiss-outline"
                >
                  EMAIL
                </a>
                <a href="/feed.xml" className="btn-swiss btn-swiss-outline">
                  RSS FEED
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        className="section-swiss-compact"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="grid-swiss">
          <div className="col-span-12 text-center">
            <ScrollReveal variant="scale">
              <div
                className="card-swiss"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <div className="flex items-center justify-center gap-4 text-meta">
                  <span>PRESS</span>
                  <kbd className="kbd-swiss">K</kbd>
                  <span>TO SEARCH THE BLOG</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
