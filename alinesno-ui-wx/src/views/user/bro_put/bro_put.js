const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
info:{}
  },
  change_field: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    t.data.info[`${field}`] = e.detail.value;
    t.setData({
      info: t.data.info
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'user',
      a: 'bro_take',
      flag: 'get'
    };

    util.ajax(pos_data, function (data) {
      t.setData({
        data: data.data
      });

    });
  },
  change_money:function(e){
    var t= this;
    t.setData({
      money:e.detail.value
    })
  },
  all: function (e) {
    var t = this;
    t.setData({
      money: t.data.data.finfo.bro
    });
  },

  sub: function (e) {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'user',
      a: 'bro_take',
      flag: 'sub',
      money:t.data.money
    };

    pos_data = Object.assign(pos_data, t.data.info);
    util.ajax(pos_data, function (data) {
      t.data.data.finfo = data.data.finfo;
      t.setData({
        money: '',
        data: t.data.data
      });
      util.alert({
        title: data.data.title,
        content: data.data.content
      });
    });
  },

})