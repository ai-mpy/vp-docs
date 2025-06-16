import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 客户端增强
  },
  setup() {
    // 在Vue应用实例创建后执行
  },
  rootComponents: [
    // 根组件
  ],
  // 添加全局样式，支持Shiki深色/浅色模式切换
  clientConfigFile: () => {
    return `
    // 为Shiki添加深色模式支持
    html.dark .shiki,
    html.dark .shiki span {
      color: var(--shiki-dark) !important;
      background-color: var(--shiki-dark-bg) !important;
      /* 可选，如果也想要字体样式 */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
    }
    `
  }
}) 