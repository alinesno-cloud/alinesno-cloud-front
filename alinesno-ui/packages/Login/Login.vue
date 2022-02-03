<template>
  <div class="login-container" :style="{ backgroundImage: `url(${bgImg})` }">
    <top-header :loginTheme="loginTheme" />

    <!-- 登陆界面 -->
    <transition name="slide-fade">
      <login-form
        :loginTheme="loginTheme"
        @showRegister="showRegister"
        @showFindPwd="showFindPwd"
        v-show="showLoginPanel"
      />
    </transition>

    <!-- 注册界面 -->
    <transition name="slide-fade">
      <phone-register-form
        :loginTheme="loginTheme"
        @showRegister="showRegister"
        @showLogin="showLogin"
        v-show="showRegisterPanel"
      />
    </transition>

    <!-- 找回密码界面 -->
    <transition name="slide-fade">
      <find-pwd-form
        :loginTheme="loginTheme"
        @showLogin="showLogin"
        @showFindPwd="showFindPwd"
        v-show="showFindPwdPanel"
      />
    </transition>

    <login-footer :loginTheme="loginTheme" />
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import LoginFooter from "./LoginFooter.vue";
import LoginForm from "./LoginForm.vue";
import PhoneRegisterForm from "./PhoneRegisterForm.vue";
import FindPwdForm from "./FindPwd.vue";

import { getTheme } from "alinesno-ui/src/api/login";

export default {
  name: "Login",
  data() {
    const { VUE_APP_DISPLAY_URL } = process.env;

    let displayUrl =
      "http://alinesno-storage.admin.beta.linesno.com/storage/displayImg/";

    if (VUE_APP_DISPLAY_URL) {
      displayUrl = VUE_APP_DISPLAY_URL;
    }

    return {
      showLoginPanel: true,
      showRegisterPanel: false,
      showFindPwdPanel: false,
      loginTheme: null,
      bgImg: "http://training-static.linesno.com/quare_bg_01.png",
      displayUrl,
    };
  },
  components: {
    TopHeader,
    LoginForm,
    PhoneRegisterForm,
    LoginFooter,
    FindPwdForm,
  },
  created() {
    // 获取企业信息
    getTheme().then((res) => {
      console.info("res = " + res);
      this.loginTheme = res.data;
      this.bgImg = this.displayUrl + res.data.logoBackground;
    });
  },
  methods: {
    showRegister(isShowRegister) {
      this.showRegisterPanel = isShowRegister;
      this.showLoginPanel = false;
      this.showFindPwdPanel = false;
    },
    showLogin(isShowLogin) {
      this.showRegisterPanel = false;
      this.showLoginPanel = isShowLogin;
      this.showFindPwdPanel = false;
    },
    showFindPwd(isShowFindPwd) {
      this.showRegisterPanel = false;
      this.showLoginPanel = false;
      this.showFindPwdPanel = isShowFindPwd;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "alinesno-ui/src/assets/styles/login/bootstrap.scss";
@import "alinesno-ui/src/assets/styles/login/tiny.min.scss";
@import "alinesno-ui/src/assets/styles/login/tiny-plus.min.scss";
@import "alinesno-ui/src/assets/styles/login/tinyext.min.scss";
@import "alinesno-ui/src/assets/styles/login/pageframework.scss";
@import "alinesno-ui/src/assets/styles/login/login.scss";

.login-container {
  height: 100%;
  background: #f5f5f5;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1f1f1f;
  background-position: center;
  background-attachment: fixed;

  #banner {
    box-shadow: none;
  }
}

#banner {
  height: 60px;

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
  margin-top: 15px;
  float: left;
}

.logo-banner {
  float: left;
  background: #005bd4;
  height: 60px;
  width: 60px;
  position: relative;
  left: 0px;
}

.loginBtnDisabled {
  background-color: #005bd4 !important ;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  // transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
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
  border-top: 5px solid #ffffff;
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
  border-bottom: 5px solid #ffffff;
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
  color: #575d6c;
}

.cookieWarnImg {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-top: -1px;
}

.closeImg,
.learnMoreLink {
  color: #526ecc;
  cursor: pointer;
}

.closeImg:before {
  content: url("https://console-static.huaweicloud.com/static/authui/20210513103904/public/custom/images/close.svg");
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

@media (max-height: 700px) {
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
    text-align: left;
  }
  .cookieMsgContainer {
    width: calc(100% - 24px);
    height: auto;
    margin: 0;
    padding: 12px;
    color: #575d6c;
  }
}

#loginForm {
  width: 476px !important ;
}
</style>

