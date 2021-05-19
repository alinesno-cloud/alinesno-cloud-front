import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import Vue from 'vue'

import Layout from './packages/Layout/layout.vue'
import ConstantRoutes from './src/router/index.js'

Vue.use(WeVue)

export {
  Layout ,
  ConstantRoutes
}
