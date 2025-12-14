'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import {
  heroVariants,
  badgeVariants,
  titleVariants,
  descriptionVariants,
  ctaVariants,
} from '@/lib/animations'

export function AnimatedHero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 py-20 md:py-32"
      initial="initial"
      animate="animate"
      variants={heroVariants}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border"
            variants={badgeVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium">
              배우고 성장하는 개발자
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="heading-display text-gradient"
            variants={titleVariants}
          >
            developjik
          </motion.h1>

          {/* Description */}
          <motion.p
            className="body-large text-muted-foreground max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            Frontend Developer | 웹 개발과 기술에 대한 경험과 학습을 공유합니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={ctaVariants}
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="#posts">
                <span>Read Posts</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/tags">
                <span>Browse Tags</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  )
}