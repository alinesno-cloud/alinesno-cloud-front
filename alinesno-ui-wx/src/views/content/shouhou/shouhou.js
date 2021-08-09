const util = getApp().include('util');
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
    show_type:0
  },
  sel_info:function(e){
    var t= this;
    var d = e.currentTarget.dataset;
    
    t.setData({
      msg1:t.data.list[d.index].title,
      msg2:t.data.list[d.index].content_str,
      show_type:1,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t= this;
    t.load_data();

  },
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'mallapi',
      c: 'ContentApi',
      a: 'index',
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})