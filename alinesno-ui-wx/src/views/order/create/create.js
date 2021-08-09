const util = getApp().include('util');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    send_type: 0,
    goods_id: '',
    item_id: '',
    num: '',
    address_id: 0,
    address_type: 0,
    coupon_id: 0,
    coupon_type: 0,
    ordernum: '',
    parameters: null,
    pt_id: 0,
    p_ordernum: '',

    dot_arr: ['不使用', '使用'],

    use_dot: 1,
    use_money:1,
  },
  
  use_money:function(e){
    var t= this;
    t.setData({
      use_money: !t.data.use_money
    });
    t.load_data();
  },
  use_dot: function (e) {
    var t = this;
    t.setData({
      use_dot: !t.data.use_dot
    });
    t.load_data();
  },




  open_address(){

    wx.navigateTo({
      url:"/pages/user/address/index/index?type=1"
    })
  },


  change_dot: function (e) {
    console.log(e);
    var v = e.detail.value;
    var t = this;
    if (v == 1) {
     //弹窗
    } else {
      t.setData({
        use_dot: 0
      })
      t.load_data('get');
    }
  },

  change_money: function (e) {
    console.log(e);
    var v = e.detail.value;
    var t = this;
    if (v == 1) {
      //弹窗
    } else {
      t.setData({
        use_money: 0
      })
      t.load_data('get');
    }


  },
  show_coupon: function () {
    var t = this;
    t.setData({
      coupon_type: 1
    });
    t.selectComponent("#coupon_com_id").load_list();
  },
  change_message: function (e) {
    var t = this;
    t.setData({
      message: e.detail.value
    });
  },

  //打开地址组件
  // open_address: function () {
  //   var t = this;
  //   t.setData({
  //     address_type: 1
  //   });
  //   t.selectComponent("#address_com_id").load_list();
  // },
  change_coupon_sel: function (e) {
    var t = this;
    t.setData({
      coupon_id: e.detail.aid,
      coupon_type: 0
    });
    t.load_data();
  },
  // change_address_sel: function (e) {
  //   var t = this;
  //   t.setData({
  //     address_id: e.detail.info.id,
  //     address_type: 0
  //   });
  //   t.load_data();
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    if (util.isNotEmpty(options.pt_id)) {
      t.setData({
        pt_id: options.pt_id
      });
      wx.setNavigationBarTitle({
        title: '发起拼团',
      });
    }
    if (util.isNotEmpty(options.p_ordernum)) {
      t.setData({
        p_ordernum: options.p_ordernum
      });
      wx.setNavigationBarTitle({
        title: '参加拼团',
      });
    }
    if (util.isNotEmpty(options.send_type)) {
      t.setData({
        send_type: options.send_type
      });
    }

    if (util.isNotEmpty(options.goods_id)) {
      t.setData({
        goods_id: options.goods_id
      });
    }

    if (util.isNotEmpty(options.item_id)) {
      t.setData({
        item_id: options.item_id
      });
    }

    if (util.isNotEmpty(options.num)) {
      t.setData({
        num: options.num
      });
    }
    if (util.isNotEmpty(options.ms_id)) { //秒杀商品ID
      t.setData({
        ms_id: options.ms_id
      });
    }



   
    t.load_data();


  },

  tocart: function () {
    var t = this;
    wx.navigateBack({

    });
    // wx.redirectTo({
    //   url: '/pages/goods/cart/cart',
    // })
  },



  change_send_type: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.setData({
      send_type: d.send_type
    });
    t.load_data();
  },
  sub: function () {
    var t = this;

    if (!util.isEmpty(t.data.ordernum)) {
      util.alert({
        title: '该页面已失效'
      });
      return;
    }

    var pos_data = t.get_data('sub');
    // if(pos_data.address_id == 0 && t.data.send_type == 1){
    //   util.show_msg("请选择收货地址")
    //   return false
    // }
    util.ajax(pos_data, function (data) {

      if (data.data.is_pay == 0) {
        wx.reLaunch({
          url: '/pages/order/sel_pay/sel_pay?ordernum='+data.data.ordernum,
        });
      } else {

        if (t.data.pt_id == 0) {
          wx.redirectTo({
            url: '/pages/order/ok/ok',
          })
        } else {
          wx.redirectTo({
            url: '/pages/ac/pt/order/pt?ordernum=' + data.data.time,
          })
        }

      }


    });
  },
  get_data: function (flag) {
    var t = this;
    return {
      m: 'mallapi',
      c: 'OrderCreate',
      a: 'create_order',
      flag: flag,
      send_type: t.data.send_type,
      goods_id: t.data.goods_id,
      item_id: t.data.item_id,
      num: t.data.num,
      message: t.data.message,
      address_id: t.data.address_id,
      coupon_id: t.data.coupon_id,
      ms_id:t.data.ms_id,

      pt_id: t.data.pt_id,
      use_money: t.data.use_money,

      use_dot: t.data.use_dot,
      money: t.data.use_money,

      p_ordernum: t.data.p_ordernum
    };
  },
  load_data: function () {
    var t = this;
    if (!util.isEmpty(t.data.ordernum)) {
      util.alert({
        title: '该页面已失效'
      });
      return;
    }
    var pos_data = t.get_data('get');
    util.ajax(pos_data, function (data) {
      t.setData({
        data: data.data
      });
      if (data.data.coupon_info) {
        t.setData({
          coupon_id: data.data.coupon_info.id
        });
      }
      
      if (!t.data.send_type && util.isNotEmpty(data.data.send_type)) {
        t.setData({
          send_type: data.data.send_type
        });
      }

    });
  },

  taf_nav: function (e) {
    var d = e.currentTarget.dataset;
    var lat = parseFloat(d.lat);
    var lng = parseFloat(d.lng);
    if (lat > 0 && lng > 0) {
      wx.openLocation({
        latitude: lat,
        longitude: lng,
        name: d.name,
        address: d.address,
        scale: 28
      })
    }
  },
})