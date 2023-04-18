import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/octo-feedboard/',
  title: "🚀 artdev-hash",
  description: "A Vite Project Board",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📰 Post', link: 'posts/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Post',
        items: [
          { text: 'Markdown Examples', link: 'posts/markdown-examples' },
          { text: 'Runtime API Examples', link: 'posts/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/artdev-hash' }
    ]
  }
})
