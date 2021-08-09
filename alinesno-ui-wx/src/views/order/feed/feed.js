const util = getApp().include('util');
var app = getApp();

Page({
  data: {
    info: {},
  },

  onLoad: function (options) {
    var t = this;

    t.setData({
      orderid: options.orderid
    });
    t.up_data();
  },
  up_data: function () {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'feed_log',
      orderid: t.data.orderid
    };
    post_data = Object.assign(post_data, t.data.info);
    util.ajax(post_data, function (res) {

      t.setData({
        data: res.data
      });
    });
  },

  sub: function () {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'feed_sub',
      orderid:t.data.orderid
    };
    post_data = Object.assign(post_data, t.data.info);
    util.ajax(post_data, function (data) {
      t.up_data();

    });
  },

  change_field: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    t.data.info[`${field}`] = e.detail.value;
    t.setData({
      info: t.data.info
    });
  },
  copyText: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
})