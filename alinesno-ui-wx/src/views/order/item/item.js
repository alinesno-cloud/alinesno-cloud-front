const u = getApp().include('util');
const util = getApp().include('util');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: res => {
        // console.log('手机信息res'+res.model)
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          that.setData({ buBottom: 68 })
        }
      }
    })
    var pos_data = {
      m: 'mallapi',
      c: 'order',
      a: 'item',
      orderid: options.orderid,
    };
    var t = this;
    u.ajax(pos_data, function (data) {
      t.setData({
        data: data.data
      })
    })
  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },

  comment: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/comment/comment?orderid=' + orderid,
    })
  },
  feed:function(e){
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/feed/feed?orderid=' + orderid,
    })
  },
  copyText: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },


  pay: function (e) {
    var t = this;
    var ordernum = e.currentTarget.dataset.ordernum;
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'pay',
      ordernum: ordernum,
    };
    u.ajax(post_data, function (data) {
      var pa = data.data.parameters;
      wx.requestPayment({
        'timeStamp': pa.timeStamp,
        'nonceStr': pa.nonceStr,
        'package': pa.package,
        'signType': pa.signType,
        'paySign': pa.paySign,
        'success': function (e) {
          wx.showToast({
            title: '付款成功',
            duration: 2000,
            mask: true,
            complete: function () {
              setTimeout(function () {
                t.setData({
                  page: 1,
                  is_load: 1,
                  list: []
                });
                wx.redirectTo({
                  url: '/pages/order/index/index',
                })
              }, 2000);
            }
          })

        },
        'fail': function (res) {
          u.show_msg('支付取消');
        },
        'complete': function (res) { }
      })

    });
  },
  express: function (e) {
    var orderid = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: '/pages/order/express/express?orderid=' + orderid,
    })
  },
  finish: function (e) {
    var t = this;
    var orderid = e.currentTarget.dataset.orderid;
    wx.showModal({
      title: '确定订单完成吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'finish',
            orderid: orderid,
          };
          u.ajax(post_data, function (data) {
            t.setData({
              page: 1,
              is_load: 1,
              list: []
            });
            wx.redirectTo({
              url: '/pages/order/index/index',
            })
          });
        }

      }
    })
  },
  close: function (e) {
    var t = this;
    var orderid = e.currentTarget.dataset.orderid;
    wx.showModal({
      title: '确定取消订单吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'close',
            orderid: orderid,
          };
          u.ajax(post_data, function (data) {
            t.setData({
              page: 1,
              is_load: 1,
              list: []
            });
            wx.redirectTo({
              url: '/pages/order/index/index',
            })
          });
        }

      }
    })
  },


})