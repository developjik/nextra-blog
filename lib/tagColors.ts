// Tag color mapping for consistent visual hierarchy
export const tagColorMap: Record<string, { light: string; dark: string; border: string }> = {
  // Technology & Frameworks
  'React': { light: 'bg-cyan-50', dark: 'bg-cyan-950', border: 'border-cyan-200 dark:border-cyan-800' },
  'Next.js': { light: 'bg-gray-50', dark: 'bg-gray-900', border: 'border-gray-300 dark:border-gray-700' },
  'TypeScript': { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },
  'JavaScript': { light: 'bg-yellow-50', dark: 'bg-yellow-950', border: 'border-yellow-200 dark:border-yellow-800' },
  'Vue': { light: 'bg-emerald-50', dark: 'bg-emerald-950', border: 'border-emerald-200 dark:border-emerald-800' },
  'Angular': { light: 'bg-red-50', dark: 'bg-red-950', border: 'border-red-200 dark:border-red-800' },
  'Svelte': { light: 'bg-orange-50', dark: 'bg-orange-950', border: 'border-orange-200 dark:border-orange-800' },
  'Node.js': { light: 'bg-lime-50', dark: 'bg-lime-950', border: 'border-lime-200 dark:border-lime-800' },

  // Languages
  'Python': { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },
  'Java': { light: 'bg-red-50', dark: 'bg-red-950', border: 'border-red-200 dark:border-red-800' },
  'Go': { light: 'bg-cyan-50', dark: 'bg-cyan-950', border: 'border-cyan-200 dark:border-cyan-800' },
  'Rust': { light: 'bg-orange-50', dark: 'bg-orange-950', border: 'border-orange-200 dark:border-orange-800' },

  // Topics
  'Tutorial': { light: 'bg-violet-50', dark: 'bg-violet-950', border: 'border-violet-200 dark:border-violet-800' },
  '튜토리얼': { light: 'bg-violet-50', dark: 'bg-violet-950', border: 'border-violet-200 dark:border-violet-800' },
  'Design': { light: 'bg-pink-50', dark: 'bg-pink-950', border: 'border-pink-200 dark:border-pink-800' },
  'Performance': { light: 'bg-green-50', dark: 'bg-green-950', border: 'border-green-200 dark:border-green-800' },
  'Security': { light: 'bg-red-50', dark: 'bg-red-950', border: 'border-red-200 dark:border-red-800' },
  'DevOps': { light: 'bg-indigo-50', dark: 'bg-indigo-950', border: 'border-indigo-200 dark:border-indigo-800' },
  'Testing': { light: 'bg-teal-50', dark: 'bg-teal-950', border: 'border-teal-200 dark:border-teal-800' },
  'AI/ML': { light: 'bg-purple-50', dark: 'bg-purple-950', border: 'border-purple-200 dark:border-purple-800' },
  'Database': { light: 'bg-sky-50', dark: 'bg-sky-950', border: 'border-sky-200 dark:border-sky-800' },

  // Content Types
  'News': { light: 'bg-amber-50', dark: 'bg-amber-950', border: 'border-amber-200 dark:border-amber-800' },
  'Opinion': { light: 'bg-slate-50', dark: 'bg-slate-900', border: 'border-slate-200 dark:border-slate-700' },
  'Guide': { light: 'bg-emerald-50', dark: 'bg-emerald-950', border: 'border-emerald-200 dark:border-emerald-800' },
  'Review': { light: 'bg-fuchsia-50', dark: 'bg-fuchsia-950', border: 'border-fuchsia-200 dark:border-fuchsia-800' },

  // Tools & Libraries
  'Tailwind': { light: 'bg-sky-50', dark: 'bg-sky-950', border: 'border-sky-200 dark:border-sky-800' },
  'Webpack': { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },
  'Vite': { light: 'bg-purple-50', dark: 'bg-purple-950', border: 'border-purple-200 dark:border-purple-800' },
  'Docker': { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },

  // Default/Nextra/MDX
  'Nextra': { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },
  'MDX': { light: 'bg-orange-50', dark: 'bg-orange-950', border: 'border-orange-200 dark:border-orange-800' },
}

// Generate a consistent color based on tag name hash
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

const defaultColors = [
  { light: 'bg-blue-50', dark: 'bg-blue-950', border: 'border-blue-200 dark:border-blue-800' },
  { light: 'bg-purple-50', dark: 'bg-purple-950', border: 'border-purple-200 dark:border-purple-800' },
  { light: 'bg-pink-50', dark: 'bg-pink-950', border: 'border-pink-200 dark:border-pink-800' },
  { light: 'bg-emerald-50', dark: 'bg-emerald-950', border: 'border-emerald-200 dark:border-emerald-800' },
  { light: 'bg-amber-50', dark: 'bg-amber-950', border: 'border-amber-200 dark:border-amber-800' },
  { light: 'bg-cyan-50', dark: 'bg-cyan-950', border: 'border-cyan-200 dark:border-cyan-800' },
  { light: 'bg-violet-50', dark: 'bg-violet-950', border: 'border-violet-200 dark:border-violet-800' },
  { light: 'bg-lime-50', dark: 'bg-lime-950', border: 'border-lime-200 dark:border-lime-800' },
]

export function getTagColor(tag: string): { light: string; dark: string; border: string } {
  // Check if tag exists in predefined map (case-insensitive)
  const mappedColor = tagColorMap[tag] || tagColorMap[tag.toLowerCase()] ||
                      Object.entries(tagColorMap).find(([key]) =>
                        key.toLowerCase() === tag.toLowerCase()
                      )?.[1]

  if (mappedColor) {
    return mappedColor
  }

  // Generate consistent color based on hash
  const hash = hashString(tag)
  const colorIndex = hash % defaultColors.length
  return defaultColors[colorIndex]
}

export function getTagTextColor(tag: string): string {
  // Return appropriate text color based on tag
  const predefinedTags = Object.keys(tagColorMap)
  const isKnownTag = predefinedTags.some(t => t.toLowerCase() === tag.toLowerCase())

  if (isKnownTag) {
    return 'text-gray-700 dark:text-gray-300'
  }

  return 'text-gray-700 dark:text-gray-300'
}
