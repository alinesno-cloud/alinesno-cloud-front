const util = getApp().include('util');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cdn:app.globalData.cdn,
    isIphoneX:app.globalData.isIphoneX,  //是否是iphoneX
    statusBarHeight: app.globalData.statusBarHeight, //状态栏高度

    showclass: false,
    price_sort:'asc_price',

  },

  

  //分类筛选
  showscreen(){
    var status = this.data.showclass;
    this.setData({
      showclass:!status
    })

  },

  set_type:function(e){
    var t=this;
    var sort= e.currentTarget.dataset.sort;
    console.log(sort);
    if(sort=='asc_price'){
      t.setData({
        price_sort:'desc_price',
      })
    }
    if(sort=='desc_price'){
      t.setData({
        price_sort:'asc_price',
      })
    }
    this.get_index(sort);


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_index();
  },

  
get_index:function(type=""){
  var t = this;
    var pos_data = {
      m: 'mallapi',
      c: 'pt',
      a: 'index',
    };
    if(type){
      pos_data.sort=type;
    }
    util.ajax(pos_data, function (data) {
      t.setData({
        data: data.data
      });
    });
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

  }
})