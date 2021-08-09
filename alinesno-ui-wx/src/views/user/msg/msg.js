const util = getApp().include('util');var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_load: 1,
    page: 1,
    type: '',
    load_other: 1,

  },

  change_type: function (e) {
    var t = this;
    var type = e.currentTarget.dataset.type;
    t.setData({
      type: type
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
    t.setData({
      cdn: app.globalData.cdn
    })
    t.load_data();
  },
  tourl: function (e) {
		var t = this;
		var d = e.currentTarget.dataset;
		if (util.isNotEmpty(d.url)) {
			wx.navigateTo({
				url: d.url,
			})
		}

	},
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'msg',
      type:t.data.type,
      page: t.data.page,
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