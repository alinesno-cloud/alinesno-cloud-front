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
    spec_child_id: 0,
    show_price: 0,
    address_type: 0,
    kj_id: 0,

    audioPlay: false,

  },
  stopScroll: function () {

  },
  // 控制显示选择弹框
  showSelectPop: function () {
    this.setData({
      showSelect: !this.data.showSelect
    })
  },

  change_spec: function (e) {
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
    util.ajax(post_data, function (res) {
      t.setData({
        show_price: res.data.info.price,
        kj_price: res.data.info.price - t.data.current_item.total,
      });
    });
  },
  change_address_sel: function (e) {
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
    util.ajax(post_data, function (res) {

      t.setData({
        parameters: res.data.parameters,
        kj_id: res.data.kj_id,
      });
      t.pay_pp();
    });
  },
  xiayibu: function () {
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

  onLoad: function (options) {
    var t = this;
    var isPhone = false;
    wx.getSystemInfo({
      success: res => {
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          isPhone = true
        }
      }
    })
    if (isPhone == true) {
      t.setData({
        pbottom: 'padding-bottom:70rpx;background:#fff;'
      });
    }
    t.audioCtx = wx.createAudioContext('myAudio')

    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'kj_show',
      goods_id: options.goods_id
    };
    util.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      })
      // t.audioPlay();
    })
  },
  taf_nav: function (e) {
    var d = e.currentTarget.dataset;
    var lat = parseFloat(d.lat);
    var lng = parseFloat(d.lng);
    if (lat > 0 && lng > 0) {
      var a = {
        latitude: lat,
        longitude: lng,
        name: d.name,
        address: d.address,
        scale: 28
      };
      console.log(a);
      wx.openLocation(a);
    }

  },
  buy: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var info = t.data.data.info;
    var post_data = {
      m: 'mallapi',
      c: 'kj',
      a: 'kj_order',
      k_id: info.id,
      goods_id: info.goods_id,
    };
    util.ajax(post_data, function (res) {

      wx.redirectTo({
        url: '/pages/goods/kj/item?kj_id=' + res.data.kj_id,
      })
    });

  },
  buy2: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.setData({
      current_item: t.data.data.info,
    })
    t.setData({
      show_price: t.data.current_item.min_price,
      kj_price: t.data.current_item.min_price - t.data.current_item.total,
      spec_child_id: 0
    })
    t.showSelectPop();

  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },
  audioPlay: function () {
    this.setData({
      audioPlay: !this.data.audioPlay
    })
    if (this.data.audioPlay) {
      this.audioCtx.play()
    } else {
      this.audioCtx.pause()
    }

  },
  audioPause: function () {
    this.audioCtx.pause()
  },

  tohome: function (e) {
    var t = this;
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return util.share();

  }
})