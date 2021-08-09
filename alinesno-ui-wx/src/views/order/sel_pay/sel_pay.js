//index.js
//获取应用实例
const app = getApp()
const util = getApp().include('util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX, //是否是iphoneX
    buBottom: app.globalData.buBottom,
    pay_type: 0,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'order',
      a: 'sel_pay',
      ordernum: options.ordernum,
    };
    util.ajax(pos_data, function (data) {

      t.setData({
        data: data.data
      });
      if (util.isNotEmpty(data.data.pay_type)) {
        t.setData({
          pay_type: data.data.pay_type
        });
      }
      t.countDown();
    });
  },

  radioChange(e) {
    this.setData({
      pay_type: e.detail.value,
    })
  },

  countDown: function () {
    var t = this;
    t.setData({
      timer: setInterval(function () {
        var NowTime = new Date();
        var time = t.data.data.info.auto_close_time;
        time = time.replace(/-/g, "/");
        var e = new Date(time);

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
        }
        if (s == 0 && m == 0 && h == 0 && d == 0) {
          t.setData({
            is_down: 0
          });
          clearInterval(t.data.timer);
        } else {
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
        }
      }, 1000)
    })
  },

  pay_order: function (e) {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'Order',
      a: 'pay_union',
      ordernum: t.data.data.info.ordernum,
      pay_type: t.data.pay_type,
    };
    util.ajax(pos_data, function (data) {
      if (data.data.is_pay == 1) {



        wx.reLaunch({
          url: '/pages/order/index/index?ordernum=' + data.data.ordernum,
        })
      }
    });
  },

})