'use client'

import { type ReactNode, useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'up' | 'down' | 'left' | 'right' | 'scale'
  delay?: number
  threshold?: number
  className?: string
}

/**
 * 스크롤 리빌 애니메이션 컴포넌트
 *
 * Intersection Observer API를 사용하여 요소가 뷰포트에
 * 진입할 때 부드러운 애니메이션을 적용합니다.
 *
 * @example
 * <ScrollReveal variant="up" delay={100}>
 *   <div>내용</div>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 지연 시간 적용
            setTimeout(() => {
              element.classList.add('revealed')
            }, delay)
            // 한번 나타나면 관찰 중지
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // 하단에서 50px 먼저 트리거
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  const variantClasses = {
    up: 'scroll-reveal',
    down: 'scroll-reveal', // 아래에서 위는 기본과 동일
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  }

  return (
    <div ref={ref} className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </div>
  )
}

/**
 * 스크롤 리빌 그룹 컴포넌트
 *
 * 여러 자식 요소들을 순차적으로 애니메이션합니다.
 *
 * @example
 * <ScrollRevealGroup stagger={100}>
 *   <div>첫 번째</div>
 *   <div>두 번째</div>
 *   <div>세 번째</div>
 * </ScrollRevealGroup>
 */
export function ScrollRevealGroup({
  children,
  variant = 'up',
  baseDelay = 0,
  stagger = 100,
  threshold = 0.1,
  className = '',
}: Omit<ScrollRevealProps, 'delay'> & {
  baseDelay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const childElements = Array.from(element.children)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            childElements.forEach((child, index) => {
              setTimeout(
                () => {
                  ;(child as HTMLElement).classList.add('revealed')
                },
                baseDelay + index * stagger
              )
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [baseDelay, stagger, threshold])

  const variantClasses = {
    up: 'scroll-reveal',
    down: 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  }

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={variantClasses[variant]}
              style={{ transitionDelay: `${index * stagger}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
