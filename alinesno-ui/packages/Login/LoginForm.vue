<template>
  <div id="content">
    <div class="widthLimit" ui-view="content">
      <div class="loginDiv">
        <br />
        <div class="QRLoginSwitchDiv" v-if="hasQrLogin == 1">
          <div class="QRLogin" @click="qrLoginTypeSwitch(true)">
            <div :class="{ selectedType: selectType == 0 }">扫码登录</div>
          </div>
          <div class="intervalDiv"></div>
          <div class="accountLogin" @click="qrLoginTypeSwitch(false)">
            <div :class="{ selectedType: selectType == 1 }">密码登录</div>
          </div>
        </div>
        <div class="qr-scope" v-show="selectType == 0">
          <div id="countDownDiv">
            <span class=""
              >请使用
              <span style="color: #ff9220" class="ng-binding">云APP</span>
              扫描二维码登录</span
            >
            <span class="ng-scope">，</span>
            <span class="remainingTimeTxt ng-scope">94秒</span>
            <span class="ng-scope">后二维码失效</span>
          </div>
          <div class="QRCodeOuter">
            <img
              src="http://training-static.linesno.com/qr.png"
              style="width: 260px; padding-top: 20px"
            />
          </div>
          <div id="QRLoginBottomDiv">
            <a class="QRLoginBottomColor" target="_blank">注册</a>
            <div class="intervalDiv">|</div>
            <a class="QRLoginBottomColor" target="_blank">手机下载新狐云APP</a>
          </div>
        </div>

        <el-form
          v-show="selectType == 1"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          id="loginForm"
          class="ng-hide"
        >
          <div class="loginTypeDiv">
            <span class="loginTypeNoSelected" ng-bind="i18n('enterpriseUser')"
              >账号密码登陆</span
            >
          </div>
          <div id="serverError">
            <span
              style="font-size: small; color: #f66f6a; margin-left: 0px"
            ></span>
          </div>
          <div class="loginFormDiv">
            <div class="inputField" style="position: relative">
              <input
                type="text"
                class="iam-input-text"
                name="account"
                v-model="loginForm.username"
                @keyup.enter="handleLogin"
                placeholder="账号名"
                maxlength="255"
                autocomplete="off"
                style="width: 100%; height: 48px"
              />
            </div>
            <div class="inputField" style="position: relative">
              <input
                class="
                  iam-input-text
                  ng-pristine ng-untouched ng-valid ng-valid-maxlength
                "
                v-model="loginForm.password"
                type="password"
                auto-complete="off"
                placeholder="密码"
                @keyup.enter="handleLogin"
                maxlength="255"
                autocomplete="off"
                style="width: 100%; height: 48px"
              />
            </div>
            <div class="inputField pwdInputField">
              <input
                type="text"
                class="iam-input-text"
                name="code"
                v-model="loginForm.code"
                auto-complete="off"
                placeholder="验证码"
                @keyup.enter="handleLogin"
                maxlength="128"
                autocomplete="new-password"
                style="width: 60%; height: 48px"
              />
              <div class="login-code">
                <img :src="codeUrl" @click="getCode" class="login-code-img" />
              </div>
            </div>
          </div>
          <div class="buttonAreaDiv">
            <div id="buttonArea">
              <div
                id="loginBtn"
                :loading="loading"
                size="medium"
                type="primary"
                style="width: 100%"
                @click.prevent="handleLogin"
                class="loginBtn loginBtnDisabled"
                tabindex="0"
              >
                <span id="btn_submit" ng-bind="loginBtn.submitBtnText" class=""
                  >登录</span
                >
              </div>
            </div>
          </div>
          <div id="bottomBtns">
            <div class="forgetPwdLink commonLinkDiv" tabindex="0">
              <span
                class="loginswap loginBottomColor"
                @click="findPwd"
                > <a href="javascript:;">忘记密码</a></span>
            </div>
            <div id="iamCheckArea" class="checkboxDiv checkArea">
              <input
                id="checkboxInput"
                type="checkbox"
                name="checkboxInput"
                ng-model="model.rememberChecked"
                class="ng-pristine ng-untouched ng-valid"
              />
              <label for="checkboxInput"></label>
              <span class="">记住登录名</span>
            </div>
          </div>
          <div class="otherLoginWays" v-show="hasRegister">
            <span class="otherLoginTip">
              <span
                >没有帐号，<a href="javascript:;" @click="toRegister"
                  >去注册</a
                ></span
              >
            </span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCodeImg } from "alinesno-ui/src/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "alinesno-ui/src/utils/jsencrypt";

