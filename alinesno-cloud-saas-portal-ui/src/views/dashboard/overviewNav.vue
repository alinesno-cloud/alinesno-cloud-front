<template>
<div class="sidebar-nav">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <router-link to="/build/overview">
          <el-menu-item index="/build/overview">
            <i class="el-icon-menu"></i>
            <span slot="title">概览</span>
          </el-menu-item>
      </router-link>
      <router-link to="/build/gitlab">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">仓库配置</span>
          </el-menu-item>
      </router-link>
      <router-link to="/build/container">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">容器配置</span>
          </el-menu-item>
      </router-link>
      <router-link to="/build/information">
          <el-menu-item index="/build/information">
            <i class="el-icon-setting"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
      </router-link>
      <router-link to="/build/deploy">
          <el-menu-item index="6">
            <i class="el-icon-document"></i>
            <span slot="title">发布构建</span>
          </el-menu-item>
      </router-link>
    </el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
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

<style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
  }

  .sidebar-nav {
      float: left;
      width: 200px;
      position: fixed;
      height: 100%;
      border-right: 1px solid #e6e6e6;
  }
  .el-menu-item{
      font-size: 12px;
  }
</style>

