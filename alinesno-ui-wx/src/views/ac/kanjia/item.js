const util = getApp().include('util');
var time_obj = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buBottom: getApp().globalData.buBottom,
    successShow: false, // 砍价成功弹窗

    showSelect: false,
    current_item: null,
    kj_price: 0,
    spec_child_id: 0,
    show_price: 0,
    address_type: 0,
    list: [],
    kj_id: 0,
    kan_msg:'',
    kan_total: '',
  },

  // 阻止弹窗滚动

  stopScroll: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var t = this;
    t.setData({
      kj_id: options.kj_id,
    })
    t.load_data();

  },

  load_data: function() {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'kj_item',
      kj_id: t.data.kj_id,
    };
    if (time_obj!=null){
      clearInterval(time_obj);
    }
    util.ajax(post_data, function(res) {
      t.setData({
        data: res.data,
        list: res.data.list
      });
      time_obj = setInterval(function() {
        t.time_js();
      }, 1000);
    });
  },

  time_js: function() {
    var t = this;
    var NowTime = new Date();
    var end = new Date(t.data.data.info.end_time);;
    var cha = end.getTime() - NowTime.getTime();

    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (cha > 0) {
      d = Math.floor(cha / 1000 / 60 / 60 / 24);
      h = Math.floor(cha / 1000 / 60 / 60 % 24);
      m = Math.floor(cha / 1000 / 60 % 60);
      s = Math.floor(cha / 1000 % 60);
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
        is_can_sp: 1,
        d: d,
        h: h,
        m: m,
        s: s,
      });
    } else {
      t.setData({
        is_can_sp: 0,
      });
    }


  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  // 控制显示选择弹框
  showSelectPop: function() {
    this.setData({
      showSelect: !this.data.showSelect
    })
  },

  successShow: function() {
    var t= this;
    this.setData({
      successShow: !t.data.successShow
    })
  },

  buy: function(e) {
    var t = this; var d = e.currentTarget.dataset;

    wx.navigateTo({
      url: '/pages/goods/kj/show?goods_id=' + d.goods_id,
    })
    return;
    t.setData({
      current_item: t.data.list[d.index],

    })
    t.setData({
      show_price: t.data.current_item.min_price,
      kj_price: t.data.current_item.min_price - t.data.current_item.total,
      spec_child_id: 0
    })
    t.showSelectPop();

  },

  kan: function() {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'kj_kan',
      kj_id: t.data.data.info.id,
    };
    util.ajax(post_data, function(res) {
    
      t.load_data();
      if (res.data.show_alert == 1) {
        t.setData({
          kan_msg: res.data.kan_msg,
          kan_total: res.data.kan_total,
        })
        t.successShow();
      }
  
    });

  },
  tourl: function() {
    wx.reLaunch({
      url: '/pages/goods/kj/index',
    })
  },

  change_spec: function(e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var spec_child_id = d.spec_child_id;
    t.setData({
      spec_child_id: spec_child_id
    });
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'get_show_price',
      goods_id: t.data.current_item.goods_id,
      spec_child_id: spec_child_id
    };
    util.ajax(post_data, function(res) {
      t.setData({
        show_price: res.data.info.price,
        kj_price: res.data.info.price - t.data.current_item.total,
      });
    });
  },
  change_address_sel: function(e) {
    var t = this;
    t.setData({
      address_id: e.detail.info.id,
      address_type: 0
    });
    var address_id = t.data.address_id;
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'kj_order',
      address_id: t.data.address_id,
      gids: t.data.spec_child_id,
      k_id: t.data.current_item.id,
      goods_id: t.data.current_item.goods_id,
    };
    util.ajax(post_data, function(res) {

      t.setData({
        parameters: res.data.parameters,
        kj_id: res.data.kj_id,
      });
      t.pay_pp();
    });
  },
  xiayibu: function() {
    var t = this;
    if (t.data.spec_child_id == 0 && t.data.current_item.is_spec == 1) {
      util.show_msg('请选择规格');
      return;
    }
    t.setData({
      address_type: 1
    });
    t.selectComponent("#address_com_id").load_list();
  },
  pay_pp: function() {
    var t = this;
    wx.requestPayment({
      'timeStamp': t.data.parameters.timeStamp,
      'nonceStr': t.data.parameters.nonceStr,
      'package': t.data.parameters.package,
      'signType': 'MD5',
      'paySign': t.data.parameters.paySign,
      'success': function(e) {
        wx.showToast({
          title: '付款成功',
          duration: 2000,
          mask: true,
          complete: function() {
            setTimeout(function() {
              wx.redirectTo({
                url: '/pages/goods/kj/item?kj_id=' + t.data.kj_id,
              })

            }, 2000);
          }
        })

      },
      'fail': function(res) {
        util.show_msg('支付取消');
      },
      'complete': function(res) {}
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return util.share();
  }
})