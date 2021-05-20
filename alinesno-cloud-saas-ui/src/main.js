import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'

// >>>>>>>>>>>>>>>>>> person_start >>>>>>>>>>>>>>>>>>>>>>>>>
import store from './store'
import router from './router'
import './permission'
// >>>>>>>>>>>>>>>>>> person_end >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>> alinesno-ui_start TODO 待整合成一个包 >>>>>>>>>>>>>>>>>>>>>>>>>
import 'alinesno-ui/src/assets/styles/element-variables.scss'
import 'alinesno-ui/src/assets/icons' // icon
import 'alinesno-ui/src/assets/styles/index.scss' // global css
import 'alinesno-ui/src/assets/styles/ruoyi.scss' // ruoyi css

import SvgIcon from 'alinesno-ui/packages/SvgIcon'// svg component
import App from 'alinesno-ui/src/App'
import permission from 'alinesno-ui/src/directive/permission'
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from "alinesno-ui/src/utils/ruoyi";
import Pagination from "alinesno-ui/packages/Pagination";
import RightToolbar from "alinesno-ui/packages/RightToolbar" // 自定义表格工具扩展

// 全局方法挂载
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

// 全局组件挂载
Vue.component('svg-icon', SvgIcon)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)

Vue.use(permission)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false
// >>>>>>>>>>>>>>>>>> alinesno-ui_end >>>>>>>>>>>>>>>>>>>>>>>>>


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

