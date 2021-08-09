var app = getApp();
const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex:1,
  },

  swiperChange(e) {
    console.log(e.detail.current)
    var t=this;
    var url=t.data.url;
    t.setData({
      swiperIndex: e.detail.current,
    })
    console.log(t.data.swiperIndex)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var post_data = {
      m: 'mallapi',
      c: 'fenxiao',
      a: 'ewm',
    };
    util.ajax(post_data, function (res) {
      t.setData({
        resData: res.data,
      })
    })
  },

  get_haibao(){
    var t=this;
    var img=t.data.resData.ad[t.data.swiperIndex].img;
    var post_data = {
      m: 'mallapi',
      c: 'fenxiao',
      a: 'create_haibao',
      img:img,
    };
    util.ajax(post_data, function (res) {
      t.setData({
        posterConfig: res.data.posterConfig,
      })

      t.selectComponent("#haibao").onCreatePoster({
        confirm: function (e) {
       
        }
      });
    })

  },


  

  shop_img: function (e) {
    var t = this;
    console.log(e.currentTarget.dataset.img);
    wx.previewImage({
      current: e.currentTarget.dataset.img, 
      urls: [e.currentTarget.dataset.img]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var pid=this.data.resData.uinfo.id;

    return {
      path: "/pages/mall_index/index?pid="+pid,
    }
    // util.share(pid);
  }
})