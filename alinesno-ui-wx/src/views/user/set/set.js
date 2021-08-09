const util = getApp().include('util');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimgurl: '',
    sexs: ['无', '男', '女']
  },
  upload_img: function (e) {
    var t = this;
    util.upload_img(function (data) {
      var url = data.url;
      e.currentTarget.dataset.name = 'headimgurl';
      t.setData({
        headimgurl: url
      });
      t.sub_name(e);
    });

  },
  getPhoneNumber(e) {
    var d = e.detail;
    var t = this;

    if (d.errMsg.indexOf("ok") != -1) {
      wx.login({
        success: function (lg) {
          var code = lg.code;
          util.ajax('/mallapi/Login/get_seesion', {
            code: code
          }, function (res) {
            util.ajax('/mallapi/Login/get_tel', {
              encryptedData: d.encryptedData,
              flag: 'up',
              iv: d.iv,
            }, function (res) {
              t.data.data.uinfo.tel = res.data.tel;
              t.setData({
                data: t.data.data
              })
            });
          });
        }


      });

    
    } else {
      util.alert({
        title: '失败：' + d.errMsg
      });
    }
  },
  change_name: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var name = d.name;
    console.log(e.detail.value);
    t.setData({
      [`${name}`]: e.detail.value
    });
    t.data.data.uinfo[`${name}`] = t.data[`${name}`];
    t.setData({
      data: t.data.data
    });
    if (name == 'birthday' || name == 'sex') {
      t.sub_name(e);
    }
  },
  sub_name: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var name = d.name;
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'set',
      flag: 'sub',
    };
    t.data.data.uinfo[`${name}`] = t.data[`${name}`];
    t.setData({
      data: t.data.data
    });
    post_data[`${name}`] = t.data[`${name}`];
    util.ajax(post_data, function (res) {


    });
  },

  sub: function (e) {
    var t = this;
    var v = e.detail.value;
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'set',
      flag: 'sub'
    };
    post_data = Object.assign(post_data, v);
    util.ajax(post_data, function (res) {
      wx.reLaunch({
        url: '/pages/user/index/index',
      })

    });
  },
  onLoad: function (options) {
    var t = this;
    util.ajax('/mallapi/User/set', {
      flag: 'get'
    }, function (res) {
      t.setData({
        data: res.data
      })
    })




  },
  logout: function () {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'login',
      a: 'logout',
    };
    wx.removeStorageSync('token');
    util.ajax(pos_data, function (res) {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    });


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})