<template>
    <div id="banner">
        <div class="widthLimit" ui-view="banner">
            <div  style="display:inline">
                <a class="logo-banner">
                    <img :src="saasLogoUrl" style="position: absolute; width: 50px; top: 5px; left: 10px;">
                </a>
                <a :title="saasTitle" target="_self" class="header-logo-label"><span>{{saasTitle}}</span></a>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props:{
        loginTheme: {
            type: Object 
        } ,
    } , 
    data () {
      const { VUE_APP_SASS_TITLE, VUE_APP_SASS_URL, VUE_APP_SAAS_LOGO_URL ,VUE_APP_DISPLAY_URL } = process.env

      let saasTitle = '新狐云数字化平台'
      let saasUrl = 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/'
      let saasLogoUrl = 'http://training-static.linesno.com/fox_cloud/fox_header.png'
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
      if(VUE_APP_DISPLAY_URL){
        displayUrl = VUE_APP_DISPLAY_URL ;
      }

      return {
        saasTitle,
        saasUrl,
        saasLogoUrl , 
        displayUrl ,
      }
    } , 
    watch: {
      loginTheme: {
          handler(newV){
              console.log('new v = ' + newV) ; 
              this.saasTitle = newV.logoTitle ;
              this.saasLogoUrl = this.displayUrl + newV.loginLogo ;
              console.log('saasLogoUrl v = ' + this.saasLogoUrl) ; 
          } , 
          deep: true
     }
    },
  }
</script>

<style lang="scss" scoped>
    #banner, #loading {
        z-index: 1999 !important;
    }

    @import 'alinesno-ui/src/assets/styles/login/bootstrap.scss';
    @import 'alinesno-ui/src/assets/styles/login/tiny.min.scss';
    @import 'alinesno-ui/src/assets/styles/login/tiny-plus.min.scss';
    @import 'alinesno-ui/src/assets/styles/login/tinyext.min.scss';
    @import 'alinesno-ui/src/assets/styles/login/pageframework.scss';
    @import 'alinesno-ui/src/assets/styles/login/login.scss';

    #banner {
        height: 60px;
        box-shadow: none !important;

        #bannerQuickLink {
            height: 60px;
            line-height: 60px;
        }
    }

    #banner .widthLimit {
        margin: 0px;
    }

    .header-logo-label {
        font-size: 16px;
        margin-left: 10px;
        text-shadow: 0 0 0px black;
        color: #005bd4;
        margin-top: 20px;
        float: left;
    }

    .logo-banner {
        float: left;
        // background: #005BD4;
        height: 60px;
        width: 70px;
        position: relative;
        left: 0px;
    }

    .loginBtnDisabled {
        background-color: #005bd4 !important;
    }

    #footer .widthLimit {
        margin: 0px;
    }

    #laws span {
        margin-left: 8px;
        margin-right: 8px;
    }

    .footer-content-russia {
        margin: auto;
        padding-top: 15px;
    }

    .col-md-6-left {
        float: left;
        text-align: left;
    }

    .col-md-6-right {
        float: right;
        text-align: right;
    }

    .swapClick.fold:after {
        content: "";
        height: 0;
        width: 0;
        opacity: 0.7;
        border-top: 5px solid #FFFFFF;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        position: absolute;
        margin-top: 6px;
        margin-left: 5px;
    }

    .swapClick.unfold:after {
        content: "";
        height: 0;
        width: 0;
        opacity: 0.7;
        border-bottom: 5px solid #FFFFFF;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        position: absolute;
        margin-top: 6px;
        margin-left: 5px;
    }

    .cookieMsgContainer {
        left: 0;
        background: #eeefef;
        text-align: center;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        z-index: 98;
        padding: 12px 30px;
    }

    .cookieMsgContainer .cookieMsgContent {
        color: #575D6C;
    }

    .cookieWarnImg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        margin-top: -1px
    }

    .closeImg, .learnMoreLink {
        color: #526ECC;
        cursor: pointer;
    }

    .closeImg:before {
        content: url("https://console-static.huaweicloud.com/static/authui/20210513103904/public/custom/images/close.svg")
    }

    #footer .footer-content {
        height: 60px;
        position: absolute;
        bottom: 0px;
        width: 100%;
        margin: 0px;
        padding: 30px;
        background: #f5f5f5;
        padding-bottom: 40px;
    }

    @media only screen and (max-width: 1680px) {

    }

    @media only screen and (max-width: 1440px) {

    }

    @media only screen and (max-width: 1366px) {

    }

    @media only screen and (max-width: 1280px) {
        #footer .widthLimit {
            margin: 0px;
            padding: 0px;
        }

        #footer .copyrightDiv {
            text-align: center;
            margin-bottom: 20px;
        }
        #footer .otherLinkDiv {
            text-align: center;
            margin-bottom: 10px;
        }
    }

    @media only screen and (max-width: 1024px) {
        #footer .widthLimit {
            margin: 0px;
            padding: 0px;
        }
        #footer .copyrightDiv {
            text-align: center;
        }
        #footer .otherLinkDiv {
            text-align: center;
            margin-bottom: 10px;
        }
    }

    @media(max-height: 700px) {
        .cookieMsgContainer {
            position: fixed;
            width: calc(100% - 60px);
            bottom: 0px;
        }
    }

    @media only screen and (max-width: 768px) {
        #footer .footer-content {
            display: none !important;
        }
        .cookieMsgContainer .cookieMsgContent {
            margin-right: 12px;
            text-align: left
        }
        .cookieMsgContainer {
            width: calc(100% - 24px);
            height: auto;
            margin: 0;
            padding: 12px;
            color: #575D6C
        }
    }

    #loginForm {
        width: 476px !important;
    }
</style>

