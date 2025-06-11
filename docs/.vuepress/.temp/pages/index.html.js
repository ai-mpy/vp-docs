import comp from "/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"LGBIT文档\",\"tagline\":\"简单易用的教育指南\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"MicroPython\",\"details\":\"致力于MicroPython教育\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present bright\"},\"git\":{\"contributors\":[{\"name\":\"李明\",\"username\":\"\",\"email\":\"flashpf@qq.com\",\"commits\":1},{\"name\":\"bright\",\"username\":\"bright\",\"email\":\"flashpf@qq.com\",\"commits\":1,\"url\":\"https://github.com/bright\"}],\"changelog\":[{\"hash\":\"075e658b937a9bd0db9633ef7c1a2fe77e4c5b73\",\"time\":1749627957000,\"email\":\"flashpf@qq.com\",\"author\":\"bright\",\"message\":\"更新贡献者为bright\"},{\"hash\":\"554f60ec460047f25aba3a0dd88899c40db60b72\",\"time\":1749626289000,\"email\":\"flashpf@qq.com\",\"author\":\"李明\",\"message\":\"first commit\"}]},\"filePathRelative\":\"README.md\"}")
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
