import comp from "/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/python-example.html.vue"
const data = JSON.parse("{\"path\":\"/python-example.html\",\"title\":\"Python代码示例\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"python-example.md\"}")
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
