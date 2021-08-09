const app = getApp();

const util = getApp().include('util');

// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
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
		this.setData({
			buBottom: app.globalData.buBottom
		});
		var post_data = {
			m: 'mallapi',
			c: 'ContentApi',
      a: 'item',
      id:options.id
		};
		var t = this;
		util.ajax(post_data, function (data) {
			t.setData({
				data: data.data
			})
		})
	},


	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})