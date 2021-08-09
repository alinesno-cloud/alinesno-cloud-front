const util = getApp().include('util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 1,
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
    util.ajax("/mallapi/ms/item", {
      id: options.id
    }, function (res) {
      t.setData({
        data: res.data
      });

      t.countDown();

    });
  },


  show_goods_sel: function (e) {
    var t = this;
    var d = e.currentTarget.dataset;
    t.selectComponent("#goods").get_data({
      goods_id: t.data.data.info.goods_id,
      ms_id:t.data.data.minfo.id,
      buy_type:'ms',
      flag: 'ms',
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


  countDown: function () {
    var t = this;
    if(t.data.is_unload){
      return false;
    }
    console.log(t.data.cate_info);
    var NowTime = new Date();
    var e = new Date(t.data.data.cate_info.end_time);
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
      t.setData({
        h: h,
        m: m,
        s: s
      });

      setTimeout(function (){
        t.countDown();
      },1000)

    }
    t.setData({
      is_down: 0
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