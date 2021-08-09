const app = getApp();
const util = app.include('util');

// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		cdn: app.globalData.cdn,
		buBottom: 0,
		showPopup: true, // 控制显示红包弹框

	},
	change_open_search: function (e) {
		var t = this;
		t.setData({
			open_search: e.detail
		})
	},
	open_search: function (e) {
		var t = this;
		t.setData({
			open_search: !t.data.open_search
		})
	},
	change_name: function (e) {
		var t = this;
		t.setData({
			name: e.detail.value
		});
	},
	search: function (e) {
		var t = this;
		if (util.isNotEmpty(t.data.name)) {
			wx.navigateTo({
				url: '/pages/goods/index/index?name=' + t.data.name,
			})
		}
	},

	change_cate: function (e) {
		var t = this;
		var d = e.currentTarget.dataset;
		if (d.category_id != t.data.category_id) {
			t.setData({
				category_id: d.category_id
			});
			t.load_list();
		}

	},
	load_list: function () {
		var t = this;

		var post_data = {
			m: 'mallapi',
			c: 'index',
			a: 'tel_list',
			category_id: t.data.category_id,
		};
		util.ajax(post_data, function (data) {
			t.data.data.tel_list1 = data.data.tel_list1;
			t.data.data.tel_list2 = data.data.tel_list2;

			t.setData({
				data: t.data.data
			})

		})
	},
	countDown: function () {
		var t = this;
		t.setData({
			timer: setInterval(function () {
				var NowTime = new Date();
				var e = new Date(t.data.data.ms_info.end_time);
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

	tourl: function (e) {
		var t = this;
		var d = e.currentTarget.dataset;
		if (util.isNotEmpty(d.url)) {
			wx.navigateTo({
				url: d.url,
			})
		}

	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var t = this;
		t.setData({
			buBottom: app.globalData.buBottom
		});
		var t = this;
		util.ajax('/mallapi/index/index', {}, function (data) {
			t.setData({
				data: data.data
			})
		});
	},


	// 控制显示红包弹窗
	showPopup: function () {
		this.setData({
			showPopup: !this.data.showPopup
		})
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return util.share();
	}
})