'use client'

import type { ReactNode } from 'react'

type SwissCardProps = {
  children: ReactNode
  number?: string
  title?: string
  description?: string
  tags?: readonly string[]
  href?: string
  className?: string
}

/**
 * SwissCard - Swiss-International Style 포스트 카드
 *
 * 특징:
 * - 번호 시스템 (01, 02, 03...)
 * - 대문자만 사용하는 헤드라인
 * - 네거티브 스페이스 활용
 * - 미니멀 border와 각진 모서리
 */
export function SwissCard({
  children,
  number,
  title,
  description,
  tags,
  href,
  className = '',
}: SwissCardProps) {
  const cardContent = (
    <div className={`card-swiss group ${className}`}>
      <div
        className="absolute bottom-0 left-0 w-[2px] h-0 bg-[var(--color-accent)] group-hover:h-full transition-all duration-500 ease-out origin-bottom"
        style={{ boxShadow: '0 0 12px rgba(230, 57, 70, 0.5)' }}
      />

      {/* Number System - 포스트 번호 */}
      {number && (
        <div
          className="number-swiss mb-4 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 ease-out"
          style={{ transform: 'group-hover: scale(1.1)' }}
        >
          {number}
        </div>
      )}

      {/* Content */}
      <div className="space-swiss-md">
        {title && (
          <h3 className="text-h2 group-hover:text-[var(--color-accent)] transition-all duration-300 ease-out group-hover:tracking-tight">
            {title}
          </h3>
        )}

        {description && (
          <p
            className="text-body transition-opacity duration-300 group-hover:opacity-90"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="tag-swiss transition-all duration-300 ease-out"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>

      {/* Arrow Indicator - 오른쪽 하단 */}
      {href && (
        <div className="mt-6 flex items-center gap-2 text-meta group-hover:gap-4 transition-all duration-300 ease-out">
          <span className="text-meta">READ MORE</span>
          <svg
            aria-hidden="true"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block link-swiss">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
