<template>
    <nav class="CB-gKhVFp header-text">
        <div class="CB-qpwBh">
            <router-link tag="a" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" to="/index">控制台
            </router-link>
        </div>
        <div class="CB-qpwBh">
            <router-link tag="a" class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab" to="/dashboard/platform/service">支持管理</router-link>
        </div>
        <el-dropdown @command="handleCommand">
            <div class="CB-qpwBh" style="display: flex">
                <a class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab">{{nickname}}</a>
                <a class="sc-2fc5kz-0 fga5tf-0 CB-ktSrBv CB-dPJIQr ra375q-0 CB-jjPPab " target="_blank" >
                    <img src="//oss.aliyuncs.com/aliyun_id_photo_bucket/default_family.jpg" class="su70ez-0 CB-gLgKdv"/>
                </a>
            </div>
            <el-dropdown-menu slot="dropdown" class="dropdown-container" style="width: 350px">
                <el-container>
                    <el-header class="bg-color-base info-h" style="height: auto; padding-bottom: 15px">
                        <p class="color-text-primary f-e-s">{{name}}</p>
                        <p class="color-text-secondary f-e-s">
                            账号：{{account}}
                        </p>
                        <el-tag v-for="(r , i) of role" :key="i">{{r}}</el-tag>
                    </el-header>
                </el-container>
                <el-dropdown-item @click.native="setting = true" icon="el-icon-s-management">布局设置</el-dropdown-item>
                <el-container>
                    <el-main>
                        <el-button style="width: 100%" size="small" @click="logout">退出登陆</el-button>
                    </el-main>
                </el-container>
            </el-dropdown-menu>
        </el-dropdown>
    </nav>
</template>
<script>

  export default {
    name: 'TopHeader',
    components: {
    },
    computed: {
      role: {
        get () {
          return this.$store.state.user.roles
        }
      },
      account: {
        get () {
          const { account } = this.$store.state.user
          console.log('account = ' + account)
          return account ? account : ''
        }
      },
      nickname: {
        get () {
          const nickname = this.$store.state.user.nickname
          console.log('nickname = ' + nickname)
          return nickname ;
        }
      },
      name: {
        get () {
          const name = this.$store.state.user.name
          console.log('name = ' + name)
          return name ;
        }
      },
      setting: {
        get () {
          return this.$store.state.settings.showSettings
        },
        set (val) {
          this.$store.dispatch('settings/changeSetting', {
            key: 'showSettings',
            value: val,
          })
        },
      },
      topNav: {
        get () {
          return this.$store.state.settings.topNav
        },
      },
    },
    methods: {
      handleCommand (command) {
        this.$router.push({ name: command })
      },
      toggleSideBar () {
        this.$store.dispatch('app/toggleSideBar')
      },
      submitForm () {
      },
      cancel () {
      },
      dashboardHome () {
        window.location.href = this.saasUrl
      },
      // 表单重置
      reset () {
        this.form = {
          noticeId: undefined,
          noticeTitle: undefined,
          noticeType: undefined,
          noticeContent: undefined,
          status: '0',
        }
        this.resetForm('form')
      },
      handleAdd () {
        this.reset()
        this.open = true
        this.title = '添加工单'
      },
      async logout () {
        this.$confirm('确定注销并退出系统吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
            // this.$store.dispatch('LogOut').then(res()=>{
            //     window.location.href="/"
            // })
            this.$store.dispatch('LogOut').then(() => {
                window.location.href="/"
            })
        })
      },
    },
  }
</script>

<style lang="scss" >
    .top-headers {
        height: 50px;
        font-size: 12px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: var(--cb-color-bg-primary, #fff);
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        z-index: 10;
        // box-shadow: 0 2px 4px 0 var(--cb-color-shadow, rgba(0, 0, 0, 0.16));
        border-bottom: var(--card-border-width, 1px) var(--card-border-style, solid) var(--card-border-color, #e3e4e6);

        .header-logo-label {
            font-size: 16px;
            margin-left: 10px;
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
                height: 50px;
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
                background-color: #005bd4;
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
                z-index: 1000;
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

    .dropdown-container {
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

    .el-dropdown-menu--medium .el-dropdown-menu__item {
        font-size: 12px;
    }
</style>


