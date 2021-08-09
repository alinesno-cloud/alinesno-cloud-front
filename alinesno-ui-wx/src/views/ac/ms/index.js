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
    cate_id: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    t.load_data();
  },

  change_category_id: function (e) {
    var t = this;
    var cate_id = e.currentTarget.dataset.cate_id;
    t.setData({
      cate_id: cate_id
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

  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'ms',
      a: 'index',
      page: t.data.page,
      cate_id: t.data.cate_id,
      load_other: t.data.load_other
    };

    util.ajax(post_data, function (res) {
      if (t.data.load_other == 1) {
        t.setData({
          data: res.data
        });
        t.setData({
          cate_id: res.data.cate_id,
          cate_info: res.data.cate_info
        })
        console.log(t.data.cate_id)
        t.countDown();
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


  countDown: function () {
    var t = this;
    if(t.data.is_unload){
      return false;
    }
    console.log(t.data.cate_info);
    var NowTime = new Date();
    var e = new Date(t.data.cate_info.end_time);
    var t2 = e.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (t2 >= 0) {
      d = Math.floor(t2 / 1000 / 60 / 60 / 24);
      h = Math.floor(t2 / 1000 / 60 / 60 % 24);
      m = Math.floor(t2 / 1000 / 60 % 60);
      s = Math.floor(t2 / 1000 % 60);

      if (h < 10) {
        h = '0' + h.toString();
      }
      if (m < 10) {
        m = '0' + m.toString();
      }
      if (s < 10) {
        s = '0' + s.toString();
      }
      t.setData({
        h: h,
        m: m,
        s: s
      });

      setTimeout(function (){
        t.countDown();
      },1000)

    }
    t.setData({
      is_down: 0
    });
  },

  tourl: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    if (d.sale_status == 0) {
      return;
    }
    wx.navigateTo({
      url: 'item?id=' + d.id,
    })
  },

  onUnload() {
    this.setData({
      is_unload:true,
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