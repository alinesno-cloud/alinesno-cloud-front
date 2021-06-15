<template>
    <div class="container">

        <div class="item" style="height: auto" v-for="type in productList">
            <div class="cf-service-section product-type-title">
                <div class="cf-service-nav-item-title">
                    {{ type.name }}
                </div>
                <ul>
                    <li class="cf-service-nav-item" v-for="item in type.subList">
                        <a  class="cf-service-nav-item-label" :href="item.linkPath" target="_blank" :title="item.name">
                            {{ item.name }}
                            <span v-if="item.internal" class="product-text-label">内测</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
         
    </div>

</template>

<script>

import { cloudProductList } from "alinesno-ui/src/api/cloud";

export default {
    data(){
        return {
            productList: []
        }
    } , 
    created() {  
        this.getProduct();
    },
    methods: {
      getProduct(){
        cloudProductList().then(res =>{
            console.info('res = ' + res);
            this.productList = res.data ; 
        });
      },
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
          /*
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
          */

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
  padding: 5px 15px;
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

