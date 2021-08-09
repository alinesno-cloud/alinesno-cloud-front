const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buBottom: getApp().globalData.buBottom,
    addressShow: false, // 控制地址弹框显示
    // 规格弹框显示
    list: [],
    is_load: 1,
    page: 1,
    showSelect: false,
    current_item: null,
    kj_price: 0,
    address_type: 0,
    kj_id: 0,
    goods_show: false,
    goods_id: '',
    //下单
    spec_child_id: '',
    ordernum: '',

  },
  stopScroll: function () {

  },
  // 控制显示选择弹框
  showSelectPop: function () {
    this.setData({
      showSelect: !this.data.showSelect
    })
  },
  buy: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;

    wx.navigateTo({
      url: '/pages/goods/kj/show?goods_id=' + d.goods_id,
    })

  },

  change_goods_show: function (e) {
    var t = this;
    t.setData({
      goods_show: !t.data.goods_show
    });
  },
  sel_goods: function (e) {
    var t = this;
    var d = e.detail;
    if (d.num != 1) {
      util.show_msg("数量只能为1");
    }
    t.setData({
      spec_child_id: d.spec_child_id,
      goods_id: d.goods_id,
    })
    t.change_goods_show();
    t.xiayibu();
  },
  change_address_sel: function (e) {
    var t = this;
    var info = e.detail.info;
    t.setData({
      address_id: info.id,
      address_type: 0
    });
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'create_order',
      address_id: t.data.address_id,
      gids: t.data.spec_child_id,
      kj_id: t.data.kj_id,
      goods_id: t.data.goods_id,
    };
    util.ajax(post_data, function (res) {
      
      if (res.data.is_pay == 1) {
        wx.redirectTo({
          url: '/pages/order/index/index',
        });
      } else {
        t.setData({
          parameters: res.data.parameters,
          ordernum: res.data.ordernum
        });
        t.pay_pp();
      }

    });
  },
  toitem: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    if (d.item.status == 2) {
      if(util.isNotEmpty(t.data.ordernum)){
        t.pay_pp();
      }else{
        t.setData({
          goods_show: true,
          goods_id: d.item.goods_id,
          kj_id: d.item.id
        });
        t.selectComponent("#goods").load_info();
  
      }
     
    } else {
      wx.navigateTo({
        url: '/pages/goods/kj/item?kj_id=' + d.item.id,
      })
    }

  },
  xiayibu: function () {
    var t = this;

    t.setData({
      address_type: 1
    });
    t.selectComponent("#address_com_id").load_list();
  },

  onLoad: function (options) {
    var t = this;
    t.load_data();
  },
  pay_pp: function () {
    var t = this;
    wx.requestPayment({
      'timeStamp': t.data.parameters.timeStamp,
      'nonceStr': t.data.parameters.nonceStr,
      'package': t.data.parameters.package,
      'signType':  t.data.parameters.signType,
      'paySign': t.data.parameters.paySign,
      'success': function (e) {
        wx.showToast({
          title: '付款成功',
          duration: 2000,
          mask: true,
          complete: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '/pages/order/index/index',
              })

            }, 2000);
          }
        })

      },
      'fail': function (res) {
        util.show_msg('支付取消');
      },
      'complete': function (res) {}
    })
  },
  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
      return;
    }
    var post_data = {
      m: 'comapi',
      c: 'kanjia',
      a: 'index',
      page: t.data.page
    };
    util.ajax(post_data, function (res) {
      if (t.data.page == 1) {
        t.setData({
          data: res.data
        });
      }
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