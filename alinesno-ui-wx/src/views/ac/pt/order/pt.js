const util = require('../../../../utils/util.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_load: 1,
    page: 1,
    category_id: '',
    prepay_id: '',
    flag: '',
    cdn:app.globalData.cdn,
    arr: [{
      flag: '',
      name: '全部'
    },
    {
      flag: '0',
      name: '进行中'
    },
    {
      flag: '2',
      name: '已完成'
    },
    {
      flag: '3',
      name: '已取消'
    }
    ],
    showPopup1: false,
    showPopup2: false,
    is_dai: 0,
    ordernum: ''
  },

  showPopup1: function () {
    var t = this;
    t.setData({
      showPopup1: !t.data.showPopup1
    });

  },

  showPopup2: function () {
    var t = this;
    t.setData({
      showPopup2: !t.data.showPopup2
    });

  },
  close_pop:function(){
    var t= this;
    t.setData({
      showPopup2:false,
      showPopup1:false,
    })
  },

  change_flag: function (e) {
    var t = this;
    var flag = e.currentTarget.dataset.flag;
    t.setData({
      flag: flag
    });
    t.search();
  },
  search: function () {
    var t = this;
    t.setData({
      list: [],
      is_load: 1,
      page: 1
    });
    t.load_data();
  },

  onLoad: function (options) {
    var t = this;
    if (util.isNotEmpty(options.flag)) {
      t.setData({
        flag: options.flag
      });
    }
    if (util.isNotEmpty(options.ordernum)) {
      t.setData({
        ordernum: options.ordernum
      });
    }
    t.load_data();
  },

  load_data: function () {
    var t = this;
    if (t.data.is_load == 0) {
     
      return;
    } 
    var post_data = {
      m: 'mallapi',
      c: 'pt',
      a: 'pt_order',
      page: t.data.page,
      flag: t.data.flag
    };
    if (t.data.is_dai == 0 && t.data.ordernum) {
      post_data.ordernum = t.data.ordernum;
      t.setData({
        is_dai: 1
      });
    }
    util.ajax(post_data, function (res) {
      if (t.data.page == 1) {
        t.setData({
          data: res.data,
        });
      }
      if (util.isNotEmpty(res.data.pt_info)) {
        if (res.data.pt_info.type == 1) {
          t.setData({
            showPopup1: true,
          });
        }
        if (res.data.pt_info.type == 2) {
          t.setData({
            showPopup2: true,
          });
        }
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
      console.log(t.data.list);

    });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var t = this;
    t.load_data();
  },

  thx: function (e) {
    var d = e.currentTarget.dataset;
    wx.showModal({
      title: "取货码：" + d.hx,
      content: '',
      showCancel: false,
      success(res) {

      }
    })
  },

  cacel: function (e) {
    var d = e.currentTarget.dataset;
    var t = this;
    wx.showModal({
      title: '提示',
      content: '确定取消吗？',
      success(res) {
        if (res.confirm) {
          var post_data = {
            m: 'mallapi',
            c: 'order',
            a: 'cacel',
            orderid: d.orderid
          };
          util.ajax(post_data, function (res) {
            t.search();
          });
        }
      }
    })
  },
  
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },
  onShareAppMessage: function () {
    var t = this;
    if (!util.isNotEmpty(t.data.data.pt_info)) {
      return false;
    }
    var pt_info = t.data.data.pt_info;
    var url = "/pages/ac/pt/goods?id=" + pt_info.pt_id + "&pid=" + t.data.data.uinfo.id;
    var json = {
      title: "拼团价￥" + pt_info.pt_price + " " + pt_info.goods_name,
      imageUrl: pt_info.thumb,
      path: url
    };
    console.log(url);
    return json;
  }
})