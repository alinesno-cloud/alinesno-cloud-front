<template>
<div id="footer">
    <div class="widthLimit" ui-view="footer">
        <div ng-if="!model.ipIsInternational" class="footer-content ng-scope unfold" ng-class="{'unfold': model.showICP, 'fold': !model.showICP}">
            <div class="copyrightDiv">
                <span class="right-space ng-binding" ng-bind="model.copyRight">{{copyRight}}</span>
            </div>

            <!--
            <div class="otherLinkDiv">
                <span id="laws">
                    <a ng-if="footer.legalNotice" ng-bind="i18n('legalStatement')" target="_blank" rel="noopener noreferrer"  class="ng-binding ng-scope">法律声明</a>
                    <span ng-if="footer.privacyProtect" class="ng-scope">|</span>
                    <a ng-if="footer.privacyProtect" ng-bind="i18n('privacyStrategyStatement')" target="_blank" rel="noopener noreferrer" class="ng-binding ng-scope">隐私政策声明</a>
                    <span ng-if="footer.cookies" class="ng-scope">|</span>
                    <a ng-if="footer.cookies" ng-bind="i18n('hwId.cookies')" target="_blank" rel="noopener noreferrer" class="ng-binding ng-scope">Cookies</a>
                </span>
            </div>
            -->

        </div>
    </div>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
    props:{
        loginTheme: {
            type: Object 
        } ,
    } , 
    data(){
        let copyRight = 'xinfox技术研发团队 版权所有@2021 '

        if(this.loginTheme && this.loginTheme.powerDesc){
            copyRight = this.loginTheme.powerDesc ;
        }

        return {
            copyRight
        }
    }  , 
    components: {
        LoginForm
    },
    watch: {
      loginTheme: {
          handler(newV){
                if(newV && newV.powerDesc){
                    this.copyRight = newV.powerDesc ;
                }
          } , 
          deep: true
     }
    },
}
</script>

<style lang="scss" scoped>
@import 'alinesno-ui/src/assets/styles/login/bootstrap.scss';
@import 'alinesno-ui/src/assets/styles/login/tiny.min.scss';
@import 'alinesno-ui/src/assets/styles/login/tiny-plus.min.scss';
@import 'alinesno-ui/src/assets/styles/login/tinyext.min.scss';
@import 'alinesno-ui/src/assets/styles/login/pageframework.scss';
@import 'alinesno-ui/src/assets/styles/login/login.scss';

#banner, #loading{
    z-index: 1999 !important ;
}

.loginDiv{
    border-radius: 2px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 15%);
}

#banner{
    height: 50px;

    #bannerQuickLink{
        height: 50px ;
        line-height: 50px;
    }
}

#banner .widthLimit{
    margin: 0px;
}

.header-logo-label{
    font-size: 16px;
    margin-left: 10px;
    text-shadow: 0 0 0px black;
    color: #005bd4;
    margin-top: 15px;
    float: left;
}

.logo-banner{
    float: left;
    background: #005BD4;
    height: 50px;
    width: 60px;
    position: relative;
    left: 0px;
}

.loginBtnDisabled {
    background-color: #005bd4 !important ;
}

#footer .widthLimit{
    margin: 0px;
}

#laws span{
    margin-left: 8px;
    margin-right: 8px;
}

.footer-content-russia{
    margin:auto;
    padding-top: 15px;
}
.col-md-6-left {
    float:left;
    text-align: left;
}
.col-md-6-right {
    float:right;
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

.closeImg,.learnMoreLink{
    color: #526ECC;
    cursor: pointer;
}

.closeImg:before {
    content: url("https://console-static.huaweicloud.com/static/authui/20210513103904/public/custom/images/close.svg")
}

#footer .footer-content {
    height: 50px;
    position: fixed ;
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

@media(max-height: 700px){
    .cookieMsgContainer{
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

#loginForm{
    width:476px !important ;
}
.login-code{
    float: right;
    width: 33%;
    border-radius: 4px;

    .login-code-img {
        border-radius: 4px;
        border: 0px;
    }
}
</style>
