// pages/order/order.js
const app = getApp()
const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    static:app.globalData.static,
    tabList:['可申请','已申请'],
    tabIndex:0,
    oTypeIndex:0,
    searchShow:false,
    focus:false,
    page:1,
    flag:'',
    otype:1,
    orderList:[],
    showMore:true,
    ordernum:'',
    navShow:false,
    
    show_ewm:false,
    ewm_url:'',
    ewm_msg:'',
    url:'/mallapi/AfterSale/index'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  onShareAppMessage:function(){
    return util.share()
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
    this.fetchData()
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
    if(this.data.navShow){
      wx.switchTab({
        url: '../../index/index',
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page:1
    })
    this.fetchData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    if(that.data.showMore) {
      that.setData({
        page:that.data.page + 1
      })
      that.fetchData()
    }
  },
  touchToTab:function(e){
    
    let index = e.currentTarget.dataset.index
    let url
    if(index == this.data.tabIndex){
      return false
    }else{
      if(index == 0){
        url = '/mallapi/AfterSale/index'
      }
      if(index == 1){
        url = '/mallapi/AfterSale/index_handing'
      }
      let flag = e.currentTarget.dataset.flag
      this.setData({
        tabIndex:index,
        flag:flag,
        url:url,
        page:1
      })
      this.fetchData()
    }
    
    
  },
  getFlag:function(index) {
    let flag = ''
    if(index == 1) {
      flag = "wait_pay"
    } else if (index == 2) {
      flag = "wait_get"
    } else if (index == 3) {
      flag = "wait_ziti"
    } else if (index == 4) {
      flag = "finish"
    }else if (index == 5) {
      flag = "feedback"
    }
    this.setData({
      flag:flag,
      page:1
    })
    this.fetchData()
  },
  touchDetail:function(e){
    let num = e.currentTarget.dataset.num
    wx.navigateTo({
      url: '/pages/order/item/item?ordernum=' + num,
    })
  },
  toGoods:function(e){
    let gid = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/goods/item/item?goods_id=' + gid,
    })
  },
  item:function(e){
    wx.navigateTo({
      url: './detail?id='+ e.currentTarget.dataset.id,
    })
  },
  apply:function(e){
    let gid = e.currentTarget.dataset.gid
    wx.navigateTo({
      url: './apply?id=' + gid,
    })
  },
  cacel:function(e){
    let _this = this
    wx.showModal({
      title: '确定取消申请？',
      content:'',
      confirmText:'确定',
      success:function(res){
        if(res.confirm) {
          util.ajax('/mallapi/AfterSale/cacel', {
            id: e.currentTarget.dataset.id,
          }, function (res) {
            if(res.status){
              _this.setData({
                page:1
              })
              _this.fetchData()
            }else{
              util.show_msg(res.info)
            }
          })  
        }
      }
    })
      
  },
  fetchData:function(){
    let that = this
    let param = {'page':that.data.page}
    // param['flag'] = that.data.flag
    util.ajax(that.data.url,param,function(res){
      wx.stopPullDownRefresh()
      if(res.status == 1) {
        let list = res.data.list
        if(that.data.page == 1) {
          that.data.orderList = []
        }
        that.data.orderList = that.data.orderList.concat(list)
        let showMore = list.length > 0 ? true : false
        that.setData({
          orderList:that.data.orderList,
          showMore:showMore
        })
      }
    })
  },
})