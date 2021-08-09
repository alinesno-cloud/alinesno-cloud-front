const util = getApp().include('util');
const u = getApp().include('util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_load: 1,
    page: 1,
    category_id: '',
    prepay_id: '',
    flag: '',
  },

  change_flag: function (e) {
    var t = this;
    var flag = e.currentTarget.dataset.flag;
    t.setData({
      flag: flag
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

  thx: function (e) {
    var d = e.currentTarget.dataset;
    wx.showModal({
      title: "取货码：" + d.hx,
      content: '',
      showCancel: false,
      success(res) {

      }
    })
  },

  onLoad: function (options) {
    var t = this;
    if (util.isNotEmpty(options.flag)) {
      t.setData({
        flag: options.flag
      });
    }
    if (util.isNotEmpty(options.prepay_id)) {
      t.setData({
        prepay_id: options.prepay_id
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
      c: 'order',
      a: 'index',
      page: t.data.page,
      flag: t.data.flag,
      prepay_id: t.data.prepay_id,
      category_id: t.data.category_id
    };

    util.ajax(post_data, function (res) {
      if (t.data.page == 1) {
        t.setData({
          data: res.data,
          prepay_id: '',
        });
      }
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
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var t = this;
    t.load_data();
  },

  cacel: function (e) {
    var d = e.currentTarget.dataset;
    var t = this;
    wx.showModal({
      title: '提示',
      content: '确定取消吗？',
      success(res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'cacel',
            orderid: d.orderid
          };
          util.ajax(post_data, function (res) {
            t.search();
          });
        }
      }
    })
  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },


  comment: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/comment/comment?orderid=' + orderid,
    })
  },
  item: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/item/item?orderid=' + orderid,
    })
  },
  feed: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/feed/feed?orderid=' + orderid,
    })
  },
  express: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/express/express?orderid=' + orderid,
    })
  },

  pay: function (e) {
    var t = this;
    var ordernum = e.currentTarget.dataset.ordernum;
    wx.navigateTo({
      url: '/pages/order/sel_pay/sel_pay?ordernum=' + ordernum,
    });
  },
  finish: function (e) {
    var t = this;
    var orderid = e.currentTarget.dataset.orderid;
    wx.showModal({
      title: '确定订单完成吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'finish',
            orderid: orderid,
          };
          u.ajax(post_data, function (data) {
            t.setData({
              page: 1,
              is_load: 1,
              list: []
            });
            t.load_data();
          });
        }

      }
    })
  },
  close: function (e) {
    var t = this;
    var orderid = e.currentTarget.dataset.orderid;
    wx.showModal({
      title: '确定取消订单吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'close',
            orderid: orderid,
          };
          u.ajax(post_data, function (data) {
            t.setData({
              page: 1,
              is_load: 1,
              list: []
            });
            t.load_data();
          });
        }

      }
    })
  },

  extend: function (e) {
    var t = this;
    var orderid = e.currentTarget.dataset.orderid;
    wx.showModal({
      title: '确定延长收货时间吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'extend',
            orderid: orderid,
          };
          u.ajax(post_data, function (data) {
            t.setData({
              page: 1,
              is_load: 1,
              list: []
            });
            t.load_data();
          });
        }

      }
    })
  },
})