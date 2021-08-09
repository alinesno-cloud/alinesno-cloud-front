const app = getApp();

const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    banner: [],
    is_load: 1,
    page: 1,
    category_id: 0,
    category: [],
    flag: 2,
    name: '',
  },
  change_name: function (e) {
    var t = this;
    t.setData({
      name: e.detail.value
    });
  },

  change_flag: function (e) {
    var t = this;
    var flag = e.currentTarget.dataset.flag;
    t.setData({
      category_id: flag
    });
    t.search();
  },
  search: function () {
    var t = this;
    t.setData({
      list: [],
      is_load: 1,
      page: 1
    });
    t.load_data();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    if (util.isNotEmpty(options.flag)) {
      t.setData({
        category_id: options.flag
      });
    }

    t.load_data();
  },
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'consignment',
      a: 'index',
      category_id: t.data.category_id,
      page: t.data.page,
      name: t.data.name,
    };

    util.ajax(post_data, function (res) {
      if (t.data.page == 1) {
        t.setData({
          data: res.data.re_list,
          banner: res.data.ad_js,
          category: res.data.category_list,
        });
      }
      if (res.data.count <= 0) {
        t.setData({
          is_load: 0
        });
      } else {
        t.data.list = t.data.list.concat(res.data.re_list);
        t.setData({
          list: t.data.list,
          page: t.data.page + 1
        });
      }

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
    var t = this;
    t.load_data();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})