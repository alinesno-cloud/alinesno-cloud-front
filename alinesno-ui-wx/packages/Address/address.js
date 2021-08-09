const util = getApp().include('util');


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sel_id: {
      type: Number,
      value: 0,
    },
    type: {
      type: Number,
      value: 0,
    },

    province_index: {
      type: Number,
      value: 0,
    },

    city_index: {
      type: Number,
      value: 0
    },

    country_index: {
      type: Number,
      value: 0,
    },
    add_list: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: '联系人',
    },
    id: {
      type: String,
      value: '',
    },
    show_del: {
      type: Number,
      value: 0
    },
    region_data: {
      type: Array,
      value: [
        [],
        [],
        []
      ]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    region_index: 0,
    page: 1,
    is_load: 1,
    info: [],
    is_default: 1,
    condition: false,
    value: [0, 0, 0],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open: function () {

      this.setData({
        condition: !this.data.condition
      })
      console.log(this.data.condition);
    },
    load_list: function (e) {
      var t = this;
      if (t.data.is_load == 0) {
        return;
      }
      var post_data = {
        m: 'mallapi',
        c: 'Address',
        a: 'get_list',
        page: t.data.page
      };
      util.ajax(post_data, function (data) {
        if (data.data.list.length > 0) {
          t.data.add_list = t.data.add_list.concat(data.data.list);
          t.setData({
            add_list: t.data.add_list,
            type: 1,
            page: t.data.page + 1
          });
        } else {
          t.setData({
            is_load: 0
          });
        }
      });
    },

    checkboxChange: function (e) {
      this.setData({
        is_default: e.detail.value
      });
    },
    change_type: function (e) {
      var t = this;
      var type = e.target.dataset.type;
      t.setData({
        type: type
      });
      if (type == '2') {
        t.setData({
          info:[],
          province_index:0,
          city_index:0,
          country_index:0,
          show_del:0,
          id:'',
        })
        t.load_region();
      }
    },
    //加载三级区域
    load_region: function () {
      var t = this;
      var post_data = {
        m: 'mallapi',
        c: 'address',
        a: 'get_region',
      };
      util.ajax(post_data, function (data) {
        t.setData({
          region_data: data.data,
        });
      });
    },
    bindChange: function (e) {
      var val = e.detail.value
      var t = this;
      var vs = t.data.value;
      console.log(e);
      var column;
      var v;
      if (val[0] != vs[0]) {
        column = 0;
        v = val[0];
        val = [v,0,0];
      } else if (val[1] != vs[1]) {
        column = 1;
        v = val[1];
        val[2] = 0;
      } else if (val[2] != vs[2]) {
        vs[2] = val[2]
        column = 2;
        v = val[2];
        t.setData({
          province_index: val[0],
          city_index: val[1],
          country_index: val[2],
        });
      }
      t.setData({
        value: val,
      });
      var pid = t.data.region_data[column][v].id;
      if (!util.isNotEmpty(pid)) {
        return false;
      }
      var pos_data = {
        m: 'mallapi',
        c: 'address',
        a: 'get_areas',
        pid: pid
      };
      util.ajax(pos_data, function (data) {
        t.data.region_data[column + 1] = data.data.data;
        t.setData({
          region_data: t.data.region_data
        });
      });
    },
    //更改选择
    change_region: function (e) {
      var t = this;
      console.log("进来了");
      if (!util.isNotEmpty(e.detail.value)) {
        return false;
      }

      var column = e.detail.column;
      var v = e.detail.value;

      console.log("column:" + column);
      console.log(typeof ((e.detail.value)));
      console.log("v:" + v);
      var pid = null;
      if (column == 0 && v != t.data.province_index) {
        t.setData({
          province_index: v,
          city_index: 0,
          country_index: 0,
        });
      } else if (column == 1 && v != t.data.city_index) {
        t.setData({
          city_index: v,
          country_index: 0,
        });
      } else if (column == 2 && v != t.data.country_index) {
        t.setData({
          country_index: v,
        });
        return false;
      }

      pid = t.data.region_data[column][v].id;

      if (pid == null) {
        return false;
      }
      var pos_data = {
        m: 'mallapi',
        c: 'address',
        a: 'get_areas',
        pid: pid
      };
      util.ajax(pos_data, function (data) {
        t.data.region_data[column + 1] = data.data.data;
        t.setData({
          region_data: t.data.region_data
        });
      });

    },
    //选择完毕
    sub_region: function (e) {
      var t = this;

      var v = e.detail.value;
      t.setData({
        province_index: v[0],
        city_index: v[1],
        country_index: v[2],
      });
    },

    formSubmit: function (e) {
      var t = this;
      var post_data = e.detail.value;
      if (t.data.province_index == 0 || t.data.city_index == 0 || t.data.country_index == 0) {
        util.show_msg('请选择区域');
        return;
      }
      post_data.province = t.data.region_data[0][t.data.province_index].id;
      post_data.city = t.data.region_data[1][t.data.city_index].id;
      post_data.country = t.data.region_data[2][t.data.country_index].id;
      post_data.is_default = t.data.is_default == true ? 1 : 0;
      post_data.m = 'mallapi';
      post_data.c = 'address';
      post_data.a = 'item';
      post_data.flag = 'save';
      post_data.id = t.data.id;
      util.ajax(post_data, function (res) {
        t.setData({
          add_list: [],
          is_load: 1,
          page: 1,
          type:1,
        });
        t.load_list();
      });
    },
    //传递给父级
    onTapChild: function (event) {
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        info: event.currentTarget.dataset.info,
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('change_address_sel', myEventDetail, myEventOption);
    },
    del_info: function () {
      var t = this;
      wx.showModal({
        title: '提示',
        content: '确定删除这个地址吗?',
        success(res) {
          if (res.confirm) {
            var post_data = {
              m: 'mallapi',
              c: 'address',
              a: 'del',
              id: t.data.id
            };
            util.ajax(post_data, function (data) {
              t.setData({
                is_load: 1,
                page: 1,
                add_list: [],
                type:1,
              });
              t.load_list();
            });
          } else if (res.cancel) {

          }
        }
      })

    },
    //编辑加载
    edit_info: function (id) {
      var t = this;
      var post_data = {
        m: 'mallapi',
        c: 'address',
        a: 'info',
        id: id
      };
      util.ajax(post_data, function (data) {
        t.setData({
          type: 2,
          region_data: data.data.region_data,
          info: data.data.info,
          show_del: 1,
          is_default: data.data.info.is_default,
          id: data.data.info.id,
          province_index: data.data.province_index,
          city_index: data.data.city_index,
          country_index: data.data.country_index,
        });
      });

    },
  }
})