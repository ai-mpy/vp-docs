export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/sensor/", { loader: () => import(/* webpackChunkName: "sensor_index.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/sensor/index.html.js"), meta: {"title":"传感器"} }],
  ["/sensor/digital_vibration_sensor.html", { loader: () => import(/* webpackChunkName: "sensor_digital_vibration_sensor.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/sensor/digital_vibration_sensor.html.js"), meta: {"title":"数字震动传感器"} }],
  ["/sensor/light_sensor.html", { loader: () => import(/* webpackChunkName: "sensor_light_sensor.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/sensor/light_sensor.html.js"), meta: {"title":"光线传感器"} }],
  ["/sensor/sensor.html", { loader: () => import(/* webpackChunkName: "sensor_sensor.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/sensor/sensor.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/liming/Documents/work/micro_python/vp-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
