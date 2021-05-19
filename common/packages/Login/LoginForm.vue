<template>
<div class="loginDiv ng-scope">
    <div class="QRLoginSwitchDiv ng-scope" ng-if="QRLoginModel.hasQRLogin &amp;&amp; !quickLoginModel.hasQuickLogin">
        <div class="QRLogin" ng-click="QRLoginModel.QRLoginTypeSwitch(true)">
            <div ng-class="{'selectedType': QRLoginModel.isQRLogin}" class="ng-binding">
                扫码登录
            </div>
        </div>
        <div class="intervalDiv"></div>
        <div class="accountLogin" ng-click="QRLoginModel.QRLoginTypeSwitch(false)">
            <div ng-class="{'selectedType': !QRLoginModel.isQRLogin}" class="ng-binding selectedType">
                密码登录
            </div>
        </div>
    </div>
    <div ng-show="!QRLoginModel.isQRLogin &amp;&amp; model.loginType === 'iam'" id="loginForm" class="ng-hide">
        <div class="loginTypeDiv">
            <span class="loginTypeNoSelected ng-binding" ng-bind="i18n('enterpriseUser')">账号密码登陆</span>
        </div>
        <div id="serverError">
            <span style="font-size:small;color: #F66F6A;margin-left:0px;"></span>
        </div>
        <div class="loginFormDiv">
            <div class="inputField" style="position: relative;">
                <input type="text" class="iam-input-text ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-class="{'iam-input-error': IAMLoginErrorMsg.domainError, '': !IAMLoginErrorMsg.domainError}" ng-model="IAMAccountInput.value" id="IAMAccountInputId" placeholder="租户名/原云帐号" ng-disabled="IAMAccountInput.disable" ng-blur="IAMAccountInput.blur()" ng-change="IAMAccountInput.change()" ng-init="bindIAMAccountTip()" ng-style="IAMAccountInput.style" maxlength="255" autocomplete="off" style="width: 100%; height: 48px;" />
            </div>
            <div class="inputField" style="position: relative;">
                <form action="javascript:void(0)" class="ng-pristine ng-valid ng-valid-maxlength">
                    <input type="text" class="iam-input-text ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-class="{'iam-input-error': IAMLoginErrorMsg.usernameError || IAMLoginErrorMsg.nameOrPwdError, '': !IAMLoginErrorMsg.usernameError &amp;&amp; !IAMLoginErrorMsg.nameOrPwdError}" ng-model="IAMUsernameInput.value" id="IAMUsernameInputId" placeholder="IAM用户名/邮件地址" ng-blur="IAMUsernameInput.blur()" ng-change="IAMUsernameInput.change()" ng-init="bindIAMUsernameTip()" ng-style="IAMUsernameInput.style" maxlength="255" autocomplete="off" style="width: 100%; height: 48px;" />
                </form>
            </div>
            <div class="inputField pwdInputField">
                <form action="javascript:void(0)" class="ng-pristine ng-valid ng-valid-maxlength">
                    <input type="password" class="iam-input-text ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-class="{'iam-input-error': IAMLoginErrorMsg.pwdError || IAMLoginErrorMsg.nameOrPwdError, '': !IAMLoginErrorMsg.pwdError &amp;&amp; !IAMLoginErrorMsg.nameOrPwdError}" ng-model="IAMPasswordInput.value" id="IAMPasswordInputId" placeholder="IAM用户密码" ng-blur="IAMPasswordInput.pwdBlur()" ng-style="IAMPasswordInput.style" ng-change="IAMPasswordInput.change()" maxlength="128" autocomplete="new-password" style="width: 100%; height: 48px;" />
                </form>
                <span class="pwdShowimg iam-icon-action-state-invisible" ng-class="{'iam-icon-action-state-visible': IAMPasswordInput.pwdVisible, 'iam-icon-action-state-invisible': !IAMPasswordInput.pwdVisible}" ng-click="IAMPasswordInput.pwdVisibleFunc()"></span>
            </div>
        </div>
        <div class="buttonAreaDiv">
            <div id="buttonArea">
                <div id="loginBtn" ng-class="{'loginBtnDisabled': loginBtn.disable}" ng-click="loginBtn.loginClick()" class="loginBtn loginBtnDisabled" tabindex="0">
                    <span id="btn_submit" ng-bind="loginBtn.submitBtnText" class="ng-binding">登录</span>
                </div>
            </div>
        </div>
        <div id="bottomBtns">
            <div class="forgetPwdLink commonLinkDiv" tabindex="0">
                <span ng-click="goFpwd('send','event','button','click','login_fpwd')" class="loginswap loginBottomColor ng-binding" ng-bind="i18n('hwId.forgetPwd')">忘记密码</span>
            </div>
            <div id="iamCheckArea" class="checkboxDiv checkArea">
                <input id="checkboxInput" type="checkbox" name="checkboxInput" ng-model="model.rememberChecked" class="ng-pristine ng-untouched ng-valid" />
                <label for="checkboxInput"></label>
                <span ng-click="model.rememberCheckedChange()" class="ng-binding">记住登录名</span>
            </div>
        </div>
        <div class="otherLoginWays">
            <span class="otherLoginTip" ng-click="BiEvent('send', 'event', 'button', 'click', 'login_hwportal', model.hwportalUrl)">
                <span ng-if="!model.isMobile" class="ng-binding ng-scope">其他登录方式 ：</span>
            </span>
            <span class="intervalDiv"></span>
            <span id="hwAccountLinkDiv" class="otherItemDiv" tabindex="0" ng-click="BiEvent('send', 'event', 'button', 'click', 'login_hwportal', model.hwportalUrl)"> <span ng-click="goHwAccountLogin()" ng-bind="quickLoginModel.hasQuickLogin ? i18n('quickLogin.title') : i18n('hwId.hwAccount')" class="otherLoginColor ng-binding">帐号</span> </span>
            <span class="intervalDiv hwInterval">|</span>
            <span id="idpLinkDiv" class="otherItemDiv" ng-click="BiEvent('send', 'event', 'button', 'click', 'login_idp', model.hwportalUrl)"> <span ng-click="goIDPLogin()" ng-bind="i18n('idpLogin.loginLink')" class="otherLoginColor ng-binding">企业联邦用户</span> </span>
        </div>
    </div>
</div>
</template>

<script>
import { getCodeImg } from "common/src/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from 'common/src/utils/jsencrypt'

export default {
  name: "LoginForm",
  data() {
    return {
      codeUrl: "",
      cookiePassword: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    this.getCode();
    this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.codeUrl = "data:image/gif;base64," + res.img;
        this.loginForm.uuid = res.uuid;
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(()=>{});
          }).catch(() => {
            this.loading = false;
            this.getCode();
          });
        }
      });
    }
  }
};
</script>
