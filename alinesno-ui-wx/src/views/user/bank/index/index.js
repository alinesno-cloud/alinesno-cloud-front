const app = getApp()
const util = getApp().include('util');
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {




    },

    get_data(){
        var t = this;
        var pos_data = {
            m: 'mallapi',
            c: 'User',
            a: 'bank',
        };

        util.ajax(pos_data, function (data) {
            t.setData({
                data: data.data
            });
        });
    },
    del(e){
        var t = this;
        var pos_data = {
            m: 'mallapi',
            c: 'User',
            a: 'bank_del',
            id:e.currentTarget.dataset.id
        };

        util.ajax(pos_data, function (data) {
            t.get_data();
        });

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.get_data();
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