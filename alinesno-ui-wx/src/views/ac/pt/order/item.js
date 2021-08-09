const util = require('../../../../utils/util.js');
const app = getApp()

Page({

  data: {


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

  onLoad: function (options) {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'item_ordernum',
      ordernum: options.ordernum
    };
    t.setData({
      buBottom: app.globalData.buBottom
    });
    util.ajax(post_data, function (res) {

      t.setData({
        data: res.data
      });
    });
  },


})