const util = getApp().include('util');
const app = getApp();
// components/footer_nav/footer_nav.js
Page({

  /**
   * 组件的初始数据
   */
  data: {
    goods_id: 0,
    list:[],
    page:1,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var t = this;
    if (util.isNotEmpty(options.goods_id)) {
      t.setData({
        goods_id: options.goods_id
      });
    };
    t.load_data();
  },
  load_data: function (e) {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    t.setData({
      is_load:0
    })
    var pos_data = {
      m: 'mallapi',
      c: 'Goods',
      a: 'get_goods_comment',
      goods_id: t.data.goods_id,
      page:t.data.page
    };
    util.ajax(pos_data, function (res) {

      if (res.data.count <= 0) {
        t.setData({
          is_load: 0
        });
      } else {
        t.data.list = t.data.list.concat(res.data.list);
        t.setData({
          list: t.data.list,
          page: t.data.page + 1,
          is_load:1
        });
      }

    });
  },



})