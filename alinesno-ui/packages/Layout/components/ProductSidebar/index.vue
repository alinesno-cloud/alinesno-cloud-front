<template>
<div class="siderbar">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="2">
        <i class="el-icon-position"></i>
        <span slot="title">技术中台</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">研发中台</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">数据中台</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-location"></i>
        <span slot="title">物联网中台</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .siderbar{
      float: left;
      height: 100%;
      width: 60px;
      border-right: 1px solid #e6e6e6;
      margin-top: 50px;
      overflow: hidden;
  }
</style>

