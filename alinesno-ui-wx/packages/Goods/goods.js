const app = getApp()
const util = getApp().include('util');
var defaultOptions = {
  confirm: function (res) {},
  close: function (res) {},
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false,

    },
    data: {
      type: Object,
      value: {},
    },
    tuan_id: {
      type: Number,
      value: 0,
    },
    shop_id: {
      type: Number,
      value: 0,
    },
    goods_num: {
      type: Number,
      value: 1,
    },

    num: {
      type: Number,
      value: 1,
    },

    info: {
      type: Object,
      value: 0,
    },

    
  },

  /**
   * 组件的初始数据
   */
  data: {
    statics: getApp().globalData.statics,
    p_ordernum:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    get_data: function (obj) {
      var goods_id = obj.goods_id;
      var flag = obj.flag ? obj.flag : null;
      var ms_id=obj.ms_id ? obj.ms_id : null;
      var pt_id=obj.pt_id ? obj.pt_id : null;
      var p_ordernum=obj.p_ordernum ? obj.p_ordernum : null;
      var t = this;
      if(obj.buy_type) {
        t.setData({
          buy_type:obj.buy_type,
        });
      }

      if(p_ordernum){
        t.setData({
          p_ordernum:p_ordernum,
        });
      }
      defaultOptions.confirm = function (e) {
        "function" == typeof obj.confirm && obj.confirm(e);
      }
      defaultOptions.close = function (e) {
        "function" == typeof obj.close && obj.close(e);
      }
      var post_data = {
        m: 'mallapi',
        c: 'goods',
        a: 'get_goods',
        ms_id:ms_id,
        pt_id:pt_id,
        goods_id: goods_id,
      };
      util.ajax(post_data, function (data) {
        console.log(data);
        t.setData({
          data: data.data,
          flag: flag,
          ms_id:ms_id,
          pt_id:pt_id,
          show: true
        });
        t.update_unit_price();
      });
    },
    // 选规格
    isSelected: function (e) {
      this.setData({
        viewId: e.currentTarget.dataset.index
      })
    },

    close: function () {
      var t = this;
      t.setData({
        show: false,
      });
      defaultOptions.close({
        show_name: t.data.show_name
      })
    },
    sel_spec: function (e) {
      var t = this;
      var d = e.currentTarget.dataset;
      var ss = t.data.data.goods_spec[d.pindex].spec_value;
      for (var j in ss) {

        ss[j].check = 0;
      }
      ss[d.index].check = 1;
      t.data.data.goods_spec[d.pindex].spec_value = ss;
      t.setData({
        data: t.data.data
      });
      t.update_unit_price();

    },
    //显示单价
    update_unit_price() {
      var t = this;
      //单规格
      if(t.data.data.info.spec_type == 1){
        t.setData({
          info:t.data.data.goods_item[0]
        });
        return ;
      }
     

      var arr = [];
      for (var i in t.data.data.goods_spec) {

        for (var j in t.data.data.goods_spec[i].spec_value) {

          var item = t.data.data.goods_spec[i].spec_value[j];
          if (item.check == 1) {
            arr.push(parseInt(item.id));
          }
        }

      }
      //冒泡从小到大排序
      var min;
      for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            min = arr[j];
            arr[j] = arr[i];
            arr[i] = min;
          }
        }
      }
      var str = arr.join(',');
      var info;
      for (var i in t.data.data.goods_item) {
        if (str == t.data.data.goods_item[i].spec_value_ids) {
          info = t.data.data.goods_item[i];
          break;
        }
      }
      t.setData({
        info:info
      });
      console.log(info);

    },

    jia_num: function (e) {

      var t = this;
      var num = t.data.num
      num++;
      t.setData({
        num: num,
      })
    },


    jian_num: function (e) {

      var t = this;
      var num = t.data.num
      if (num > 1) {
        num--;
        t.setData({
          num: num,
        })
      }
    },

    //提交订单
    toorder: function (e) {
      var t = this;
      var flag = e.currentTarget.dataset.flag;

      var num = parseInt(t.data.num);
      if (num <= 0 || isNaN(num)) {
        util.show_msg('数量最少为1');
        return;
      }
      if (flag == 'ms') {
        wx.navigateTo({
          url: '/pages/order/create/create?goods_id=' + t.data.data.info.goods_id + "&item_id=" + t.data.info.id + "&num=" + num +
              '&shop_id=' + t.data.shop_id+ '&ms_id=' + t.data.ms_id,
        })
        return false;
      }



      if (flag == 'pt') {
        wx.navigateTo({
          url: '/pages/order/create/create?goods_id=' + t.data.data.info.goods_id + "&item_id=" + t.data.info.id + '&pt_id=' + t.data.pt_id+ "&num=" + num+'&p_ordernum=' + t.data.p_ordernum,
        })
        return false;
      }


      if (flag == "buy") {
        wx.navigateTo({
          url: '/pages/order/create/create?goods_id=' + t.data.data.info.goods_id + "&item_id=" + t.data.info.id + "&num=" + num +
            '&shop_id=' + t.data.shop_id,
        })
        return false;
      }

      var post_data = {
        m: 'mallapi',
        c: 'Cart',
        a: 'add',
        goods_id: t.data.data.info.goods_id,
        item_id: t.data.info.id,
        num: num,
      };
      util.ajax(post_data, function (data) {
        t.data.data.cart_num = data.data.cart_num;
        t.setData({
          data: t.data.data
        })
        t.setData({
          show: false,
        });
        if (t.data.flag == 'order') {
          wx.navigateTo({
            url: '/pages/goods/cart/cart',
          })
        } else {
          t.data.data['show_name'] = t.data.show_name;
          defaultOptions.confirm(t.data.data)
        }
      });

    },

    showimg: function (e) {
      wx.previewImage({
        current: e.currentTarget.dataset.img, // 当前显示图片的http链接
        urls: [e.currentTarget.dataset.img] // 需要预览的图片http链接列表
      })
    }
  }
})