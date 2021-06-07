<template>
<div class="siderbar">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="2" @click="drawer = true">
        <i class="el-icon-position"></i>
        <span slot="title">研发中台</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">我的应用</span>
      </el-menu-item>
    </el-menu>

    <el-drawer
        class="productDrawer"
        :visible.sync="drawer"
        :direction="direction"
        :withHeader=false
        :modal=false
        :wrapperClosable=true
        size="700px"
        :before-close="handleClose">

        <product-list />

    </el-drawer>

</div>
</template>

<script>

import ProductList from "./ProductList";

  export default {
    components: {
        ProductList,
    },
    data() {
      return {
        drawer: false,
        direction: 'rtl',
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(done) {
        done();
        /*
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
        */
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
      padding-top: 50px;
      overflow: hidden;
      //position: fixed;
  }

  .productDrawer{
    top: 50px;
    z-index: 9 !important ;
  }

  .cf-service-box {
      margin-top: 18px;
      overflow: auto;
      position: relative;
      height: calc(100% - 76px);
  }

  .cf-service-content {
      width: 100%;
      height: calc(100% - 94px);
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 15px;
      position: relative;
      top: 20px;
  }

.cf-service-section {
    width: 200px;
    position: relative;
    float: left;
    margin-bottom: 20px;
    margin-left: 20px;
}

.cf-service-nav-item-title {
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cf-service-nav-item {
    position: relative;
    line-height: 30px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid transparent;
}

li {
    list-style: none;
}

.cf-service-nav-item a {
    color: #252b3a;
    font-size: 12px ;
    text-decoration: none!important;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
}

blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.cf-service-section{
    float: left ;
}

</style>