export default {
  name: "LoginForm",
  props: {
    loginTheme: {
      type: Object,
    },
  },
  data() {
    let hasQrLogin = 1;
    // let hasRegister = false ; 
    if (this.loginTheme && this.loginTheme.hasQrLogin) {
      hasQrLogin = this.loginTheme.hasQrLogin;
      // hasRegister = this.loginTheme.hasRegister == null ? false : this.loginTheme.hasRegister ; 
    }

    return {
      codeUrl: "",
      loginPanel: true,
      hasQrLogin,
      hasRegister: true , 
      cookiePassword: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
        uuid: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" },
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
        ],
        code: [
          { required: true, trigger: "change", message: "验证码不能为空" },
        ],
      },
      loading: false,
      selectType: 1,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
    loginTheme: {
      handler(newV) {
        this.hasQrLogin = newV.hasQrLogin;
        console.log("qr = " + this.hasQrLogin);
      },
      deep: true,
    },
  },
  created() {
    this.getCode();
    this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then((res) => {
        this.codeUrl = "data:image/gif;base64," + res.img;
        this.loginForm.uuid = res.uuid;
      });
    },
    qrLoginTypeSwitch(s) {
      this.selectType = s ? 0 : 1;
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get("rememberMe");
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password:
          password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
      };
    },
    toRegister() {
      console.log("to register!");
      this.$router.push("/register");
      // this.$emit('showRegister', true) ; 
    },
    findPwd(){
      this.$emit('showFindPwd', true) ; 
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });

          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), {
              expires: 30,
            });
            Cookies.set("rememberMe", this.loginForm.rememberMe, {
              expires: 30,
            });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove("rememberMe");
          }
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" }).catch(() => {});
              loading.close();
              // this.getCode();
            })
            .catch(() => {
              loading.close();
              this.getCode();
            });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#banner,
#loading {
  z-index: 1999 !important ;
}

@import "alinesno-ui/src/assets/styles/login/bootstrap.scss";
@import "alinesno-ui/src/assets/styles/login/tiny.min.scss";
@import "alinesno-ui/src/assets/styles/login/tiny-plus.min.scss";
@import "alinesno-ui/src/assets/styles/login/tinyext.min.scss";
@import "alinesno-ui/src/assets/styles/login/pageframework.scss";
@import "alinesno-ui/src/assets/styles/login/login.scss";

.loginDiv {
  border-radius: 4px !important;
  box-shadow: none !important;

  .selectedType {
    height: 100% !important ;
  }

  .qr-scope {
    width: 476px !important;
  }

  #QRLoginBottomDiv {
    text-align: center;
  }
}

#banner {
  height: 50px;

  #bannerQuickLink {
    height: 50px;
    line-height: 50px;
  }
}

.widthLimit {
  margin: 0px;
  margin-top: 3rem;
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
  height: 50px;
  width: 60px;
  position: relative;
  left: 0px;
}

.loginBtnDisabled {
  background-color: #005bd4 !important ;
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
  height: 50px;
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

  .otherLoginWays {
    font-size: 14px;
  }
}
.login-code {
  float: right;
  width: 33%;
  border-radius: 4px;

  .login-code-img {
    border-radius: 4px;
    border: 0px;
  }
}
</style>
