<template>
<div class="top-headers">
    <router-link tag="div" class="header-logo-bar" to="/index">
        <button class="header-logo" data-spm-click="gostr=/aliyun;locaid=ddock">
            <img src="http://training-static.linesno.com/fox_cloud/fox_header.png" style="position: absolute;width: 40px;top: 5px;left: 10px;">
        </button>
        <a title="新狐云数字化平台" target="_self" class="header-logo-label">
            <span>新狐云数字化平台</span>
        </a>
    </router-link>
    <div class="">
        <div class=""></div>
    </div>
    <nav class="CB-gKhVFp header-text">
        <div class="CB-qpwBh">
            <router-link tag="a" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" to="/index">控制台</router-link>
        </div>
        <div class="CB-qpwBh">
            <a  class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >项目规范</a>
        </div>
        <div class="CB-qpwBh">
            <a  class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >消息管理</a>
        </div>
        <div class="CB-qpwBh">
            <a  class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >费用</a>
        </div>
        <div class="CB-qpwBh">
            <a  class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >通知管理</a>
        </div>
        <div class="CB-qpwBh">
            <a  href="//workorder.console.aliyun.com" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >工单</a>
        </div>
        <div class="CB-qpwBh">
            <a  href="//beian.aliyun.com" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >备案</a>
        </div>
        <div class="CB-qpwBh">
            <a  href="//www.aliyun.com/service" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >文档</a>
        </div>
        <div class="CB-qpwBh">
            <a  href="//www.aliyun.com/service" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >支持</a>
        </div>
        <div class="CB-qpwBh">
            <a  href="//www.aliyun.com/service" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >【系统管理员-张三】</a>
        </div>
        <div class="CB-qpwBh">
            <a class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" ><img src="//oss.aliyuncs.com/aliyun_id_photo_bucket/default_family.jpg" alt="" class="su70ez-0 CB-gLgKdv" /></a>
        </div>
        <div class="CB-qpwBh">
            <a divided @click="logout" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" target="_blank" >退出</a>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'TopHeader',
	methods: {
		toggleSideBar() {
		  this.$store.dispatch('app/toggleSideBar')
		},
		async logout() {
		  this.$confirm('确定注销并退出系统吗？', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		  }).then(() => {
			this.$store.dispatch('LogOut').then(() => {
			  location.href = '/index';
			})
		  })
		}
	  }
}
</script>

<style lang="scss" scoped>
    .top-headers {
        height: 50px;
        font-size: 12px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: var(--cb-color-bg-primary,#fff);
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        z-index: 9999;
        box-shadow: 0 2px 4px 0 var(--cb-color-shadow,rgba(0,0,0,0.16));

        .header-logo-label{
            font-size: 16px;
            margin-left: 10px;
            text-shadow: 0 0 0px black;
            color: #005bd4;
        }

        .header-logo-bar {
            display: flex;
            float: left;
            -webkit-box-align: center;
            align-items: center;

            .header-logo {
                position: relative;
                width: 60px !important;
                height: 50px;
                overflow: hidden;
                vertical-align: middle;
                border-width: initial;
                border-style: none;
                border-image: initial;
                border-radius: 0px;
                text-align: center;
                display: inline-block;
                width: auto;
                white-space: nowrap;
                color: var(--cb-color-button-brand-primary-text,#fff);
                background-color: #005BD4;
                border-color: #005BD4;
                cursor: pointer;

                span {
                    display: block;
                    position: absolute;
                    left: 15px;
                    width: 20px;
                    height: 2px;
                    background: rgb(255, 255, 255);
                    transition: all 0.3s ease-out 0s;
                }
            }
        }

        .header-text{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            float: right;
            .CB-qpwBh {
                display: inline-block;
                position: relative;
            }
            .CB-jjPPab {
                position: relative;
                padding: 0px 10px;
                border: 0px;
                color: #555;
                height: 50px;
                line-height: 50px;
                display: block !important;
            }
            .CB-jjPPab img {
                display: inline;
                max-width: 160px;
                max-height: 36px;
            }
            .CB-gLgKdv {
                display: inline-block;
                border-radius: 50%;
                width: 28px;
                height: 28px;
                vertical-align: middle;
                background-color: var(--cb-color-bg-secondary,#f4f6f7);
            }
        }
    }
</style>




