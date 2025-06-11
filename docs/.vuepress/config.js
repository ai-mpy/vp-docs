import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  title: 'LGBIT 文档',
  description: '基于MicroPython语言与图形化编程的教育平台',
  base: '/vp-docs/',  // 已经正确设置为仓库名称
  bundler: viteBundler(),
  theme: defaultTheme({
    // 配置顶部导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '传感器',
        link: '/sensor/',
        children: [
          {
            text: '光线传感器',
            link: '/sensor/light_sensor.html',
          },
          {
            text: '数字震动传感器',
            link: '/sensor/digital_vibration_sensor.html',
          },
        ],
      },
    ],
    // 手动配置侧边栏
    sidebar: {
      '/': [
        {
          text: '图形化编程',
          collapsible: false,
          children: [
            '/sensor/mp_pin.md',
            // 添加其他相关文档
          ],
        },
        {
          text: '传感器',
          collapsible: false,
          children: [
            '/sensor/light_sensor.md',
            '/sensor/digital_vibration_sensor.md'
            // 添加其他相关文档
          ],
        },
        // 添加其他分类
      ],
    },
    // 可选：控制展开层级
    sidebarDepth: 2,
    displayAllHeaders: true,
    activeHeaderLinks: true,
    sidebarCollapse: false,
    // 最后更新时间
    lastUpdated: false,
    // 贡献者
    contributors: false,
  }),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
      maxSuggestions: 10, // 最多显示10个搜索结果
      hotKeys: ['s', '/'], // 热键，按下 s 或 / 激活搜索框
      getExtraFields: (page) => page.frontmatter.tags ?? [], // 允许搜索frontmatter中的tags字段
      isSearchable: (page) => page.path !== '/', // 排除首页
    }),
  ],
})
