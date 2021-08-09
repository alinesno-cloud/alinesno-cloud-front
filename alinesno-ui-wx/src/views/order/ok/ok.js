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
      a: 'ok',
    };
    var t = this;

    t.setData({
      cdn: app.globalData.cdn
    });
    util.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      })

    });
  }, 
})