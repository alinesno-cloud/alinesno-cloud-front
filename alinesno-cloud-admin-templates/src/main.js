import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'

// >>>>>>>>>>>>>>>>>> person_start >>>>>>>>>>>>>>>>>>>>>>>>>
import store from './store'
import router from './router'
import './permission'
// >>>>>>>>>>>>>>>>>> person_end >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>> common_start TODO 待整合成一个包 >>>>>>>>>>>>>>>>>>>>>>>>>
import 'common/src/assets/styles/element-variables.scss'
import 'common/src/assets/icons' // icon
import 'common/src/assets/styles/index.scss' // global css
import 'common/src/assets/styles/ruoyi.scss' // ruoyi css

import SvgIcon from 'common/packages/SvgIcon'// svg component
import App from 'common/src/App'
import permission from 'common/src/directive/permission'
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from "common/src/utils/ruoyi";
import Pagination from "common/packages/Pagination";
import RightToolbar from "common/packages/RightToolbar" // 自定义表格工具扩展

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
// >>>>>>>>>>>>>>>>>> common_end >>>>>>>>>>>>>>>>>>>>>>>>>


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

