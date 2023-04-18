import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/octo-feedboard/',
  title: "octo-feedboard",
  description: "A Vite Project Board",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📰 Post', link: 'docs/post/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Post',
        items: [
          { text: 'Markdown Examples', link: 'docs/post/markdown-examples' },
          { text: 'Docs', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/artdev-hash' }
    ]
  }
})
