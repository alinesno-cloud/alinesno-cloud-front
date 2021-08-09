const util = require('../../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page: 1,
        is_load: 1,
        add_list: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.type){
            this.setData({
                type:options.type,
            })
        }

        this.init_data();


    },

    init_data(){
      this.setData({
          add_list: [],
          page: 1,
          is_load: 1,
      })
        this.load_list();
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
                    page: t.data.page + 1
                });
            } else {
                t.setData({
                    is_load: 0
                });
            }
        });
    },


    del_info: function (e) {
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
                        id: e.currentTarget.dataset.id,
                    };
                    util.ajax(post_data, function (data) {
                        t.setData({
                            is_load: 1,
                            page: 1,
                            add_list: [],
                            type:1,
                        });
                        t.init_data();
                    });
                } else if (res.cancel) {

                }
            }
        })

    },

    set_default: function (e) {
        var t = this;
        wx.showModal({
            title: '提示',
            content: '确定设该地址为默认吗?',
            success(res) {
                if (res.confirm) {
                    var post_data = {
                        m: 'mallapi',
                        c: 'address',
                        a: 'set_default',
                        id: e.currentTarget.dataset.id,
                    };
                    util.ajax(post_data, function (data) {
                        t.setData({
                            is_load: 1,
                            page: 1,
                            add_list: [],
                            type:1,
                        });
                        t.init_data();
                    });
                } else if (res.cancel) {

                }
            }
        })

    },

    select_address(e){
        if(!this.data.type){
            return false;
        }
        var pages = getCurrentPages();
        console.log(pages);
        var prevPage = pages[pages.length - 2];  //上一个页面
        console.log(prevPage);
        if(this.data.type==1){
            console.log(e.currentTarget.dataset.id);
            prevPage.setData({
                address_id:e.currentTarget.dataset.id,
            })
            prevPage.load_data();
            wx.navigateBack({
                delta:1,
            })
        }



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
        this.load_list();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})