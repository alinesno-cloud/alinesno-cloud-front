const util = getApp().include('util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'express',
      orderid: options.orderid
    };
    var t = this;

    util.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      })

    });
  },

  copyText: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制单号成功'
            })
          }
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})