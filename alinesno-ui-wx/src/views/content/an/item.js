const util = getApp().include('util');
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
      c: 'content',
      a: 'an_item',
      id: options.id
    };
    var t = this;
    util.ajax(post_data, function (data) {
      t.setData({
        data: data.data
      })
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return util.share();
  }
})