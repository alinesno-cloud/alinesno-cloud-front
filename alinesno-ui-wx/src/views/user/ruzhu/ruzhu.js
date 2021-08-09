const util = getApp().include('util');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info_type: 0,
    info_type_name: '请选择',
    info: {},
    showProjects: false,
    radioState: false,
    type: 2,
    img:[]
  },
  radioState: function () {
    var t = this;
    t.setData({
      radioState: !t.data.radioState
    });
  },
  showProjects: function (e) {
    var t = this;
    t.setData({
      showProjects: !t.data.showProjects
    });
  },
  change_type2: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.setData({
      info_type: d.id,
      info_type_name: d.name
    })
  },
  change_type: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.setData({
      type: d.type
    })
  },
  upload_img: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var name = d.name;
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
        wx.uploadFile({
          url: app.globalData.url + '/h/ajax/upload_images',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: post_data,
          success: function (res) {
            console.log(res);
            var data = JSON.parse(res.data);
            wx.hideLoading();
            if (data.status == '0') {
              util.show_msg('上传失败');
              return false;
            } else {
              t.data.img.push(data.data.url);
              t.setData({
                img: t.data.img
              })


            }
          }
        })
      }
    })
  },
  sub: function (e) {
    var t = this;
    if(!t.data.radioState){
      util.show_msg('请阅读协议');
      return false;
    }
    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'ruzhu',
      flag: 'sub',
      img:t.data.img,
      type:t.data.info_type
    };
    var v = e.detail.value;
    post_data = Object.assign(post_data, v);
    util.ajax(post_data, function (res) {
      wx.reLaunch({
        url: '/pages/user/index/index',
      })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var t = this;

    var post_data = {
      m: 'mallapi',
      c: 'user',
      a: 'ruzhu',
      flag: 'get',
    };
    util.ajax(post_data, function (res) {
      t.setData({
        data: res.data
      })

    });


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})