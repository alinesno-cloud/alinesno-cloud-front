const util = require('../../utils/util.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,

    },
    html: {
      type: String,
      value: '',

    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  created:function(){
  },
  ready:function(){
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
   
    close:function(){
      this.setData({
        show:false,
      })
    },
    sub:function(){
      this.setData({
        show:true,
      })
      var myEventDetail = {
       
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('change_sub', myEventDetail, myEventOption);
    },

    
  }
})
