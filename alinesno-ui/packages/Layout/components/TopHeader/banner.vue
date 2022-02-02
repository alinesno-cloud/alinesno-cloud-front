<template>
    <div class="top-headers">
        <router-link tag="div" class="header-logo-bar" to="/index">
            <button class="header-logo" v-if="enableLogo">
                <img :src="saasLogoUrl" style="position: absolute; width: 40px; top: 5px; left: 10px"/>
            </button>
            <a :title="saasTitle" target="_self" class="header-logo-label">
                <span>{{ saasTitle }} </span>
            </a>
            <el-button
                    v-if="saasUrl"
                    class="dashboard-home"
                    size="small"
                    icon="el-icon-s-home"
                    @click="dashboardHome()">
                工作台
            </el-button>
        </router-link>
    </div>
</template>

<script>

  import { getEnterpriseInfo } from 'alinesno-ui/src/api/config'

  export default {
    name: 'TopHeader',
    components: {
    },
    computed: {
    },
    data () {
      const { VUE_APP_SASS_TITLE, VUE_APP_SASS_URL, VUE_APP_SAAS_LOGO_URL,VUE_APP_ENABLE_LOGO,VUE_APP_DISPLAY_URL } = process.env

      let saasTitle = '新狐云数字化平台'
      let enableLogo = true;
      let saasUrl = 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/' ;
      let saasLogoUrl = 'http://training-static.linesno.com/fox_cloud/fox_header.png' ;
      let displayUrl = 'http://alinesno-storage.admin.beta.linesno.com/storage/displayImg/' ;


      if (VUE_APP_SASS_TITLE) {
        saasTitle = VUE_APP_SASS_TITLE
      }
      if (VUE_APP_SASS_URL) {
        saasUrl = VUE_APP_SASS_URL
      }
      if (VUE_APP_SAAS_LOGO_URL) {
        saasLogoUrl = VUE_APP_SAAS_LOGO_URL
      }
      if (VUE_APP_ENABLE_LOGO === 'off') {
        enableLogo = false;
      }
      if(VUE_APP_DISPLAY_URL){
        displayUrl = VUE_APP_DISPLAY_URL ;
      }

      return {
        saasTitle,
        saasUrl,
        saasLogoUrl,
        enableLogo ,
        displayUrl,
      }
    },
    created() {
        // 获取企业信息
        getEnterpriseInfo().then(res => {
            console.info('res = ' + res) ;
            if(res.data){
              this.saasTitle = res.data.name ;

              console.log(this.saasLogoUrl) ;
              console.log('displayUrl ' + this.displayUrl) ;

              if(res.data.logo && this.displayUrl){
                this.saasLogoUrl = this.displayUrl + res.data.logo ;
              }
            }
        }) ;
    },
    methods:{
      dashboardHome () {
        window.location.href = this.saasUrl
      },
    }
  }
</script>

<style lang="scss" scoped>
    .top-headers {
        height: 50px;
        font-size: 12px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: var(--cb-color-bg-primary, #fff);
        position: relative;
        // top: 0px;
        // right: 0px;
        // left: 0px;
        z-index: 10;
        float:left ;
        // box-shadow: 0 2px 4px 0 var(--cb-color-shadow, rgba(0, 0, 0, 0.16));
        border-bottom: var(--card-border-width, 1px) var(--card-border-style, solid) var(--card-border-color, #e3e4e6);

        .header-logo-label {
            font-size: 16px;
            margin-left: 0px;
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
                height: 49px;
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
                color: var(--cb-color-button-brand-primary-text, #fff);
                background-color: #fff;
                border-color: #005bd4;
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

        .header-text {
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
                font-size: 12px;
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
                background-color: var(--cb-color-bg-secondary, #f4f6f7);
            }
        }
    }

    .dashboard-home {
        background-color: #f4f6f7;
        border: 0px;
        margin-left: 20px;
        font-weight: 500;
    }

</style>




