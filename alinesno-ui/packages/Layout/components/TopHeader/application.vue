<template>
<div class="select-app">
    <el-select v-model="value" placeholder="请选择">
    <el-option
    v-for="item in cities"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
    </el-select>
</div>
</template>

<script>
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '通用权限管理组件'
        }, {
          value: 'Shanghai',
          label: '集团权限管理组件'
        }, {
          value: 'Nanjing',
          label: '单点登陆管理平台'
        }, {
          value: 'Chengdu',
          label: '消息通知管理平台'
        }],
        value: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.select-app {
    margin-top: 7px ;
    margin-left: 20px;
    float: left ;
}
.el-input__inner{
    font-size: 12px !important ;
    border-radius: 2px !important ;
}
</style>
