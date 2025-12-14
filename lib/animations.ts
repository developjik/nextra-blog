import { type Variants } from 'motion/react'

// 페이지 로드 시의 스테이지드 애니메이션 variants
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

// 히어로 섹션 애니메이션
export const heroVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// 히어로 배지 애니메이션
export const badgeVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
}

// 히어로 제목 애니메이션
export const titleVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
}

// 히어로 설명 애니메이션
export const descriptionVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
}

// CTA 버튼들 애니메이션
export const ctaVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.7,
      staggerChildren: 0.1,
    },
  },
}

// 포스트 카드 애니메이션
export const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
}

// 컨테이너에 있는 여러 카드들을 위한 스테이저 애니메이션
export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

// 페이드인 업 애니메이션 (일반적 용도)
export const fadeInUpVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// 페이드인 애니메이션
export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// 슬라이드인 왼쪽 애니메이션
export const slideInLeftVariants: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// 슬라이드인 오른쪽 애니메이션
export const slideInRightVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// 스케일인 애니메이션
export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// 반응형 애니메이션 설정
export const responsiveAnimationProps = {
  initial: 'initial',
  animate: 'animate',
  whileHover: 'hover',
  whileTap: 'tap',
  exit: 'exit',
}

// 커스텀 easing functions
export const easing = {
  easeOut: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth animations
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.16, 0, 0.3, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
} as const