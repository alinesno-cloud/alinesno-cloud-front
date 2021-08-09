const util = getApp().include('util');

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step: 0,
    load: 1,
    butnLoading: false
  },
  no_login: function (e) {
    wx.redirectTo({
      url: "/pages/index/index"
    })
  },
  _login:function(userInfo){
	  var t = this;
	   wx.login({
          success: function (lg) {
            if (lg.code) {
              var post_data = {
                code: lg.code,
                m: 'comapi',
                c: 'Login',
                a: 'index',
                reginfo: userInfo,
              };
              var pid = wx.getStorageSync('pid');
              if (util.isNotEmpty(pid)) {
                post_data.pid = pid;
              }
              var extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}
              post_data.shop_id = extConfig.shop_id;
              wx.request({
                url: app.globalData.url + "?m=comapi&c=Login&a=index",
                method: 'POST',
                data: post_data,
                success: function (res) {
                  if (res.data.status == 1) {
                    wx.removeStorageSync('pid');
                    wx.setStorageSync('token', res.data.data.token);
                    wx.setStorageSync('uinfo', res.data.data.uinfo);
                    wx.setStorageSync('session_key', res.data.data.session_key);

                    if (res.data.data.is_tel == '1') {
                      t.setData({
                        step: 2
                      })
                    } else {
                      var to_url = wx.getStorageSync('to_url');
                      if (util.isNotEmpty(to_url) == true && to_url != "/pages/login/login") {
                        wx.redirectTo({
                          url: to_url
                        })
                      } else {
                        wx.redirectTo({
                          url: "/pages/index/index"
                        })
                      }
                    }


                  } else if (res.data.status == 0) {
                    util.alert({
                      title: res.data.info
                    });
                  }

                }
              });
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        });
	  
  },
  login: function () {
    var t = this;
    if (t.data.butnLoading == true) {
      return;
    }
    t.setData({
      butnLoading: true
    })

    setTimeout(function () {
      t.setData({
        butnLoading: false
      });
    }, 2000);
	
	if(!wx.getUserProfile){
		 t._login({});
	}else{
		
		wx.getUserProfile({
		  desc: '微信授权登录',
		  success: function (e) {
			var userInfo = e.userInfo;
			 t._login(userInfo);
		  },
		  fail: function (e) {
			console.log('登录失败：');
			console.log(e);
		  },
		});
	}
    
    return;

  },


  getPhoneNumber: function (e) {
    wx.checkSession({
      success() {
        if (!wx.getStorageSync('session_key')) {
          util.to_login();
        }
      },
      fail() {
        util.to_login();
      }
    })
    var d = e.detail;
    var t = this;
    if (d.errMsg.indexOf("ok") != -1) {
      var post_data = {
        m: 'mallapi',
        c: 'login',
        a: 'get_tel',
        encryptedData: d.encryptedData,
        iv: d.iv,
        session_key: wx.getStorageSync('session_key'),
        flag: 'up'
      };
      util.ajax(post_data, function (res) {
        t.to_dd();
      });
    } else {
      t.to_dd();
    }

  },

  to_dd() {
    var to_url = wx.getStorageSync('to_url');
    if (util.isNotEmpty(to_url) == true && to_url != "/pages/login/login") {
      wx.redirectTo({
        url: to_url
      })
    } else {
      wx.redirectTo({
        url: "/pages/index/index"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (util.isNotEmpty(options.pid)) {
      wx.setStorageSync('pid', options.pid);
    }
    var t = this;
    util.ajax("/mallapi/Login/load_index", {}, function (res) {
      t.setData({
        data: res.data,
        step: 1,
      });

    })
  },

})