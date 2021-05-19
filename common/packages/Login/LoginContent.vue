<template>
<div id="content">
    <div class="widthLimit" ui-view="content">
        <link ng-if="model.language === 'zh-cn'" rel="stylesheet" type="text/css" href="https://console-static.cloud.com/static/authui/20210513103904/public/custom/css/zh-cn/login_zh.css" class="ng-scope" />
        <div id="loginAdv" class="ng-scope">
            <a href="https://www.cloud.com/solution/go-global/details.html" target="_blank" mate_data_ts="www_v3_login.click.登录">
                <img src="http://training-static.linesno.com/bg-images.png" alt="" />
            </a>
        </div>
        <login-form />
    </div>
</div>
</template>
<script>
import LoginForm from './LoginForm.vue'

export default {
  components: {
      LoginForm
  },
}
</script>

