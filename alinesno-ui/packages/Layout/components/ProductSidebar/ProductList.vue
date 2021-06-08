<template>
    <div class="container">
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    研发中台
                </div>
                <ul>
                    <li class="cf-service-nav-item">
                        <a @click="openService" class="cf-service-nav-item-label" title="基础权限管理服务">
                            基础权限管理服务
                            <span class="product-text-label">推荐</span>
                        </a>
                    </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="云门户管理服务"> 云门户管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="通知管理服务"> 通知管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="文档打印管理服务"> 文档打印管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="存储管理服务"> 存储管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="工作流管理服务"> 工作流管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="网关管理服务"> 网关管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="单点登陆管理服务"> 单点登陆管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据报表管理服务"> 数据报表管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="文件管理系统"> 文件管理系统 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    运维管理
                </div>
                <ul>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="版本控制"> 版本控制 <span style="display:none">正常</span> </a> </li> <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" href="/product-detail?productId=a5e0ebbbb707aefed0b5cf20eb18194c" target="_blank"  title="持续集成"> 持续集成 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" @click="openApply" title="私有云基础PaaS服务"> 私有云服务 <span class="product-text-label">企业</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="Prometheus监控"> Prometheus监控 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    数据中台
                </div>
                <ul>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" @click="openTest" title="ETL在线调试服务"> ETL在线调试服务 <span class="product-text-label">内测</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据大屏管理服务"> 数据大屏管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据大屏管理服务"> 数据大屏管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据大屏管理服务"> 数据大屏管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据大屏管理服务"> 数据大屏管理服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="数据融合服务"> 数据融合服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="实时计算仓库"> 实时计算仓库 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    物联网管理
                </div>
                <ul>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="网关服务服务"> 网关服务服务 <span style="display:none">正常</span> </a> </li>
                            <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="物联网管理服务"> 物联网管理服务 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    技术中台
                </div>
                <ul>
                    <li class="cf-service-nav-item">
                        <router-link tag="a" lass="cf-service-nav-item-label" to="/dashboard/technique" title="DevOps研发体系">
                            自动化研发体系 <span class="product-text-label">推荐</span>
                        </router-link>
                    </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="微服务研发引擎"> 微服务研发引擎 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="开发手册"> 前端框架引擎 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="前端设计"> 容器持续集成 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="测试框架"> 代码管理服务 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
        <div class="item" style="height: auto">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    业务中台
                </div>
                <ul>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="代码生成器服务"> 代码生成器服务 <span style="display:none">正常</span> </a> </li>
                    <li class="cf-service-nav-item"> <a class="cf-service-nav-item-label" target="_blank"  title="低代码开发服务"> 工作流开发服务 <span style="display:none">正常</span> </a> </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
      openTest() {
        this.$alert('组件内测中，暂时未开放...', '系统提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      } ,
      openService() {
          this.$confirm('你将使用此服务，是否需要查阅服务使用手册?', '提示', {
              confirmButtonText: '进入服务',
              cancelButtonText: '服务手册',
              type: 'success'
          }).then(() => {
              this.$message({
                  type: 'success',
                  message: '正在重定向并打开服务链接 ...... '
              });
          }).catch(() => {
              this.$router.push('/dashboard/article/1231231');
          });
      } ,
      openApply() {
        this.$prompt('此为企业组件，请输入申请理由', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的申请理由是: ' + value + ' , 申请中...'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* 容器必须有固定高度
   * 且高度大于最高的列高 */
  height: 760px;

  /* 非必须 */
  border-radius: 3px;
  padding: 20px;
  width: 100%;
  margin: 0px auto;
  counter-reset: items;
}

.item {
  width: 32%;
  /* 非必须 */
  position: relative;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
}

/* 将内容块重排为3列 */
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }

/* 强制换列 */
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}

.cf-service-section ul{
    list-style: none ;
    padding: 0px;
    color: #333;
    font-size: 12px;
    line-height: 2.3 ;
}

.cf-service-nav-item-title{
    color: #333;
    font-size: 15px ;
    font-weight: 500 ;
}

span.product-text-label {
    color: #005bd4;
    font-size: 7px !important;
    border: 1px solid #005bd4;
    padding: 2px 5px;
    border-radius: 3px;
}
</style>

