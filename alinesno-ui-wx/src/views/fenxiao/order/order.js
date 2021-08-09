var app = getApp();
const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    isLoadEnd: false,
    isLoad: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
 
    t.setData({
      options: options
    });
    t.init_list();
  },
  init_list: function () {
    var t = this;
    t.setData({
      list: [],
      page: 1,
      isLoadEnd: false,
      isLoad: false,
    })
    t.get_list();
  },
  get_list: function () {
    var t = this;
    if (!t.data.isLoad && !t.data.isLoadEnd) {
      t.data.isLoad = true;
      var post_data = {
        m: 'mallapi',
        c: 'fenxiao',
        a: 'sale_order',
        page: t.data.page,
        flag: t.data.options.flag
      };
      util.ajax(post_data, function (res) {
        t.data.page++;
        var data = res.data.list;

        if (data.length > 0) {
          t.setData({
            list: t.data.list.concat(data),
            isLoad: false
          })
        } else {
          t.setData({
            isLoadEnd: true,
            isLoad: false
          })
        }

        console.log(t.data.list);
      })
    }
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
    var t=this;
    t.get_list();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})