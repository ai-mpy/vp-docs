import comp from "/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"MicroPython文档\",\"tagline\":\"简单易用的MicroPython传感器指南\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/sensor/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以最简洁的代码展示传感器的使用方法。\"},{\"title\":\"实例丰富\",\"details\":\"每个传感器都提供了详细的使用示例。\"},{\"title\":\"性能高效\",\"details\":\"优化的代码示例，确保在资源有限的设备上高效运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
