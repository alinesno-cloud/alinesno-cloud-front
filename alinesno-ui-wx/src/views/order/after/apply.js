// pages/user/afterSales/apply/index.js
const app = getApp()
const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cdn:app.globalData.cdn,
    index:0,    
    array:['未收货','已收货'],
    index2:null,
    array2:[],
    array2_id:[],
    selectStr:'',
    selectStr2:'',
    imgWidth:0,
    orderid:0,
    goodsid:0,
    is_shou:0,
    cause:0,
    content:'',
    images:[],
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.getData()
  },
  getData:function(flag){
    let _this = this
    util.ajax('/mallapi/AfterSale/apply_after_get', {
      id:_this.data.id
    }, function (res) {
      if(res.status){
        _this.setData({
          data: res.data
        })
        // let obj = []
        // let objId = []
        // res.data.ReasonLists.forEach(item => {
        //   obj.push(item)
        //   objId.push(item.id)
        // })
        // _this.setData({
        //   data: res.data,
        //   array2:obj,
        //   array2_id:objId
        // })
        // if(flag == 'get'){
        //   let obj = []
        //   let objId = []
        //   res.data.cause.forEach(item => {
        //     obj.push(item.name)
        //     objId.push(item.id)
        //   })
        //   _this.setData({
        //     data: res.data,
        //     array2:obj,
        //     array2_id:objId
        //   })
        // }else{
        //   wx.reLaunch({
        //     url: '/pages/user/mine',
        //   })
        // }
      }else{
        util.show_msg(res.info)        
      }
      
      
      
    })
  },
  textInput:function(e){
    this.setData({
      content:e.detail.value
    })
  },
  touchToAddImage: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    util.upload_img(function (data) {
      if (!util.isNotEmpty(t.data.images)) {
        t.data.images = [];
      }
      t.data.images.push(data.url);
      t.setData({
        images: t.data.images
      });
    }, 5);
  },
  touchToDelete: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    var field = d.field;
    wx.showModal({
      title: '系统',
      content: '确定删除吗？',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          t.data.images.splice(d.index, 1);
          t.setData({
            images: t.data.images
          });
        }
      }
    });
  },
  sub:function(){
    let _this = this
    util.ajax('/mallapi/AfterSale/apply_after_sub', {
      order_goods_id:_this.data.id,
      refund_reason:_this.data.selectStr2,
      refund_remark:_this.data.content,
      refund_image:_this.data.images
    }, function (res) {
        wx.redirectTo({
          url: './index',
        })
      
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
    let width = wx.getSystemInfoSync().windowWidth
    let imgWidth = (width - 24 - 4*10)/3
    this.setData({
      imgWidth:imgWidth
    })
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
    return util.share()
  },
  bindPickerChange:function(e){
    let _this = this
    let index = e.detail.value
    console.log(this.data.array[index])
    _this.setData({
      index:index,
      is_shou:index,
      selectStr:_this.data.array[index],
    })
  },
  bindPickerChange2:function(e){
    let index2 = e.detail.value
    this.setData({
      index2:index2,
      cause:this.data.array2_id[index2],
      selectStr2:this.data.data.ReasonLists[index2],
    })
    console.log(this.data.selectStr2)
  }
})