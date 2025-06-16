import comp from "/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/sensor/light_sensor.html.vue"
const data = JSON.parse("{\"path\":\"/sensor/light_sensor.html\",\"title\":\"光线传感器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"光线传感器\"},\"git\":{\"contributors\":[{\"name\":\"李明\",\"username\":\"\",\"email\":\"flashpf@qq.com\",\"commits\":1},{\"name\":\"bright\",\"username\":\"bright\",\"email\":\"flashpf@qq.com\",\"commits\":2,\"url\":\"https://github.com/bright\"}],\"changelog\":[{\"hash\":\"d6cb535a7f89fa1c71ad1735496a46cd1cef2da3\",\"time\":1749657282000,\"email\":\"flashpf@qq.com\",\"author\":\"bright\",\"message\":\"fixed bugs.\"},{\"hash\":\"694c6fc96ca8e42c2e189950eaccc83d156702da\",\"time\":1749628052000,\"email\":\"flashpf@qq.com\",\"author\":\"bright\",\"message\":\"更新传感器文档，添加作者信息为bright\"},{\"hash\":\"554f60ec460047f25aba3a0dd88899c40db60b72\",\"time\":1749626289000,\"email\":\"flashpf@qq.com\",\"author\":\"李明\",\"message\":\"first commit\"}]},\"filePathRelative\":\"sensor/light_sensor.md\"}")
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
