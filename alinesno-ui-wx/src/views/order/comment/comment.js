const util = getApp().include('util');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    is_anonymous: 1,
  },
  c_is_anonymous: function (e) {
    var t = this;
    t.setData({
      is_anonymous: !t.data.is_anonymous
    })
  },

  upload_img: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '加载中',
        });
        var tempFilePaths = res.tempFilePaths
        var post_data = [];
        post_data.token = wx.getStorageSync('token');
        post_data.key = app.globalData.key;
        post_data.m = 'H';
        post_data.c = 'ajax';
        post_data.a = 'upload_images';
        wx.uploadFile({
          url: app.globalData.url + '/index.php?m=' + post_data.m + '&c=' + post_data.c + '&a=' + post_data.a + '&token=' + post_data.token,
          filePath: tempFilePaths[0],
          name: 'file',
          formData: post_data,
          success: function (res) {
            var data = JSON.parse(res.data);
            wx.hideLoading();
            if (data.status == '0') {
              wx.showToast({
                title: '上传失败',
                image: '../../images/info.png',
                duration: 2000
              });
              return false;
            } else {
              t.data.list[d.i].images.push(data.data.url);
              t.setData({
                list: t.data.list
              });
            }
          }
        })
      }
    })
  },

  change_star: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.data.list[d.i].star = d.star;
    t.setData({
      list: t.data.list
    });
  },

  change_message: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.data.list[d.i].content = e.detail.value;
    t.setData({
      list: t.data.list
    });
  },
  del_img: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;

    var l = t.data.list[d.i].images;
    t.data.list[d.i].images.splice(d.index, 1);

    t.setData({
      list: t.data.list
    })


  },
  sub: function (e) {
    var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'order',
      a: 'comment',
      is_anonymous: t.data.is_anonymous,
      orderid: t.data.data.info.orderid,
      list: t.data.list,


    };
    util.ajax(pos_data, function (data) {
      wx.redirectTo({
        url: '/pages/order/index/index',
      })
    });

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
          that.setData({
            buBottom: 68
          })
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
    util.ajax(pos_data, function (data) {
      t.setData({
        data: data.data
      })
      var temp = [];
      for (var i in data.data.goods_list) {
        temp[i] = {
          'goods_id': data.data.goods_list[i].goods_id,
          'star': 5,
          'content': '',
          'images': []
        };

      }
      t.setData({
        list: temp
      });

    })
  },




})