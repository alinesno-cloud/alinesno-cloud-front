const util = getApp().include('util');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 1,
    cdn:app.globalData.cdn,
  },
  // banner切换
  bannerSlide: function (e) {
    this.setData({
      currentIndex: e.detail.current + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    util.ajax("/mallapi/pt/item", {
      id: options.id
    }, function (res) {
      var pt_list=res.data.pt_list;
      t.setData({
        data: res.data,
        pt_list:pt_list,
      });
      for(var i in pt_list){
        t.countDown(i);

      }

    });
  },



  countDown: function (i) {
    var t = this;
    var pt_list=t.data.pt_list;
    if(t.data.is_unload){
      return false;
    }
    var end_time=pt_list[i].end_time;
    var end_time = end_time.replace(/-/g, "/");
    var NowTime = new Date();
    var e = new Date(end_time);
    var t2 = e.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (t2 >= 0) {
      d = Math.floor(t2 / 1000 / 60 / 60 / 24);
      h = Math.floor(t2 / 1000 / 60 / 60 % 24);
      m = Math.floor(t2 / 1000 / 60 % 60);
      s = Math.floor(t2 / 1000 % 60);

      if (h < 10) {
        h = '0' + h.toString();
      }
      if (m < 10) {
        m = '0' + m.toString();
      }
      if (s < 10) {
        s = '0' + s.toString();
      }
      pt_list[i].djs=h+':'+m+':'+s,
      t.setData({
        pt_list:pt_list,
      });
      setTimeout(function (){
        t.countDown(i);
      },1000)

    }
    t.setData({
      is_down: 0
    });
  },


  show_goods_sel: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.selectComponent("#goods").get_data({
      goods_id: t.data.data.info.goods_id,
      pt_id:d.flag=='pt'?t.data.data.ptinfo.id:'',
      buy_type:d.flag,
      flag: d.flag,
      p_ordernum:d.p_ordernum,
      confirm: function (res) {
        t.setData({
          show_name:res.show_name,
          cart_num:res.cart_num,
        })

      },
      close: function (res) {
        t.setData({
          show_name:res.show_name,
        })

      }
    });
  },



  onUnload() {
    this.setData({
      is_unload:true,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})