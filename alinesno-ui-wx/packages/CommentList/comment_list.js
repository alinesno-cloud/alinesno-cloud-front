// com/comment_list/comment_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
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
    img_re: function (e) {
      var d = e.currentTarget.dataset;
      var t= this;
      wx.previewImage({
        current: d.src,
        urls: d.list
  
      });
    },
  
  }
})