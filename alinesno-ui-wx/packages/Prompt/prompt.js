var defaultOptions = {


  title: '标题',
  placeholder: '请输入',
  type: 'text',
  v: '',
  confirm: function (res) {

  },
  cancel: function (res) {



  }


}

// components/prompt/prompt.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },


  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    v: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHidden: true,
    type: 'text',
    v: '',
    list_index: 0,
    list_val: 0,
  },

  methods: {
    change_list: function (e) {
      var t = this;
      var v = e.detail.value;
      console.log(v);
      t.setData({
        list_index: v,
        list_val: t.data.list[v].id
      });
      console.log(t.data.list_index);
    },
    hidePrompt: function () {
      this.setData({
        isHidden: true
      })
    },
    showPrompt(inif) {
      var t = this;
      var obj = {};
      obj.title = inif.title || defaultOptions.title
      obj.placeholder = inif.placeholder || defaultOptions.placeholder
      obj.type = inif.type || defaultOptions.type
      obj.v = inif.v || defaultOptions.v
      // obj.title =   inif.title || defaultOptions.title

      defaultOptions.confirm = function () {
          t.setData({
            isHidden: true
          })
          "function" == typeof inif.confirm && inif.confirm(t.data.v, t.data.list_val);
        },

        defaultOptions.cancel = function () {
          t.setData({
            isHidden: true
          })
          "function" == typeof inif.cancel && inif.cancel();

        },


        t.setData({
          title: obj.title,
          placeholder: obj.placeholder,
          type: obj.type,
          v: obj.v,
          isHidden: false
        })

    },

    setInput(e) {
      var t = this;
      t.setData({
        v:e.detail.value
      });

    },

    cancel() {
      defaultOptions.cancel();
    },

    confirm() {
      defaultOptions.confirm();
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _cancel() {
      //触发cancel事件，即在外部，在组件上绑定cancel事件即可，bind:cancel，像绑定tap一样
      this.triggerEvent("cancel")
    },
    _confirm() {
      this.triggerEvent("confirm");
    },
    _input(e) {
      //将参数传出去，这样在getInput函数中可以通过e去获得必要的参数
      this.triggerEvent("getInput", e.detail);
    }
  }
})