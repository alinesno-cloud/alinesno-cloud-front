const u = getApp().include('util');
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
    var t = this;
    t.setData({
      cdn: app.globalData.cdn
    })
    t.load_data();
  },

  load_data: function () {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'cart',
      a: 'index',
    };
    u.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      });
    });
  },
  sub: function () {
    var t = this;
    if (t.data.data.sel_total <= 0) {
      util.show_msg('请选择商品');
      return;
    }
    wx.navigateTo({
      url: '/pages/order/create/create?'
    });
  },
  change_shop_check: function (e) {
    var d = e.currentTarget.dataset;
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Cart',
      a: 'change_shop_check',
      shop_id: d.shop_id,
      check: d.check
    };
    u.ajax(post_data, function (res) {
      t.load_data();
    });
  },
  change_all: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;

    var post_data = {
      m: 'mallapi',
      c: 'Cart',
      a: 'change_all',
      check: d.check
    };
    u.ajax(post_data, function (res) {
      t.load_data();
    });
  },
  change_check: function (e) {
    var d = e.currentTarget.dataset;
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Cart',
      a: 'change_check',
      id: d.id,
    };
    u.ajax(post_data, function (res) {
      t.load_data();
    });
  },
  tourl: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    wx.navigateTo({
      url: d.url,
    })
  },
  del: function (e) {
    var id = e.target.dataset.id;
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Cart',
      a: 'del',
      id: id,
    };
    u.ajax(post_data, function (res) {
      t.setData({
        shuxing: 0
      });
      t.load_data();
    });
  },
  change_num: function (e) {
    var v = e.detail.value;
    var t = this;
    var d = e.currentTarget.dataset;
    if (d.num != v && v > 0) {
      var post_data = {
        m: 'mallapi',
        c: 'Cart',
        a: 'change_num',
        id: d.id,
        num: v
      };
      u.ajax(post_data, function (res) {
        t.load_data();
      });
    } else if (v <= 0) {
      t.load_data();

    }

  },
  set_num: function (e) {
    var d = e.currentTarget.dataset;
    var flag = e.currentTarget.dataset.flag;
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'Cart',
      a: 'set_num',
      id: d.id,
      flag: flag
    };
    u.ajax(post_data, function (res) {
      t.load_data();
    });
  },

})