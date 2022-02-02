<template>
  <div id="content">
    <div class="widthLimit" ui-view="content">
      <div class="loginDiv">
        <br />

        <el-form
          v-show="selectType == 1"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          id="loginForm"
          class="ng-hide"
        >
          <div class="loginTypeDiv">
            <span class="loginTypeNoSelected">注册微型办公服务账号</span>
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
                placeholder="手机号"
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
                  <div
                    size="medium"
                    type="primary"
                    style="width: 100%"
                    @click.prevent="getPhoneCode"
                    class="loginBtn loginBtnDisabled"
                  >
                    <span v-show="validateCodeShow" @click="getPhoneCode" id="btn_submit" >获取验证码</span>
                    <span v-show="!validateCodeShow" id="btn_submit" >{{count}} s后重新获取</span>
                  </div>
              </div>
            </div>
            <div class="inputField" style="position: relative">
              <input
                class="
                  iam-input-text
                  ng-pristine ng-untouched ng-valid ng-valid-maxlength
                "
                auto-complete="off"
                placeholder="密码"
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
                auto-complete="off"
                placeholder="密码"
                maxlength="255"
                autocomplete="off"
                style="width: 100%; height: 48px"
              />
            </div>
          </div>
          <div class="buttonAreaDiv">
            <div class="registerTip">
              帐号服务需要联网，并获取您的帐号、所在区域、浏览器设置信息，以及您主动上传的个人基本资料和身份信息。
            </div>
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
                  >注册</span
                >
              </div>
            </div>
          </div>
          <div class="otherLoginWays">
            <span class="otherLoginTip">
              <span
                >已有帐号，<a href="javascript:;" @click="toLogin"
                  >去登陆</a
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

    if (this.loginTheme && this.loginTheme.hasQrLogin) {
      hasQrLogin = this.loginTheme.hasQrLogin;
    }

    return {
      codeUrl: "",
      hasQrLogin,
      cookiePassword: "",
      validateCodeShow: true,
      count: '',
      timer: null,
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
    getPhoneCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
            this.count = TIME_COUNT;
            this.validateCodeShow = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                } else {
                    this.validateCodeShow = true;
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000)
        }
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
    toLogin() {
      // this.$router.push("/login");
      this.$emit('showLogin', true) ; 
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
    margin-top: 20px;
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

.registerTip {
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 20px;
}
</style>
