const app = getApp();

const util = getApp().include('util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_load: 1,
    page: 2,
    category_id: '',
    load_other: 1,
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'content',
      a: 'shouji',
    };
    t.setData({
      cdn: app.globalData.cdn
    })
    util.ajax(post_data, function (data) {

      t.setData({
        data:data.data,
        list:data.data.list
      })

    })
  },

	change_cate: function (e) {
		var t = this;
		var d = e.currentTarget.dataset;
		if (d.category_id != t.data.category_id) {
			t.setData({
        category_id: d.category_id,
        page:1,
        list:[],
        is_load:1,
			});
			t.load_data();
		}

	},
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'content',
      a: 'tel_list',
      page: t.data.page,
      category_id: t.data.category_id,
    };

    util.ajax(post_data, function (res) {
     
    

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

  }
})