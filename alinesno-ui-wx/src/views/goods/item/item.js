import Poster from '../../../com/miniprogram_dist/poster/poster';
const app = getApp();
const util = getApp().include('util');

// pages/2/2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 1, // 当前的banner项
        isIphoneX: app.globalData.isIphoneX,
        buBottom: 0,
        showSelect: false, // 选择规格弹窗
        currentTab: 0,
        showTopNav: false, //显示顶部导航

        goods_id: 0,
        quanbu_pt: false,
        kaituan_cg: false,
        mask: false,
        is_pt: 0,
        is_ms: 0,
        is_no: 0,
        show_attr: false,
        show_ewm: false,
        ewm_url: '',
        num: 1,
        spec_child_id: 0,
        show_price: 0,
        show_num: 0,
        pt_num: 0,
        pt_price: 0,
        ms_price: 0,
        goods_show: false,
        flag: 'cart',
        scrollIntoView: 'shangping',
        //秒杀
        timer: null,
        h: '00',
        m: '00',
        s: '00',
    },

    // 领券
    showTicket: function () {
        this.setData({
            isShow: !this.data.isShow
        })
    },

    // 商品参数
    showCanshu: function () {
        this.setData({
            isShow2: !this.data.isShow2
        })
    },

    // 分享
    showShare: function () {
        this.setData({
            isShow3: !this.data.isShow3
        })
        this.onCreatePoster();
    },


    lingquan: function (e) {
        var t = this;
        var post_data = {
            m: 'mallapi',
            c: 'Coupon',
            a: 'draw',
            id: e.currentTarget.dataset.coupon_id
        };

        util.ajax(post_data, function (res) {
            t.data.data.cou_tpls_name = "已领券";
            t.setData({
                data: t.data.data
            })
        });
    },



    show_goods_sel: function (e) {
        var t = this;
        var d = e.currentTarget.dataset;
        t.selectComponent("#goods").get_data({
            goods_id: t.data.goods_id,
            flag: d.flag,
            confirm: function (res) {
                t.setData({
                    show_name:res.show_name,
                    cart_num:res.cart_num,
                })

            },
            close: function (res) {
                t.setData({
                    show_name:res.show_name,
                })

            }
        });
    },

    tourl: function (e) {
        var t = this;
        var d = e.currentTarget.dataset;
        wx.navigateTo({
            url: d.url,
        })
    },
    img_re: function (e) {
        var d = e.currentTarget.dataset;

        wx.previewImage({
            current: d.src,
            urls: d.list

        })
    },
    atn: function (e) {
        var t = this;
        var pos_data = {
            m: 'mallapi',
            c: 'atn',
            a: 'atn',
            goods_id: t.data.goods_id,
        };
        util.ajax(pos_data, function (data) {
            t.data.data.is_atn = data.data.is_atn;
            t.setData({
                data: t.data.data
            });
        });

    },

    switchNav(event) {
        var cur = event.currentTarget.dataset.current;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    switchTab(event) {
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    },

    // banner切换
    bannerSlide: function (e) {
        this.setData({
            currentIndex: e.detail.current + 1
        })
    },

    showSelectPop: function () {
        this.setData({
            showSelect: !this.data.showSelect
        });
    },
    showTypePop: function () {
        this.setData({
            showType: !this.data.showType
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 创建元素选择器（以下都是新增的）
        // 选择所有的要滑动到的元素，每个元素要添加.tab-target类名

        var t = this;
        if (util.isNotEmpty(options.is_pt)) {
            t.setData({
                is_pt: options.is_pt
            });
        }
        if (util.isNotEmpty(options.is_ms)) {
            t.setData({
                is_ms: options.is_ms
            });
        }
        if (t.data.is_pt == 0 && t.data.is_ms == 0) {
            t.setData({
                is_no: 1
            })
        }
        var post_data = {
            m: 'mallapi',
            c: 'goods',
            a: 'item',
            goods_id: options.goods_id,
            is_pt: t.data.is_pt,
            is_ms: t.data.is_ms
        };
        if (util.isNotEmpty(options.ms_id)) {

            post_data.ms_id = options.ms_id;
        }

        util.ajax(post_data, function (res) {
            t.setData({
                data: res.data,
                goods_id: options.goods_id,
            });
            wx.setNavigationBarTitle({
                title: res.data.info.name,
            });

            t.setData({
                cart_num:res.data.cart_num,
                show_price: res.data.info.min_price,
                pt_price: res.data.info.min_pt_price,
                ms_price: res.data.info.min_ms_price,
            });

            if (t.data.is_ms == 1) {
                t.countDown();
            }


        });

    },


    countDown: function () {
        var t = this;
        t.setData({
            timer: setInterval(function () {
                var NowTime = new Date();
                var e = new Date(t.data.data.ms_end_time);
                var t2 = e.getTime() - NowTime.getTime();
                var d = 0;
                var h = 0;
                var m = 0;
                var s = 0;
                if (t2 >= 0) {
                    d = Math.floor(t2 / 1000 / 60 / 60 / 24);
                    h = Math.floor(t2 / 1000 / 60 / 60 % 24);
                    m = Math.floor(t2 / 1000 / 60 % 60);
                    s = Math.floor(t2 / 1000 % 60);
                }
                if (s == 0 && m == 0 && h == 0 && d == 0) {
                    t.setData({
                        is_down: 0
                    });
                    clearInterval(t.data.timer);
                } else {
                    if (h < 10) {
                        h = '0' + h.toString();
                    }
                    if (m < 10) {
                        m = '0' + m.toString();
                    }
                    if (s < 10) {
                        s = '0' + s.toString();
                    }
                    t.setData({
                        h: h,
                        m: m,
                        s: s
                    });
                }
            }, 1000)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let that = this;
        wx.getSystemInfo({
            success: res => {
                // console.log('手机信息res'+res.model)
                let modelmes = res.model;
                if (modelmes.search('iPhone X') != -1) {
                    console.log('onShow')
                    that.setData({
                        buBottom: 68
                    })
                }
            }
        })
    },
    msg() {
        util.show_msg('请点击右上角分享朋友圈')
    },

    //海报生成
    onCreatePoster() {
        // setData配置数据
        var info=this.data.data.info;
        // var userInfo=this.data.data.uinfo;
        var posterconfig = {
            width: 586,
            height:917,
            backgroundColor: "#fff",
            borderRadius: 10,
            debug: false,
            //商品图
            images:[
                //用户头像
                // {
                //     height: 75,
                //     width: 75,
                //     url: userInfo.headimgurl,
                //     x: 12,
                //     y: 20,
                //     borderRadius: 75,
                // },
                {
                    height: 232,
                    width: 279,
                    url: app.globalData.cdn+'icon/share_bg2.png',
                    x: 354,
                    y: 0,
                },
                {
                    height: 562,
                    width: 562,
                    url: info.thumb,
                    x: 12,
                    y: 110,
                },
                {
                    height: 156,
                    width: 156,
                    url: info.thumb,
                    x: 412,
                    y: 702.5,
                }
            ],

            texts:[
                //用户名称
                // {
                //     baseLine: "middle",
                //     color: "#525356",
                //     fontSize: 28,
                //     lineHeight: 40,
                //     text: userInfo.nickname,
                //     textAlign: "left",
                //     x: 102,
                //     y: 34,
                // },
                //备注
                {
                    baseLine: "middle",
                    color: "#999999",
                    fontSize: 20,
                    text: "为您挑选了一个好物",
                    textAlign: "left",
                    x: 102,
                    y: 70,

                },
                //价格
                {
                    baseLine: "middle",
                    color: "#C4302C",
                    fontSize: 34,
                    lineHeight: 80,
                    text: "￥"+info.min_price,
                    textAlign: "left",
                    width: 390,
                    x: 12,
                    y: 710,
                },
                //商品名称
                {
                    baseLine: "middle",
                    color: "#000000",
                    fontSize: 26,
                    lineHeight: 40,
                    text: info.name,
                    textAlign: "left",
                    width: 360,
                    lineNum: "2",
                    x: 12,
                    y: 760,
                },
                //二维码提示语
                {
                    baseLine: "middle",
                    color: "#999999",
                    fontSize: 20,
                    lineHeight: 40,
                    text: "长按或扫描识别二维码",
                    textAlign: "center",
                    width: 200,
                    x: 482,
                    y: 885,
                }
            ]
        };

        this.setData({ posterConfig: posterconfig }, () => {
            Poster.create();
        });
    },

    //生成成功
    onPosterSuccess(e) {
        var t=this;
        const { detail } = e;
        console.log(detail)
        t.setData({
            hb_url:detail,
        })

    },
    saveimg: function (e) {
        var imgSrc = e.currentTarget.dataset.img;
        wx.saveImageToPhotosAlbum({
            filePath: imgSrc,
            success: function (data) {
                wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail: function (err) {
                if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {

                    wx.showModal({
                        title: '提示',
                        content: "需要获取保存相册权限",
                        success(res) {
                            if (res.confirm) {

                                wx.openSetting({
                                    success(settingdata) {
                                        if (settingdata.authSetting['scope.writePhotosAlbum']) {
                                            util.msg('获取权限成功，再次点击图片保存到相册。');
                                        } else {
                                            util.msg('获取权限失败，无法正常使用。');
                                        }
                                    },fail:function(e){
                                        console.log(e)
                                    }
                                })
                            } else if (res.cancel) {
                                console.log('用户点击取消');
                                util.msg('获取权限失败，无法正常使用。');
                            }
                        }
                    })
                }
            },
            complete(res) {
                console.log(res);
            }
        })
    },


    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    /**
     * 用户分享到朋友圈
     */
    onShareTimeline: function () {
        var uinfo = wx.getStorageSync("uinfo");
        var t = this;
        var shareObj = {
            title: t.data.data.info.name,
            query: 'pid=' + uinfo.id + "&goods_id=" + t.data.data.info.goods_id,
        }
        return shareObj;
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return util.share();
    }
})