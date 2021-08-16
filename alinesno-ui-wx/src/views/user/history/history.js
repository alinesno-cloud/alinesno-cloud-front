const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_load: 1,
    page: 1,
    category_id: '',
    load_other: 1,

  },

  change_category_id: function (e) {
    var t = this;
    var category_id = e.currentTarget.dataset.category_id;
    t.setData({
      category_id: category_id
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

  onLoad: function (options) {
    var t = this;
    if (util.isNotEmpty(options.category_id)) {
      t.setData({
        category_id: options.category_id
      });
    }
    t.load_data();
  },

  
  del: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    wx.showModal({
      title: '系统提示',
      content: '确定删除吗?',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'History',
            a: 'del',
            goods_id:d.goods_id
          
          };
          util.ajax(post_data, function () {

            t.data.list.splice(d.index, 1);
            t.setData({
              list: t.data.list
            })
          })
        }
      }
    })
  },
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'History',
      a: 'index',
      page: t.data.page,
      category_id: t.data.category_id,
      load_other: t.data.load_other,
    };

    util.ajax(post_data, function (res) {
      if (t.data.load_other == 1) {
        t.setData({
          data: res.data
        });
      }
      t.setData({
        load_other: 0,
      })

      if (res.data.count <= 0) {
        t.setData({
          is_load: 0
        });
      } else {
        t.data.list = t.data.list.concat(res.data.list);
        t.setData({
          list: t.data.list,
          page: t.data.page + 1
        });
      }

    });
  },
  tourl: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    wx.navigateTo({
      url: d.url,
    })

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
    return util.share();
  }
})