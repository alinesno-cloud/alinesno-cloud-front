const util = getApp().include('util');
var app = getApp();

Page({
  data: {
    content: '',
    sel_type: '',
    images: [],
    orderid: '',
    info: {},
    is_chai:0,
  },
  is_chai:function(e){
    var t= this;
    t.setData({
      is_chai:!t.data.is_chai
    })
  },
  change_content: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  sub: function () {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'feed',
      flag: 'sub',
      type: t.data.sel_type,
      orderid: t.data.orderid,
      is_chai:t.data.is_chai
    };
    post_data = Object.assign(post_data, t.data.info);
    util.ajax(post_data, function (res) {

      wx.redirectTo({
        url: '/pages/order/index/index',
      });

    });
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

  
  sel_type_btn: function (e) {
    var name = e.currentTarget.dataset.name;
    var t = this;
    t.setData({
      sel_type: name
    });
  },
  onLoad: function (option) {
    var t = this;
    t.setData({
      orderid: option.orderid
    })
    var post_data = {
      m: 'mallapi',
      c: 'order',
      a: 'feed',
      flag: 'get',
      orderid: t.data.orderid
    };
    util.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      });
    }, null);
  },
  upload_imgs: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    util.upload_img(function (data) {
      if (!util.isNotEmpty(t.data.info[`${field}`])) {
        t.data.info[`${field}`] = [];
      }
      t.data.info[`${field}`].push(data.url);
      t.setData({
        info: t.data.info
      });
    }, 9);
  },
  del_img: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    wx.showModal({
      title: '系统',
      content: '确定删除吗？',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          t.data.info[`${field}`].splice(d.index, 1);
          t.setData({
            info: t.data.info
          });
        }
      }
    });
  },
})