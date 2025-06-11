export const SEARCH_INDEX = [
  {
    "title": "传感器",
    "headers": [
      {
        "level": 2,
        "title": "可用传感器",
        "slug": "可用传感器",
        "link": "#可用传感器",
        "children": []
      }
    ],
    "path": "/sensor/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数字震动传感器",
    "headers": [],
    "path": "/sensor/digital_vibration_sensor.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "光线传感器",
    "headers": [],
    "path": "/sensor/light_sensor.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/sensor/sensor.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
