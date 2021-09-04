<template>
  <div>
    <Verify
        @success="verifySuccess"
        v-show="isShowFixed === true"
        :mode="'fixed'"
        :captcha-type="'clickWord'"
        :captcha-id="'936c8254-abf6-446e-ba34-0b02ed15f6e2'"
        :container-id="'#pointFixed_btn'"
        :img-size="{ width: '330px', height: '155px' }"
        :applicationCode="applicationCode"
    />
    <!-- 组件 -->
    <el-button v-if="isShowBtn" style="width: 300px;" type="warning" size="medium" @click="show">登录</el-button>
  </div>
</template>

<script>
import Verify from '../../verifition/Verify'

export default {
  name: 'SliderFixed',
  props: {
    applicationCode: {
      type: String,
      default: ''
    }
  },
  components: {
    Verify
  },
  data() {
    return {
      isShowFixed: false,
      isShowBtn: true,
    }
  },
  methods: {
    show() {
      this.isShowFixed = true
      this.isShowBtn = true
    },
    verifySuccess(data) {
      this.$emit('success', data)
    }
  }
}
</script>

<style scoped lang="less">
.pointFixed {
  .title {
    font-size: 28px;
    color: #222;
    line-height: 40px;
  }

  .desc {
    font-size: 14px;
    line-height: 24px;
    color: #777;
    padding-top: 8px;
  }

  .demo {
    box-sizing: border-box;
    border: 1px solid #e4e7ef;
    width: 99%;
    // height: 530px;
    margin-top: 24px;
    padding-bottom: 20px;

    .demo-result,
    .demo-code {
      box-sizing: border-box;
      padding: 24px;
      float: left;
      height: 100%;
    }

    .demo-result {
      .result-title {
        font-size: 18px;
        line-height: 24px;
        color: #222;
      }

      .result_form {
        width: 60%;
        margin: 72px auto 0;
      }

      .result_input {
        width: 100%;
        border: 1px solid #e4e7ef;
        height: 40px;
        line-height: 38px;
        padding-left: 16px;
        box-sizing: border-box;
        margin-bottom: 16px;
        font-size: 18px;
        color: #abaeb2;
        background-color: transparent;
      }

      .result_btn {
        border: 0;
        outline: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        background: #cdd2df;
        cursor: not-allowed;
        margin-top: 15px;
      }
    }

    .demo-code {
      background: #f7f9fa;
      position: relative;

      .code-title {
        float: left;
        font-size: 18px;
        line-height: 24px;
        color: #222;
      }

      .code_copy {
        float: right;
        width: 68px;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        background: #6f7482;
        color: #fff;
        font-size: 12px;
        outline: none;
        border: none;
        cursor: pointer;
      }

      .code-container {
        padding-top: 20px;
        display: block;
        overflow: auto;
        color: #4d4d4c;
        padding: 0.5em;
        line-height: 1.5;
      }
    }
  }
}
</style>
