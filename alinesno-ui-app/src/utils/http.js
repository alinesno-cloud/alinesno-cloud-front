
module.exports = (params) => {
	let url = params.url
	let method = params.method
	let header = params.header || {}
	let data = params.data || {}

	let hostUel = getApp().globalData.url
	
	// 请求方式 GET POST
	if(method){
		method = method.toUpperCase()	// 小写转大写
		if(JSON.stringify(header) == "{}"){ // 默认请求头
			header = {"content-type":"application/json;charset=utf-8"}
		}
	}

	// 发起请求 加载动画
	if(!params.hideLoading){
		uni.showLoading({
			title:"加载中"
		})
	}
	if(uni.getStorageSync('token')){
		header.Authorization = 'Bearer ' + uni.getStorageSync('token');
	}

	// 发起网络请求
	uni.request({
		url:hostUel+url,
		method:method || "GET",
		header:header,
		data:data,
		dataType:"json",
		sslVerify:false,		// 是否使用SSL证书
		success: res => {
			if(res.statusCode && res.statusCode != 200){
				// API错误
				uni.showModal({
					content:res.msg
				})
				return;
			}
			
			// 未登录状态时 去登录
			if(res.data.code == '401'){
				uni.showModal({
					title:'登录',
					content:'登录已失效，是否重新登录？',
					success: res => {
						let pages = getCurrentPages();
						// let fullPath = pages[pages.length - 1].__page__.fullPath;
						// uni.setStorageSync('LoginRetUrl',fullPath)
						// 可能需要改逻辑?
						if (res.confirm) {
							uni.removeStorageSync('token');
							uni.reLaunch({
							    url: '/pages/login/login',
								success(res) {
									console.log('res',res)
								},
								fail(res) {
									console.log('res',res)
								}
							});
						} else if (res.cancel) {
							uni.reLaunch({
							    url: '/pages/index/index'
							});
						}
					}
				})
				
			}
			
			if(res.data.code == 400){
				uni.showToast({
					title:res.data.msg,
					duration: 2000,
					mask: true,
					icon: 'none',
				});
				return;
			}
			
			typeof params.success == "function" && params.success(res.data)
		},
		fail: err => {
			uni.showModal({
				content:err.errMsg
			})
			typeof params.fail == "function" && params.fail(err.data)
		},
		complete: (e) => {
			console.log("请求完成");
			uni.hideLoading()
			typeof params.complete == "function" && params.complete(e.data)
			return;
		}
	})
}