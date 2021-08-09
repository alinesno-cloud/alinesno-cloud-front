const util = getApp().include('util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0
  },

  change_cate:function(e){
    var t= this;
    var d = e.currentTarget.dataset;
    t.setData({
      index:d.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var post_data = {
     
    };
    if(util.isNotEmpty(options.category_id)){
      post_data.category_id = options.category_id;
    }
    util.ajax('/mallapi/cate/index',post_data, function (res) {
      t.setData({
        data: res.data
      });
      if(util.isNotEmpty(options.category_id)){
        for(var i in res.data.list){
          var item = res.data.list[i];
          if(options.category_id == item.category_id){
            t.setData({
              index:i
            })
          }
        }
      }

    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})