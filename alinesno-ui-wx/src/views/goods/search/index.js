const app = getApp()
const util = getApp().include('util');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var t=this;
        var historyList = wx.getStorageSync('search')
        t.setData({
            historyList: historyList
        });

    },
    search: function () {
        var t = this;
        if (!t.data.title) {
            return
        }
        t.setData({
            list: [],
            is_load: 1,
            page: 1,
            is_search: true
        });

        var search=wx.getStorageSync('search')
        var new_search=[t.data.title];
        if(search){
            for (var i in search){
                if(i<20&&search[i]!=t.data.title){
                    new_search.push(search[i]);
                }
            }
        }
        console.log('历史记录',new_search);
        wx.setStorageSync('search',new_search)


        t.load_data();

    },
    delhistory(){
        wx.setStorageSync('search',[])
        t.setData({
            historyList: historyList
        });
    },
    history_search(e){
        this.setData({
            title:e.currentTarget.dataset.title,
        })
        this.search();
    },
    cancel(){
        this.setData({
            title:'',
            is_search:false,
        })
    },
    load_data: function () {
        var t = this;
        if (t.data.is_load == 0) {
            return;
        }
        var post_data = {
            m: 'mallapi',
            c: 'goods',
            a: 'cate',
            name: t.data.title,
            type: t.data.type,
            page: t.data.page,
        };

        util.ajax(post_data, function (res) {
            t.setData({
                data: res.data
            });
            t.setData({
                load_other: 0,
            })

            if (res.data.count <= 0) {
                t.setData({
                    is_load: 0
                });
            } else {
                t.data.list = t.data.list.concat(res.data.list);
                t.setData({
                    list: t.data.list,
                    page: t.data.page + 1
                });
            }

        });
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
        this.load_data();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})