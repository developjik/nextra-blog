import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'

// Get the default MDX components from blog theme
const themeComponents = getThemeComponents()

// Custom wrapper to apply our styles
function ArticleWrapper({ children }) {
  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
      prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2
      prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
      prose-p:text-base prose-p:leading-7 prose-p:mb-6 prose-p:text-foreground/90
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-strong:font-semibold
      prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
      prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
      prose-li:my-2 prose-li:text-foreground/90
      prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-6
      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6
      prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
      prose-hr:my-8 prose-hr:border-border
      prose-table:my-8 prose-table:w-full
      prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
      prose-td:p-3 prose-td:border-t prose-td:border-border
    "
    >
      {children}
    </div>
  )
}

// Merge components with custom overrides
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    wrapper: ArticleWrapper,
    ...components,
  }
}
