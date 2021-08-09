const util = getApp().include('util');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cdn: app.globalData.cdn,

    list: [],
    is_load: 1,
    page: 1,
    category_id: '',
    load_other: 1,
    name: '',
    type: 1,


    order_type: 0,
    open_cate: false,
  },
  open_cate: function (e) {
    var t = this;
    t.setData({
      open_cate: !t.data.open_cate
    });
  },
  change_zh: function () {
    var t = this;
    t.setData({
      order_type: 0
    });
    t.search();
  },
  change_sale: function (e) {
    var t = this;
    //1 2
    var d = e.currentTarget.dataset;
    if (t.data.order_type >= 2) {
      t.data.order_type = 0;
    }
    t.setData({
      order_type: t.data.order_type + 1
    });
    t.search();
  },
  change_price: function (e) {
    var t = this;
    //3 4
    var d = e.currentTarget.dataset;
    if (t.data.order_type >= 4) {
      t.data.order_type = 2;
    }
    t.setData({
      order_type: t.data.order_type + 1
    });
    t.search();
  },
  change_type: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.setData({
      type: d.type
    });
    t.search();
  },

  change_field: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    t.setData({
      [`${field}`]: e.detail.value
    });
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
    if (util.isNotEmpty(options.type)) {
      t.setData({
        type: options.type
      });
    }
    if (util.isNotEmpty(options.name)) {
      t.setData({
        name: options.name
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
      c: 'goods',
      a: 'cate',
      name: t.data.name,
      type: t.data.type,
      page: t.data.page,
      category_id: t.data.category_id,
      load_other: t.data.load_other,
      order_type: t.data.order_type
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