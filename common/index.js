import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import Vue from 'vue'

import playerPicker from './src/components/playerPicker'
import Layout from './packages/Layout/layout.vue'
import CommonRoutes from './src/router/index.js'

Vue.use(WeVue)

export {
  playerPicker ,
  Layout ,
  CommonRoutes
}
