const app = getApp()
const util = getApp().include('util');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:'',
        name:'',
        realname:'',
        tel:'',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    sub(){
        var t=this;
        var post_data=t.data;
        post_data.flag='sub';
        util.ajax("/mallapi/user/bank_item",post_data,function (){
            wx.navigateBack({
                delta:1,
            })
        })

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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