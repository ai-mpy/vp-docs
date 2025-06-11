
import { DocSearch, injectDocSearchConfig } from "/Users/liming/Documents/work/micro_python/vp-docs/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/Users/liming/Documents/work/micro_python/vp-docs/node_modules/@docsearch/css/dist/style.css'
import '/Users/liming/Documents/work/micro_python/vp-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/Users/liming/Documents/work/micro_python/vp-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
