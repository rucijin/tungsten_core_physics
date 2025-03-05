import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '博客',
    items: [
      { text: '分类', link: '/blog/categories/' },
      { text: '标签', link: '/blog/tags/' },
      { text: '归档', link: '/blog/archives/' },
    ]
  },
  { text: '理论力学', link: '/notes/analyticalmechanics/README.md' },
  { text: '电动力学', link: '/notes/electrodynamics/README.md' },
  { text: '量子力学', link: '/notes/quantummechanics/README.md' },
  { text: '统计物理', link: '/notes/statisticalphysics/README.md' },
  { text: '相对论', link: '/notes/relativitytheory/README.md' },
  { text: '数学', link: '/notes/math/README.md' },
  { text: 'AIx物理', link: '/notes/aixphysics/README.md' },
  { text: '英语基础', link: '/notes/english/README.md' },
  {
    text: '其它讲义',
    items: [
      { text: '普通物理', link: '/notes/physics/README.md' },
      { text: '数学', link: '/notes/math/README.md' },
      { text: 'AIx物理', link: '/notes/aixphysics/README.md' },
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

