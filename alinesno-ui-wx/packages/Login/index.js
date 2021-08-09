const util = getApp().include('util');
const wc = require('../../utils/wcache.js');
var app = getApp();
Component({
  behaviors: [],
  properties: {
    show: {
      type: Boolean,
      value: false

    },
  },
  data: {
    load: 1,
    butnLoading: false
  },
  methods: {
    nologin: function (e) {
	  var t = this;
	  t.setData({
		  show:false
	  });
      let myEventDetail = 'dontlogin';
      this.triggerEvent('logindont', myEventDetail);
    },
    login: function (e) {
      var t = this;
      t.setData({
        butnLoading: true
      })
      setTimeout(function () {
        t.setData({
          butnLoading: false
        });
      }, 2000)
      var res = e.detail;

      if (res.errMsg.indexOf('ok') <= -1) {
        return false;
      }
      var userInfo = res.userInfo;

      wx.login({
        success: function (lg) {
          if (lg.code) {
            wx.getUserInfo({
              withCredentials: true,
              success: function (res) {
                var post_data = {
                  code: lg.code,
                  m: 'Api',
                  c: 'Login',
                  a: 'index',
                  key: app.globalData.key,
                  reginfo: userInfo,
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                };
                var pid = wx.getStorageSync('pid');
                if (util.isNotEmpty(pid)) {
                  post_data.pid = pid;
                }

                post_data.m = 'Api';
                post_data.c = 'Login';
                post_data.a = 'index';
                wx.request({
                  url: app.globalData.url + "Api/Login/index",
                  method: 'POST',
                  data: post_data,
                  success: function (res) {
                    if (res.data.status == 1) {
                      wx.removeStorageSync('pid');
                      wx.setStorageSync('token', res.data.data.token);
                      wx.setStorageSync('session_key', res.data.data.session_key);
                      console.log('登录成功');
                      // wc.put('uinfo', res.data.data.uinfo, 3600);
                      var to_url = wx.getStorageSync('to_url');
                      let myEventDetail = 'loginsuccess';
                      t.triggerEvent('loginsuccess', myEventDetail);

                    } else if (res.data.status == 0) {
                      util.show_msg('登录失败');
                    }

                  }
                })
              },
            });
            return;
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      });
      return;

    },

  }
});