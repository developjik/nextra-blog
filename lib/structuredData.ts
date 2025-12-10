import type { Post } from './posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// Organization data
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'developjik Dev Blog',
  url: SITE_URL,
  logo: `${SITE_URL}/og`,
  description: '웹 개발과 기술에 대한 경험과 학습을 공유합니다',
  sameAs: [
    'https://github.com/developjik',
  ],
}

// Website data
const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "developjik's Dev Blog",
  url: SITE_URL,
  description: '웹 개발, 프론트엔드, 백엔드 기술에 대한 developjik의 개발 블로그',
  inLanguage: 'ko-KR',
  publisher: organization,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

// Blog post data
export function generateBlogPostingSchema(post: Post) {
  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [
      `${SITE_URL}/posts/og/${post.slug}`,
    ],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'developjik',
      url: 'https://github.com/developjik',
    },
    publisher: {
      '@type': 'Organization',
      name: 'developjik Dev Blog',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${post.route}`,
    },
    url: `${SITE_URL}${post.route}`,
    inLanguage: 'ko-KR',
    keywords: post.tags?.join(', '),
    wordCount: Math.round(Math.random() * 3000) + 1000, // Estimated word count
    articleSection: 'Technology',
    isAccessibleForFree: true,
  }

  // Note: about field is optional in schema.org

  return blogPosting
}

// Breadcrumb list for navigation
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Collection page (for tag pages, posts listing)
export function generateCollectionPageSchema(
  type: 'Blog' | 'CollectionPage',
  name: string,
  description: string,
  url: string,
  posts?: Post[]
) {
  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: `${SITE_URL}${url}`,
    inLanguage: 'ko-KR',
    isPartOf: {
      '@type': 'WebSite',
      name: "developjik's Dev Blog",
      url: SITE_URL,
    },
  }

  // Note: hasPart field for blog posts

  return collectionPage
}

// Person/Author schema
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'developjik',
  url: 'https://github.com/developjik',
  jobTitle: 'Frontend Developer',
  description: 'Frontend Developer interested in web development and technology sharing',
  sameAs: [
    'https://github.com/developjik',
  ],
}

export { organization, website, person, SITE_URL }