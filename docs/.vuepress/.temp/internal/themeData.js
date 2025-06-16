export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"快速上手\",\"link\":\"/guide/\"}],\"sidebar\":{\"/\":[{\"text\":\"图形化编程\",\"collapsible\":true,\"children\":[{\"text\":\"输入/输出\",\"link\":\"/blockly/mp_pin.md\"},{\"text\":\"板载输入\",\"link\":\"/blockly/mpbit_board_system.md\"}]},{\"text\":\"传感器\",\"collapsible\":true,\"children\":[\"/sensor/light_sensor.md\",\"/sensor/flame_sensor.md\",\"/sensor/steam_sensor.md\",\"/sensor/digital_vibration_sensor.md\",\"/sensor/gas_sensor.md\",\"/sensor/rotation_sensor.md\",\"/sensor/hcsr04.md\",\"/sensor/dht11_sensor.md\"]},{\"text\":\"执行器\",\"collapsible\":true,\"children\":[\"/actuator/servo.md\"]},{\"text\":\"人教版图形化\",\"collapsible\":true,\"children\":[\"/educore/u1_l3_1.md\",\"/educore/u1_l4_1.md\",\"/educore/u1_l4_2.md\"]},{\"text\":\"人教版MP\",\"collapsible\":true,\"children\":[\"/educore_py/u1_l3_1.md\",\"/educore_py/u1_l3_2.md\",\"/educore_py/u2_l7_1.md\",\"/educore_py/u2_l8_1.md\",\"/educore_py/u2_l9_1.md\",\"/educore_py/u2_l10_1.md\",\"/educore_py/u3_l12_1.md\",\"/educore_py/u3_l12_2.md\",\"/educore_py/u3_l13_1.md\",\"/educore_py/u3_l13_2.md\",\"/educore_py/u3_l14_1.md\",\"/educore_py/u3_l14_2.md\",\"/educore_py/u4_l17_1.md\",\"/educore_py/u4_l17_2.md\",\"/educore_py/u4_l20_1.md\",\"/educore_py/u4_l20_2.md\",\"/educore_py/u4_l20_3.md\",\"/educore_py/u5_l21_1.md\",\"/educore_py/u5_l22_1.md\",\"/educore_py/u5_l22_2.md\",\"/educore_py/u5_l23_1.md\",\"/educore_py/u5_l23_2.md\",\"/educore_py/u5_l24_1.md\",\"/educore_py/u5_l25_1.md\",\"/educore_py/u6_l26_1.md\",\"/educore_py/u6_l30_1.md\",\"/educore_py/u6_l30_2.md\",\"/educore_py/u6_l30_3.md\"]}]},\"sidebarDepth\":2}},\"lastUpdated\":false,\"contributors\":false,\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
