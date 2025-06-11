export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"传感器\",\"link\":\"/sensor/\",\"children\":[{\"text\":\"光线传感器\",\"link\":\"/sensor/light_sensor.html\"},{\"text\":\"数字震动传感器\",\"link\":\"/sensor/digital_vibration_sensor.html\"}]}],\"sidebar\":{\"/\":[{\"text\":\"传感器\",\"collapsible\":false,\"children\":[\"/sensor/light_sensor.md\",\"/sensor/digital_vibration_sensor.md\"]}]},\"sidebarDepth\":2,\"displayAllHeaders\":true,\"activeHeaderLinks\":true,\"sidebarCollapse\":false,\"lastUpdated\":true,\"lastUpdatedText\":\"最后更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
