import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/_components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Swiss Color Palette
        'swiss-black': '#0a0a0a',
        'swiss-charcoal': '#1a1a1a',
        'swiss-gray': '#888888',
        'swiss-light-gray': '#f5f5f5',
        'swiss-white': '#ffffff',
        'swiss-red': '#e63946',
        'swiss-red-hover': '#c1121f',
        'swiss-border': '#e0e0e0',
      },
      spacing: {
        'swiss-xs': '4px',
        'swiss-sm': '8px',
        'swiss-md': '16px',
        'swiss-lg': '24px',
        'swiss-xl': '48px',
        'swiss-2xl': '64px',
        'swiss-3xl': '96px',
        'swiss-4xl': '128px',
        'swiss-5xl': '192px',
        'swiss-6xl': '256px',
      },
      fontFamily: {
        hero: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        heading: ['var(--font-syne)', 'Syne', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(3rem, 10vw, 8rem)',
        h1: 'clamp(2.5rem, 6vw, 5rem)',
        h2: 'clamp(1.5rem, 4vw, 3rem)',
        h3: 'clamp(1.25rem, 3vw, 2rem)',
        h4: 'clamp(1rem, 2.5vw, 1.5rem)',
        meta: 'clamp(0.625rem, 0.8vw, 0.75rem)',
      },
      letterSpacing: {
        hero: '-0.03em',
        heading: '-0.02em',
        body: '0.005em',
        meta: '0.1em',
      },
      lineHeight: {
        hero: '0.95',
        heading: '1.1',
        body: '1.7',
        meta: '1.4',
      },
    },
  },
  plugins: [],
}

export default config
