const util = getApp().include('util');
const wcache = require('../../utils/wcache.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {

    open_search: {
      type: Boolean,
      value: false,
    },

    name: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready: function () {
    var t = this;

    var post_data = {
      m: 'mallapi',
      c: 'MallSearchApi',
      a: 'index',
      goods_id: t.data.goods_id
    };
    util.ajax(post_data, function (data) {
      t.setData({
        data: data.data
      })
    });

    var user_search = wcache.get("user_search");
    t.setData({
      user_search: user_search
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    sub: function () {
      var t = this;
      if (util.isNotEmpty(t.data.name)) {
        var user_search = wcache.get("user_search");
        if (!util.isNotEmpty(user_search)) {
          user_search = [];
        }
        for (var i = 0; i < user_search.length; i++) {
          if (user_search[i] == t.data.name) {
            user_search.splice(i, 1);
          }
        }
        user_search.unshift(t.data.name);
        wcache.put("user_search", user_search,3600*24);
        t.setData({
          user_search: user_search
        });
        wx.navigateTo({
          url: '/pages/goods/index/index?name='+t.data.name,
        })
      }
    },
    clear:function(){
      var t= this;
      wcache.put("user_search", []);
      t.setData({
        user_search:[]
      })

    },
    change_name: function (e) {
      var t = this;
      t.setData({
        name: e.detail.value
      });
    },
    open_search: function (e) {
      var t = this;
      t.setData({
        open_search: !t.data.open_search
      });

      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('change_open_search', t.data.open_search, myEventOption);
    },

  }
})