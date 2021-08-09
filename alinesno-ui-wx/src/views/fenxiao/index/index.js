const util = getApp().include('util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statics: getApp().globalData.statics,
    sela_count:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t=this;
    t.setData({
      cdn: app.globalData.cdn
    });
    var post_data = {
      m: 'mallapi',
      c: 'fenxiao',
      a: 'index',
    };
    util.ajax(post_data, function (res) {
      t.setData({
        resData: res.data,
      })
      t.get_count();
    })
  },

  setcount:function(e){
    var t=this;
    t.setData({
      sela_count: e.currentTarget.dataset.v,
    })
    t.get_count();
  },

  qr(){
    wx.navigateTo({
      url: '/pages/fenxiao/qr/qr',
    })
  },
  get_count(){
    var t=this;
    var post_data = {
      m: 'mallapi',
      c: 'fenxiao',
      a: 'get_sale_count',
      sela_count:t.data.sela_count,
    };
    util.ajax(post_data, function (res) {
      t.setData({
        count: res.data.count,
        total: res.data.total,
      })
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})