import API from './API.js'

function getParam(param, method) {
	let system = 'web'
	if(uni.getSystemInfoSync().platform == 'android') {
		system = 'android'
	} else if (uni.getSystemInfoSync().platform == 'ios'){
		system = 'ios'
	}
	param["token"] = uni.getStorageSync("token");
	param["system"] = system;
	param["version"] = uni.getStorageSync('version') != undefined ? uni.getStorageSync('version'):'100';
	console.log("显示token————",uni.getStorageSync("token"))
	param["method"] = method;
	console.log("参数："+JSON.stringify(param));
	return param;
}

function showToast(msg) {
	if (process.env.NODE_ENV === 'development' || (uni.getSystemInfoSync().platform != 'android'&&uni.getSystemInfoSync().platform != 'ios')) {
		uni.showToast({
			title: msg,
			icon:"none",
			duration: 3000
		});
	} else {
		// plus.nativeUI.toast(msg, {
		// 	duration: 3000,
		// });
	}
}

function getMessage(res) {
	if (res.data.info != null) {
		return res.data.info;
	} else if (res.data.data.info != null) {
		return res.data.data.info;
	} else {
		return "";
	}
}

function processResult(res, message ,param,  successCallBack, failCallBack) {
	console.log("返回的结果___",res)
	if (res.data.status == 1) {
		successCallBack(res.data)
		if (message) {
			showToast(getMessage(res));
		}
	} else {
		if (res.data.status == -1 || res.data.info == "请先登录") {
			failCallBack(res);
			showToast(getMessage(res));
			uni.setStorage({
				key: 'user',
				data: '',
			});
			uni.showModal({
				title:"提示",
				content:"登录后才能查看，是否登录？",
				confirmText:"好的",
				success:function(res){
					if(res.confirm){
						uni.reLaunch({
							url:'/pages/login/login'
						})
					} else {
						uni.reLaunch({
							url:'/pages/index/index'
						})
					}
				}
			})
			
		}else if(res.data.status == -2){
			uni.redirectTo({
				url:"/pages/error/index?title="+res.data.info,
			})
		} else {
			failCallBack(res);
			if (param.pageIndex == null || param.pageIndex == 1)
				showToast(getMessage(res));
		}
	}
	// console.log(res.data);
}


const Request = {
	isAuth: () => {
		const _token = uni.getStorageSync("token");
		// const _auth = uni.getStorageSync(IS_AUTH);
		return new Promise((resolve, reject) => {
			if (!_token) {
				reject({
					result: false,
					code: 0,
					message: "未登录",
					...commonJump
				})
			} else {
				resolve({
					result: true,
					code: 2
				});
			}
		})
	},
	post: (url, param, message, successCallBack, failCallBack) => {
		uni.showLoading({
			title:"加载中...",
			mask:true
		});
		console.log("请求接口___",API.basePath2 + url)
		
		
		uni.request({
			url: API.basePath2 + url,
			header: {
				'content-type': "application/json",
			},
			method: 'POST',
			data: getParam(param, 'POST'),
			success: res => {
				uni.hideLoading();
				processResult(res,message,param,  successCallBack, failCallBack);
			},
			fail: res => {
				uni.hideLoading();
				if (res.data == undefined) {
					showToast("网络未连接");
					
				} else {
					showToast(res.errMsg);
				}
				failCallBack(res);

				console.log(res.data);

			}
		});
	},
	postx: (url, param, message, successCallBack, failCallBack) => {
		uni.showLoading({
			title:"加载中",
			mask:true
		});
		console.log("请求连接___",API.basePath2 + url)
		uni.request({
			url: API.basePath2 + url,
			header: {
				'content-type': "application/x-www-form-urlencoded",
				'Cookie': ''
			},
			method: 'POST',
			data: getParam(param, 'GET'),
			success: res => {
				uni.hideLoading();
				processResult(res,message,param,successCallBack, failCallBack);
				// console.log(res.data);
			},
			fail: res => {
				uni.hideLoading();
				showToast(res.errMsg);
				failCallBack(res);
				console.log(res.data);
			}
		});
	},
	get: (url, param, message, successCallBack, failCallBack) => {
		uni.showLoading({
			title:"加载中",
			mask:true
		});
		console.log("请求连接____",API.basePath2+url )
		// var p = getCurrentPages();
		// console.log(p[0].route);
		uni.request({
			url: API.basePath2 + url,
			header: {
				'content-type': "application/x-www-form-urlencoded"
			},
			method: 'GET',
			data: getParam(param, 'GET'),
			success: res => {
				uni.hideLoading();
				processResult(res,message,param, successCallBack, failCallBack);
				// console.log(res.data);
			},
			fail: res => {
				uni.hideLoading();
				showToast(res.errMsg);
				failCallBack(res);
				console.log(res.data);
			}
		});
	},
	uploadImage: (url, param, filePath, message, successCallBack, failCallBack) => {
		uni.showLoading({
			title:"加载中"
		});
		uni.uploadFile({
			url: API.basePath2 + url,
			// header: {
			// 	'content-type': "multipart/form-data"
			// },
			// files:[{"name":"file","uri":filePath}],
			filePath: filePath,
			name: "file",
			formData: getParam(param, "POST"),
			success: res => {
				uni.hideLoading();
				let data = JSON.parse(res.data)
				console.log(res.data);
				if (res.statusCode == '200') {

					successCallBack(data)
					if (message) {
						showToast(data.info);
					}
				} else {
					failCallBack(res);
					uni.showToast({
						title:data.info,
						icon:"none"
					})
					showToast(data.info);
				}
			},
			fail: res => {
				uni.hideLoading();
				console.log(res.data);
				showToast(res.errMsg);
				failCallBack(res);

			}
		});
	},
	put: (url, param, message, successCallBack, failCallBack) => {
		uni.showLoading({
			title:"加载中"
		});
		uni.request({
			url: API.basePath2 + url,
			header: {
				'content-type': "application/x-www-form-urlencoded",
			},
			method: 'PUT',
			data: getParam(param, 'PUT'),
			success: res => {
				uni.hideLoading();
				if (res.data.code == '200') {
					successCallBack(res)
					if (message) {
						showToast(getMessage(res));
					}
				} else {
					failCallBack(res);
					showToast(getMessage(res));
				}
				console.log(res.data);
			},
			fail: res => {
				uni.hideLoading();
				showToast(res.errMsg);
				failCallBack(res);
				console.log(res.data);

			}
		});
	},
	showToast: (msg) => {
		if (process.env.NODE_ENV === 'development' || (uni.getSystemInfoSync().platform != 'android'&& uni.getSystemInfoSync().platform != 'ios')) {
			uni.showToast({
				title: msg,
				icon:"none",
				duration: 3000
			});
		} else {
			// plus.nativeUI.toast(msg, {
			// 	duration: 3000,
			// });
		}
	}

}

export default Request;
