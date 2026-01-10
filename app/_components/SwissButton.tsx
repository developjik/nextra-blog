'use client'

import type { ReactNode } from 'react'

type SwissButtonProps = {
  children: ReactNode
  variant?: 'default' | 'outline' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

/**
 * SwissButton - Swiss-International Style 버튼
 *
 * 특징:
 * - 3가지 변형 (default, outline, primary)
 * - 3가지 사이즈 (sm, md, lg)
 * - 프리미엄 마이크로인터랙션
 * - 호버 시 scale + shadow 조합
 */
export function SwissButton({
  children,
  variant = 'default',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
}: SwissButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold
    transition-all duration-200 ease-out
    border border-solid rounded-none
    active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
  `

  const variantClasses = {
    default: `
      bg-[var(--swiss-white)] dark:bg-[var(--swiss-charcoal)]
      text-[var(--swiss-black)] dark:text-[var(--swiss-white)]
      border-[var(--swiss-border)]
      hover:bg-[var(--swiss-black)] dark:hover:bg-[var(--swiss-white)]
      hover:text-[var(--swiss-white)] dark:hover:text-[var(--swiss-black)]
      hover:border-[var(--swiss-black)] dark:hover:border-[var(--swiss-white)]
      hover:shadow-lg
      focus:ring-[var(--swiss-red)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-text-secondary)]
      border-[var(--swiss-gray)]
      hover:bg-[var(--swiss-black)] dark:hover:bg-[var(--swiss-white)]
      hover:text-[var(--swiss-white)] dark:hover:text-[var(--swiss-black)]
      hover:border-[var(--swiss-black)] dark:hover:border-[var(--swiss-white)]
      hover:shadow-md
      focus:ring-[var(--swiss-red)]
    `,
    primary: `
      bg-[var(--swiss-black)] dark:bg-[var(--swiss-white)]
      text-[var(--swiss-white)] dark:text-[var(--swiss-black)]
      border-[var(--swiss-black)] dark:border-[var(--swiss-white)]
      hover:bg-[var(--swiss-red)] dark:hover:bg-[var(--swiss-red)]
      hover:text-[var(--swiss-white)]
      hover:border-[var(--swiss-red)]
      hover:shadow-xl hover:shadow-red-500/20
      focus:ring-[var(--swiss-red)]
    `,
  }

  const buttonElement = (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim()}
      style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: 'var(--tracking-meta)',
        textTransform: 'uppercase',
      }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )

  if (href && !disabled) {
    return (
      <a
        href={href}
        className="inline-block active:scale-[0.98] transition-transform duration-150"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick?.()
          }
        }}
      >
        {buttonElement}
      </a>
    )
  }

  return buttonElement
}
