export const siteData = JSON.parse("{\"base\":\"/vp-docs/\",\"lang\":\"en-US\",\"title\":\"LGBIT 文档\",\"description\":\"基于MicroPython语言与图形化编程的教育平台\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"LGBIT 文档\",\"description\":\"基于MicroPython语言与图形化编程的教育平台\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
