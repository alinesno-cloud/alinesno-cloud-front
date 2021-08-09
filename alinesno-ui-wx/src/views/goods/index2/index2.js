const util = getApp().include('util');
const app = getApp()
var listHeight = 0;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isIphoneX:app.globalData.isIphoneX,  //是否是iphoneX
        statusBarHeight: app.globalData.statusBarHeight, //状态栏高度

        genderindex: 0,  //选中的索引
        genderarray: ['默认','按价格', '按销量'],  //选项数据

        cdn: app.globalData.cdn,
        resData:[],
        category_id:0,

        isLoadEnd: false,
        isLoad: false,
        list:[],
        title: '',
        order:'',
        load_other:1,
    },

    genderChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            genderindex: e.detail.value
        })
        if(e.detail.value==0){
            this.setData({
                order: '',
            })
        }

        if(e.detail.value==1){
            this.setData({
                order: 'price',
            })
        }
        if(e.detail.value==2){
            this.setData({
                order: 'sale_num',
            })
        }
        this.get_init();

    },

    get_title: function (e) {
        this.setData({
            title: e.detail.value
        })
    },
    search_title: function () {
        var t = this;
        t.get_init();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        // 获取系统信息


        var query = wx.createSelectorQuery();

        query.select('.l2').boundingClientRect();
        query.select('.l3').boundingClientRect();
        query.exec((res) => {

            var listHeight2 = res[0].height;
            var listHeight3 = res[1].height;
            listHeight =  listHeight2 + listHeight3;

            wx.getSystemInfo({
                success: function (res) {
                    // 获取可使用窗口宽度
                    let clientHeight = res.windowHeight;
                    // 获取可使用窗口高度
                    let clientWidth = res.windowWidth;
                    // 算出比例
                    let ratio = 750 / clientWidth;
                    // 算出高度(单位rpx)
                    let height = clientHeight * ratio;

                    let bb = clientHeight - listHeight;

                    // 设置高度
                    that.setData({
                        height: bb
                    });

                }
            });


            var t=this;

            t.get_init();

        })

    },

    change_cate(e){
        this.setData({
            category_id:e.currentTarget.dataset.category_id,
        })
        this.get_init();
    },


    get_init(){
        this.setData({
            page: 1,
            isLoadEnd: false,
            isLoad: false,
            load_other:1,
            list:[],
        })
        this.get_list();
    },

    get_list: function () {
        var t = this;
        if (!t.data.isLoad && !t.data.isLoadEnd) {
            t.data.isLoad = true;
            var post_data = {
                page: t.data.page,
                category_id:t.data.category_id,
                order:t.data.order,
                load_other:t.data.load_other,
                name:t.data.title,
            };
            util.ajax("/mallapi/goods/index",post_data, function (res) {
                t.data.page++;
                t.data.load_other=0;
                var data = res.data.list;
                if( t.data.page == 2){
                    t.setData({
                        resData:res.data,
                        cate_name:res.data.cate_name,
                    })
                }
               
                if (data.length > 0) {
                    t.setData({
                        list: t.data.list.concat(data),
                        isLoad: false
                    })
                } else {
                    t.setData({
                        isLoadEnd: true,
                        isLoad: false
                    })
                }
            })
        }
    },




   
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
       // this.get_list();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return util.share();
    }
})