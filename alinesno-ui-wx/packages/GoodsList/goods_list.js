const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

    title: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    },
    show_msg: {
      type: String,
      value: '暂无商品'
    },
    show_type: {
      type: Number,
      value: 1
    },
    show_jg:{
      type: Boolean,
      value: true
    },
    show_user:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cdn:app.globalData.cdn
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})