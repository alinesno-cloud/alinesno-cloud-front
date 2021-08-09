var app = getApp();
const u = app.include('util');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      value: 0,
    },
    data: {
      type: Object,
      value: {}
    },
    aid: {
      type: Number,
      value: 0
    },
    goods_total: {
      type: Number,
      value: 0
    },
    category_id: {
      type: Number,
      value: 0
    },
    goods_num:{
      type: Number,
      value: 0
    },
    cate_arr: {
      type: Object,
      value: {}
    },
    goods_id_arr: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapChild: function (event) {
      var myEventDetail = {
        aid: event.currentTarget.dataset.aid,
      }
      var myEventOption = {}
      this.triggerEvent('change_sel', myEventDetail, myEventOption);
    },
    cacel: function () {
      var t = this;
      t.setData({
        type: 0
      });
    },
    load_list: function (e) {
      var t = this;
      var post_data = {
        m: 'mallapi',
        c: 'Coupon',
        a: 'user_list',
        goods_total: t.data.goods_total,
        category_id: t.data.category_id,
        cate_arr:t.data.cate_arr,
        flag: 1,
        goods_num:t.data.goods_num,
        goods_id_arr:t.data.goods_id_arr,
      };
      u.ajax(post_data, function (data) {
        t.setData({
          data: data.data,
        });
      });
    },

  }
})