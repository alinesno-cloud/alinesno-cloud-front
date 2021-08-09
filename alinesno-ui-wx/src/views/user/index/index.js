const util = getApp().include('util');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tourl: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    wx.navigateTo({
      url: d.url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'index',
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
  }, //打开地址组件
  open_address: function () {
    var t = this;
    t.setData({
      address_type: 1
    });

    t.selectComponent("#address_com_id").load_list();
  },

  del_address:function(e){
    var t= this;
    // t.setData({
    //   address_type: 1
    // })
  },

  //选中地址后
  change_address_sel: function (e) {
    var t = this;
    t.selectComponent("#address_com_id").edit_info(e.detail.info.id);
  },

  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})