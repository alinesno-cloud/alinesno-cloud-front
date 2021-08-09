const util = require('../../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: [],
        is_default: 1,
        condition: false,
        value: [0, 0, 0],
        province_index: 0,
        city_index: 0,
        country_index: 0,
        region_data:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.id){
            this.edit_info(options.id)
        }else{
            this.load_region();
        }

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
                is_default: data.data.info.is_default,
                id: data.data.info.id,
                province_index: data.data.province_index,
                city_index: data.data.city_index,
                country_index: data.data.country_index,
            });
        });

    },

    open: function () {

        this.setData({
            condition: !this.data.condition
        })
        console.log(this.data.condition);
    },

    checkboxChange: function () {
        if(this.data.is_default==1){
            this.setData({
                is_default: 0
            });
        }else {
            this.setData({
                is_default: 1
            });
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
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];  //上一个页面
            prevPage.init_data();
            wx.navigateBack({
                delta:1,
            })

        });
    },




    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})