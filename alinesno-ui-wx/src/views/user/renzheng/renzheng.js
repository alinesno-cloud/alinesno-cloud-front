const util = getApp().include('util');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },
  upload_img: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var name = d.name;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '加载中',
        });
        var tempFilePaths = res.tempFilePaths
        var post_data = [];
        wx.uploadFile({
          url: app.globalData.url + '/h/ajax/upload_images',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: post_data,
          success: function (res) {
            console.log(res);
            var data = JSON.parse(res.data);
            wx.hideLoading();
            if (data.status == '0') {
              util.show_msg('上传失败');
              return false;
            } else {
              t.data.info[`${name}`] = data.data.url;
              t.setData({
                info:t.data.info
              })
             

            }
          }
        })
      }
    })
  },
  sub: function () {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'renzheng',
      flag: 'sub'
    };
    post_data = Object.assign(post_data, t.data.info);
    util.ajax(post_data, function (res) {
      wx.reLaunch({
        url: '/pages/user/index/index',
      })
    });
  },
  getPhoneNumber(e) {
    var d = e.detail;
    var t = this;
    if (d.errMsg.indexOf("ok") != -1) {
      var post_data = {
        m: 'mallapi',
        c: 'login',
        a: 'get_tel',
        encryptedData: d.encryptedData,
        iv: d.iv,
      };
      util.ajax(post_data, function (res) {
        t.data.info.tel = res.data.tel;
        t.setData({
          info: t.data.info
        })
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
    t.data.info[`${name}`] = e.detail.value;
    t.setData({
      info: t.data.info
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var t = this;
    t.setData({
      cdn:app.globalData.cdn
    })

    wx.login({
      success: function (lg) {
        var code = lg.code;
        var post_data = {
          m: 'mallapi',
          c: 'Login',
          a: 'get_seesion',
          code: code,
          ac: 'renzheng',
          flag: 'get',
        };
        util.ajax(post_data, function (res) {
          t.data.info.tel = res.data.uinfo.tel;
          t.setData({
            info: t.data.info
          })

        });
      }


    });

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})