const util = getApp().include('util');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tel: {
      type: String,
      value: '',
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
    call_tel: function (e) {
      var t = this;
      var tel = e.currentTarget.dataset.tel;
      if (util.isNotEmpty(tel)) {
        wx.makePhoneCall({
          phoneNumber: tel,
        })
      }

    },
  }
})