
const util = getApp().include('util');
const app = getApp();
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
    var t = this;
    t.load_data();
  },

  load_data:function(){
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Coupon',
      a: 'my_coupon',
    };
    util.ajax(post_data, function (res) {

      t.setData({
        data: res.data
      });
    });
  },
  /**
   * 领取优惠券
   */
  getCoupon: function (e) {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Coupon',
      a: 'draw',
      id: e.currentTarget.dataset.coupon_id
    };

    util.ajax(post_data, function (res) {
      t.load_data();

    });

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