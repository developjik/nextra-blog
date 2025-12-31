'use client'

import type { ReactNode } from 'react'

type SwissGridProps = {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  className?: string
}

/**
 * SwissGrid - Swiss-International Style 그리드 레이아웃
 *
 * 특징:
 * - 12칼럼 시스템
 * - 24px gutter
 * - 정확한 간격 유지
 */
export function SwissGrid({
  children,
  cols = 12,
  className = '',
}: SwissGridProps) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    12: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
  }

  return (
    <div className={`grid ${colClasses[cols]} gap-6 ${className}`}>
      {children}
    </div>
  )
}

/**
 * SwissCol - 개별 칼럼
 */
type SwissColProps = {
  children: ReactNode
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12
  offset?: 0 | 1 | 2 | 3 | 4 | 6
  className?: string
}

export function SwissCol({
  children,
  span = 12,
  offset = 0,
  className = '',
}: SwissColProps) {
  const spanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    8: 'col-span-8',
    12: 'col-span-12',
  }

  const offsetClasses = {
    0: '',
    1: 'md:col-start-2',
    2: 'md:col-start-3',
    3: 'md:col-start-4',
    4: 'md:col-start-5',
    6: 'md:col-start-7',
  }

  return (
    <div
      className={`${spanClasses[span]} ${offsetClasses[offset]} ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * SwissSection - 넉넉한 padding을 가진 섹션
 */
type SwissSectionProps = {
  children: ReactNode
  compact?: boolean
  className?: string
}

export function SwissSection({
  children,
  compact = false,
  className = '',
}: SwissSectionProps) {
  return (
    <section
      className={`${compact ? 'section-swiss-compact' : 'section-swiss'} ${className}`}
    >
      <div className="grid-swiss">{children}</div>
    </section>
  )
}
