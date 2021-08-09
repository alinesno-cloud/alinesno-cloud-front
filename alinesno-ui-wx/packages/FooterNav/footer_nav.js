const app = getApp()
// components/footer_nav/footer_nav.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// buBottom: {
		// 	type: Number,
		// 	value: 0,
		// },
		// 当前菜单索引值
		act: {
			type: Number,
			value: 0,
		},

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		isIphoneX: app.globalData.isIphoneX,
		buBottom: 0,
		show_tan:false,
		cdn:app.globalData.cdn,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	ready: function(options) {
		let that = this;
		wx.getSystemInfo({
			success: res => {
				// console.log('手机信息res'+res.model)
				let modelmes = res.model;
				if (modelmes.search('iPhone X') != -1) {
					console.log('onShow')
					that.setData({buBottom: 68})
				}
			}
		})
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

		show_tan:function(e){
			var t= this;
			t.setData({
				show_tan:!t.data.show_tan
			})
		},
	}
})
