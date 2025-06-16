import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from '@vuepress/utils'
// 引入 markdown-it-task-lists 插件
import MarkdownItTaskLists from 'markdown-it-task-lists'
// 引入 shiki 插件
import Shiki from '@shikijs/markdown-it'
import MarkdownIt from 'markdown-it'

export default defineUserConfig({
  title: 'LGBIT 文档',
  description: '基于MicroPython语言与图形化编程的教育平台',
  // 修改 base 配置项
  base: '/vp-docs/', // 设置为与GitHub仓库名匹配的路径，适用于GitHub Pages
  bundler: viteBundler(),
  // 设置默认语言为中文
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LGBIT 文档',
      description: '基于MicroPython语言与图形化编程的教育平台',
    },
  },
  // 客户端增强文件路径
  clientConfigFile: path.resolve(__dirname, './client.js'),
  // 扩展 Markdown
  async extendMarkdown(md) {
    md.use(MarkdownItTaskLists)
    
    // 使用独立的 MarkdownIt 实例进行 Shiki 配置
    const customMd = MarkdownIt()
    
    customMd.use(await Shiki({
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      }
    }))
    
    // 复制配置到主 md 实例
    md.options = { ...md.options, ...customMd.options }
    md.renderer.rules = { ...md.renderer.rules, ...customMd.renderer.rules }
  },
  theme: defaultTheme({
    // 主题语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // 导航栏
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: '快速上手',
            link: '/guide/',
          }
        ],
        // 侧边栏
        sidebar: {
          '/': [
            {
              text: '图形化编程',
              collapsible: true,
              children: [
                {
                  text: '输入/输出',
                  link: '/blockly/mp_pin.md',
                },
                {
                  text: '板载输入',
                  link: '/blockly/mpbit_board_system.md',
                },
              ],
            },
            {
              text: '传感器',
              collapsible: true,
              children: [
                '/sensor/light_sensor.md',
                '/sensor/flame_sensor.md',
                '/sensor/steam_sensor.md',
                '/sensor/digital_vibration_sensor.md',
                '/sensor/gas_sensor.md',
                '/sensor/rotation_sensor.md',
                '/sensor/hcsr04.md',
                '/sensor/dht11_sensor.md'
              ],
            },
            {
              text: '执行器',
              collapsible: true,
              children: [
                '/actuator/servo.md',
              ],
            },
            {
              text: '人教版图形化',
              collapsible: true,
              children: [
                '/educore/u1_l3_1.md',
                '/educore/u1_l4_1.md',
                '/educore/u1_l4_2.md',
              ],
            },
            {
              text: '人教版MP',
              collapsible: true,
              children: [
                '/educore_py/u1_l3_1.md',
                '/educore_py/u1_l3_2.md',
                '/educore_py/u2_l7_1.md',
                '/educore_py/u2_l8_1.md',
                '/educore_py/u2_l9_1.md',
                '/educore_py/u2_l10_1.md',
                '/educore_py/u3_l12_1.md',
                '/educore_py/u3_l12_2.md',
                '/educore_py/u3_l13_1.md',
                '/educore_py/u3_l13_2.md',
                '/educore_py/u3_l14_1.md',
                '/educore_py/u3_l14_2.md',
                '/educore_py/u4_l17_1.md',
                '/educore_py/u4_l17_2.md',
                '/educore_py/u4_l20_1.md',
                '/educore_py/u4_l20_2.md',
                '/educore_py/u4_l20_3.md',
                '/educore_py/u5_l21_1.md',
                '/educore_py/u5_l22_1.md',
                '/educore_py/u5_l22_2.md',
                '/educore_py/u5_l23_1.md',
                '/educore_py/u5_l23_2.md',
                '/educore_py/u5_l24_1.md',
                '/educore_py/u5_l25_1.md',
                '/educore_py/u6_l26_1.md',
                '/educore_py/u6_l30_1.md',
                '/educore_py/u6_l30_2.md',
                '/educore_py/u6_l30_3.md',
              ],
            },
          ],
        },
        sidebarDepth: 2,
      },
    },
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
    // 添加 markdown-it-task-lists 插件
    {
      name: 'markdown-it-task-lists',
      extendsMarkdown: (md) => {
        md.use(MarkdownItTaskLists)
      }
    }
  ],
})