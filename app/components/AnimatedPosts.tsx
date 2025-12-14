'use client'

import { motion } from 'motion/react'
import { PostCard } from './PostCard'
import type { Post } from '@/lib/posts'
import {
  containerVariants,
  fadeInUpVariants,
  scaleInVariants,
  cardVariants,
} from '@/lib/animations'

interface AnimatedPostsProps {
  posts: Post[]
}

export function AnimatedPosts({ posts }: AnimatedPostsProps) {
  return (
    <motion.section
      id="posts"
      className="max-w-4xl mx-auto px-4 py-16"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between mb-12"
        variants={fadeInUpVariants}
      >
        <div>
          <h2 className="heading-2 mb-2">
            Recent Posts
          </h2>
          <p className="body-base text-muted-foreground">
            개발 경험과 지식을 기록하고 공유합니다
          </p>
        </div>
      </motion.div>

      {posts.length > 0 ? (
        <motion.div
          className="grid gap-8"
          variants={containerVariants}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.route}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-20 bg-muted/50 rounded-2xl border-2 border-dashed"
          variants={scaleInVariants}
        >
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="heading-4">
              No posts yet
            </h3>
            <p className="body-base text-muted-foreground">
              Start writing your first post to see it here!
            </p>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}