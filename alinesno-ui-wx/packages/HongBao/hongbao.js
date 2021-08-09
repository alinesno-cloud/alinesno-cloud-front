// com/hongbao/hongbao.js
const util = getApp().include('util');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value:null
    },
    show:{
      type:Boolean,
      value:true
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
    show: function (e) {
      var t = this;
      t.setData({
        show: !t.data.show
      })
    },
    lingqu:function(){
      var t= this;
      util.ajax('/MallApi/user/lingqu', {id:t.data.info.id}, function (res) {
         t.show();
      })
    },
  }
})
