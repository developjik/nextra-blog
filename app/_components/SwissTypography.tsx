'use client'

import type { ReactNode } from 'react'

type SwissTypographyProps = {
  children: ReactNode
  variant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'meta'
  className?: string
}

/**
 * SwissTypography - Swiss-International Style 타이포그래프 헬퍼
 *
 * 특징:
 * - 극단적 크기 대비 (hero: 128px, meta: 10px)
 * - 대문자만 (headings, meta)
 * - 넓은 자간 (meta: 0.1em)
 * - 폰트 패밀리 자동 적용
 */
export function SwissTypography({
  children,
  variant = 'body',
  className = '',
}: SwissTypographyProps) {
  const variantClasses = {
    hero: 'text-hero',
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    body: 'text-body',
    meta: 'text-meta',
  }

  return <p className={`${variantClasses[variant]} ${className}`}>{children}</p>
}

/**
 * SwissHero - 극적으로 큰 헤드라인
 */
export function SwissHero({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <h1 className={`text-hero ${className}`}>{children}</h1>
}

/**
 * SwissHeading - 대문자 헤딩
 */
export function SwissHeading({
  level = 2,
  children,
  className = '',
}: {
  level?: 1 | 2 | 3 | 4
  children: ReactNode
  className?: string
}) {
  const Tag = `h${level}` as const
  const levelClasses = {
    1: 'text-h1',
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
  }

  return <Tag className={`${levelClasses[level]} ${className}`}>{children}</Tag>
}

/**
 * SwissMeta - 매우 작은 대문자 텍스트 (날짜, 태그 등)
 */
export function SwissMeta({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={`text-meta ${className}`}>{children}</p>
}
