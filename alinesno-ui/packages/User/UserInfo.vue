<template>
  <div class="container">
      <el-row>
        <el-col :span="3">
          <el-avatar
            style="width: 100px; height: 100px"
            :size="50"
            :src="avatarUrl"
          ></el-avatar>
        </el-col>
        <el-col :span="1.5">
          <p class="f-b color-text-secondary">登录账号：</p>
          <p class="f-b color-text-secondary">账号I D：</p>
        </el-col>
        <el-col :span="5">
          <p class="f-b color-text-regular">
            1593454011@qq.com
          </p>
          <p class="f-b color-text-regular">975DCFC897D7</p>
        </el-col>
        <el-col :span="1.5">
          <p class="f-b color-text-secondary">
            实名验证：
          </p>
          <p class="f-b color-text-secondary">注册时间：</p>
        </el-col>
        <el-col :span="5">
          <p class="f-b color-text-regular">
            <span type="success" size="small" plain>已认证</span>
            <span type="danger" size="small" plain>未认证</span>
          </p>
          <p class="f-b color-text-regular">2021.08.14</p>
        </el-col>
        <el-col :span="1.5">
          <p class="f-b color-text-secondary">账号绑定：</p>
        </el-col>
        <el-col :span="5">
          <p class="f-b">
            <span type="success" size="small" plain>微信</span>
            <span type="warning" size="small" plain>支付宝</span>
          </p>
        </el-col>
      </el-row>
      <el-container class="c-input">
        <el-header>
          <p class="f-m color-text-primary title">核心信息</p>
        </el-header>
        <el-main>
          <el-form>
            <el-form-item
              label="会员身份"
              :rules="[{ required: true, message: '会员身份不能为空' }]"
            >
              <el-input
                class="el-input"
				size="small"
                placeholder="会员身份"
                v-model="formData.vipStatu"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="真实姓名"
              :rules="[{ required: true, message: '真实姓名不能为空' }]"
            >
              <el-input
                class="el-input"
				size="small"
                placeholder="真实姓名"
                v-model="formData.realName"
                :disabled="true"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
      <el-container class="c-input">
        <el-header>
          <p class="f-m color-text-primary title">业务信息</p>
        </el-header>
        <el-main>
          <el-form>
            <el-form-item
              label="应用行业"
              :rules="[{ required: true, message: '应用行业不能为空' }]"
            >
              <el-cascader
                class="el-input"
				size="small"
                v-model="formData.tradesSubmit"
                :options="trades"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
            <el-form-item
              label="产品名称"
              :rules="[{ required: true, message: '产品名称不能为空' }]"
            >
              <el-input
                class="el-input"
				size="small"
                placeholder="产品名称"
                v-model="formData.production"
              ></el-input>
            </el-form-item>
            <el-form-item label="企业官网">
              <el-input
                class="el-input"
				size="small"
                placeholder="企业官网"
                v-model="formData.hisUrl"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
      <el-container class="c-input">
        <el-header>
          <p class="f-m color-text-primary title">联系信息</p>
        </el-header>
        <el-main>
          <el-form>
            <el-form-item
              label="国家信息"
              :rules="[{ required: true, message: '国家信息不能为空' }]"
            >
              <el-input
                class="el-input"
				size="small"
                placeholder="国家信息"
                v-model="formData.country"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="所在地址"
              :rules="[{ required: true, message: '所在地址不能为空' }]"
            >
              <el-cascader
                class="el-input"
				size="small"
                v-model="formData.positionSubmit"
                :options="position"
                :props="{ expandTrigger: 'hover' }"
                @change="positionChange"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input
                class="el-input"
				size="small"
                placeholder="详细地址"
                v-model="formData.area"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
      <el-container class="c-input">
        <el-main>
          <el-form>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存信息</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    userId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      avatarUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      trades: [
        {
          value: "fastsale",
          label: "快消",
          children: [
            {
              value: "departmentStores",
              label: "百货商店",
            },
            {
              value: "estate",
              label: "商业地产",
            },
            {
              value: "supermartkey",
              label: "超级市场",
            },
          ],
        },
        {
          value: "wenti",
          label: "文体娱乐",
          children: [
            {
              value: "traval",
              label: "旅游",
            },
            {
              value: "basketball",
              label: "篮球比赛",
            },
            {
              value: "swim",
              label: "游泳池",
            },
          ],
        },
        {
          value: "tax",
          label: "财税",
        },
      ],
      position: [
        {
          value: "guangxi",
          label: "广西壮族自治区",
          children: [
            {
              value: "nanning",
              label: "南宁市",
              children: [
                {
                  value: "yongning",
                  label: "邕宁区",
                },
                {
                  value: "liangqing",
                  label: "良庆区",
                },
              ],
            },
            {
              value: "yulin",
              label: "玉林市",
              children: [
                {
                  value: "yuzhou",
                  label: "玉州区",
                },
                {
                  value: "rongxian",
                  label: "容县",
                },
              ],
            },
            {
              value: "liuzhou",
              label: "柳州市",
              children: [
                {
                  value: "yufeng",
                  label: "鱼峰区",
                },
                {
                  value: "rongan",
                  label: "融安县",
                },
              ],
            },
          ],
        },
        {
          value: "guangdong",
          label: "广东省",
          children: [
            {
              value: "guangzhou",
              label: "广州市",
              children: [
                {
                  value: "zhujiangxincity",
                  label: "珠江新城",
                },
                {
                  value: "baiyun",
                  label: "白云区",
                },
              ],
            },
            {
              value: "shenzhen",
              label: "深圳市",
              children: [
                {
                  value: "futian",
                  label: "福田区",
                },
                {
                  value: "luohu",
                  label: "罗湖区",
                },
              ],
            },
          ],
        },
      ],
      formData: {
        realName: "张三",
        vipStatu: "个人",
        tradesSubmit: [],
        production: "",
        hisUrl: "",
        country: "中国",
        positionSubmit: [],
        area: "",
      },
    };
  },
  methods: {
    onSubmit() {
      var form = this.formData;
      // form.trades = null;
      // form.position = null;
      console.log("表单数据：", form);
    },
    handleChange(e) {
      console.log(e);
    },
    positionChange(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped lang="scss">
@import "alinesno-ui/src/assets/styles/element-variables.scss";

.container {
  display: flex;
  flex-direction: column;
  padding: 0 25px 25px 25px;
  width: 1024px ;
  margin: auto ; 
  padding: 50px;
  min-height: calc(100vh - 100px);
}

.child {
  margin: 0 10px 0 0;
}

.el-main{
	padding: 0px 20px;
}

label{
	font-weight: normal !important;
}

.f-b {
  line-height: 28px;
}

.box-card {
  margin-top: 25px;
}

.c-input {
  max-width: 900px;
}
.el-input {
  width: 100%;
}
body {
  .bg-color-base {
    background-color: $--background-color-base;
  }
  .color-text-primary {
    color: $--color-text-primary;
  }
  .color-text-regular {
    color: $--color-text-regular;
  }
  .color-text-secondary {
    color: $--color-text-secondary;
  }
  .color-text-placeholder {
    color: $--color-text-placeholder;
  }
  .f-e-l {
    font-size: 20px;
    line-height: 20px;
  }
  .f-l {
    font-size: 18px;
    line-height: 18px;
  }
  .f-m {
    font-size: 16px;
    line-height: 16px;
  }
  .f-b {
    font-size: 14px;
    line-height: 14px;
  }
  .f-b {
    font-size: 14px;
    line-height: 14px;
  }
  .f-s {
    font-size: 13px;
    line-height: 13px;
  }
  .f-e-s {
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
