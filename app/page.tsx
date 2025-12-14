import { getAllPosts } from '@/lib/posts'
import { AnimatedHero } from './components/AnimatedHero'
import { AnimatedPosts } from './components/AnimatedPosts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section - Client Component with animations */}
      <AnimatedHero />

      {/* Posts Section - Client Component with animations */}
      <AnimatedPosts posts={posts} />
    </div>
  )
}
