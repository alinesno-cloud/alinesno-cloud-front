const util = getApp().include('util');
import Poster from '../miniprogram_dist/poster/poster';
var defaultOptions = {
  confirm: function (res) {
  }
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hb: {
      type: Boolean,
      value: false,

    },
    is_mall: {
      type: Boolean,
      value: false,

    },
    posterConfig: {
      type: Object,
      value: null,

    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCreatePoster() {
      var t=this;
      var inif = arguments[0] ? arguments[0] : null;
      defaultOptions.confirm = function (e) {
        "function" == typeof inif.confirm && inif.confirm(e);
      }
     if(t.data.posterConfig){
      Poster.create(true, this); 
     }else{
       util.msg('生成海报错误!');
     }
    },
    onPosterSuccess(e) {
      var t=this;
      defaultOptions.confirm(e);
      const { detail } = e;
      t.setData({
        hb:true,
        hb_url:detail,
      })
      // wx.previewImage({
      //       current: detail,
      //       urls: [detail]
      //   })
    },
    close_hb:function(){
      this.setData({
        hb:false,
      })
    },
  
    show_img: function (e) {
      wx.previewImage({
        current: e.currentTarget.dataset.img,
        urls: [e.currentTarget.dataset.img] // 需要预览的图片http链接列表
      })
    },
  
  
    saveimg: function (e) {
      var imgSrc = e.currentTarget.dataset.img;
      wx.saveImageToPhotosAlbum({
        filePath: imgSrc,
        success: function (data) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail: function (err) {
          if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
            wx.openSetting({
              success(settingdata) {
                if (settingdata.authSetting['scope.writePhotosAlbum']) {
                  console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                } else {
                  console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                }
              }
            })
          }
        },
        complete(res) {
          console.log(res);
        }
      })
    },
  }
})
