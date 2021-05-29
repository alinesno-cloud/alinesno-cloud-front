<template>
<div class="siderbar">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="2" @click="drawer = true">
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

    <el-drawer
        class="productDrawer"
        :visible.sync="drawer"
        :direction="direction"
        wrapperClosable="true"
        withHeader=false
        size="60%"
        :before-close="handleClose">
        <div class="cf-service-box">
            <div class="cf-service-content">
                <div class="cf-all-service">
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            研发中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793777351564460032" target="_blank"  title="基础权限管理平台"> 基础权限管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=579543758d94573a6915f6575738f0e2" target="_blank"  title="云门户管理平台"> 云门户管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793778120522989568" target="_blank"  title="通知管理平台"> 通知管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=741a311b31246fdc5a34ed062cbc03fc" target="_blank"  title="文档打印管理平台"> 文档打印管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793778308713021440" target="_blank"  title="存储管理平台"> 存储管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793777939538771968" target="_blank"  title="工作流管理平台"> 工作流管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793777789277831168" target="_blank"  title="网关管理平台"> 网关管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=81795c34c0f1e389ec91550728ead546" target="_blank"  title="单点登陆管理平台"> 单点登陆管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=53c26d0d3378a1b4474e7250dac09302" target="_blank"  title="数据报表管理平台"> 数据报表管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=8dce2e73470fd4985548d148f9e909ca" target="_blank"  title="文件管理系统"> 文件管理系统 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            运维管理
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=5b53146d3ec422ca3afd7bb055982d6a" target="_blank"  title="版本控制"> 版本控制 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=a5e0ebbbb707aefed0b5cf20eb18194c" target="_blank"  title="持续集成"> 持续集成 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=494633b4826a95b4cdcf53b6c3c17b3c" target="_blank"  title="私有云基础PaaS平台"> 私有云基础PaaS平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=6d53a9a9a5506a4434303d4ff9d733a9" target="_blank"  title="Prometheus监控"> Prometheus监控 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            数据中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793784977262116864" target="_blank"  title="ETL在线调试平台"> ETL在线调试平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=793785250214838272" target="_blank"  title="数据大屏管理平台"> 数据大屏管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=c0a354c6ce37e4745e8b96fd252c4d38" target="_blank"  title="数据融合平台"> 数据融合平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=56edf93139fcf8ca7864a82336bf28aa" target="_blank"  title="实时计算仓库"> 实时计算仓库 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            测试中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=c56e0e66620e64cfdeb0fb5b22d741bb" target="_blank"  title="自动化测试平台"> 自动化测试平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            物联网中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=c873ab61963d3e9ed1c3393633316f71" target="_blank"  title="网关服务平台"> 网关服务平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=787449252581212160" target="_blank"  title="物联网管理平台"> 物联网管理平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            运维中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=7ca60141625552fe7a2edda4758a3817" target="_blank"  title="自动化运维平台"> 自动化运维平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=4a9b20dea5f344c85023e0e541dc3afa" target="_blank"  title="审计日志监控平台"> 审计日志监控平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=7a52c133525f0aafb51cdf098e224f56" target="_blank"  title="Ansible操作平台"> Ansible操作平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            技术中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=aa78cf3d219dbd3cbffa9fcf1ddd081a" target="_blank"  title="DevOps研发体系"> DevOps研发体系 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=11fed63f19a606fdf4eb0b4ade7c1327" target="_blank"  title="微服务研发引擎"> 微服务研发引擎 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=ce5da9f2d98dfaa5b91d952ec256106f" target="_blank"  title="开发手册"> 开发手册 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=d6a26b8cd972a9a0c988386fd6584c08" target="_blank"  title="前端设计"> 前端设计 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=fb6601fff22b5d8d5627106cd7357b15" target="_blank"  title="前端组件"> 前端组件 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=f00d06b85b087224f63e978b4f05befb" target="_blank"  title="企业人才培养"> 企业人才培养 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=7e938196b33775cf0b7fb645040fe42c" target="_blank"  title="平台设计"> 平台设计 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=86b8de1b381b948ec6d05e4eb245c3aa" target="_blank"  title="统一管理平台"> 统一管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=081ebc53247ef603e387bb3121ee136d" target="_blank"  title="测试框架"> 测试框架 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            视觉中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=379c2ebc740722fc7689758fe6ff61f7" target="_blank"  title="视觉模型训练平台"> 视觉模型训练平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=5452d342fda9cc79907af828451aa11f" target="_blank"  title="视觉目标检测平台"> 视觉目标检测平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=d2bad9137211ce2c954a840ea1b82973" target="_blank"  title="天网视频流分析平台"> 天网视频流分析平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            业务中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=0345d1f09aaddb9fa3b03f19bb23feb3" target="_blank"  title="低代码开发平台"> 低代码开发平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=799951013971755008" target="_blank"  title="代码生成器平台"> 代码生成器平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                    <div class="cf-service-section product-type-title">
                        <div class="cf-service-nav-item-title">
                            管理中台
                        </div>
                        <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=c6e5e53eb085de6f7bca19842298c971" target="_blank"  title="中台团队管理平台"> 中台团队管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=7ac4ac3dd5a1a61bc2c4031e6a711470" target="_blank"  title="中台项目管理平台"> 中台项目管理平台 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=13db95be86611081a287addb1ca570e2" target="_blank"  title="文档管理平台"> 文档管理平台 <span style="display:none">正常</span> </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
        direction: 'ltr',
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
      // position: fixed;
  }

  .productDrawer{
     top: 50px;
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

</style>

