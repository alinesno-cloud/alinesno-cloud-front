// var host = 'http://www.jiarunwomei.com' // 请求接口
var host = 'https://xf79.wzxinhu.cn/jrwm/' // 请求接口

var system = 'web' // 请求类型
// **************************************网络请求start************************************************

/**
 * POST请求
 * @param {Object} url
 * @param {Object} data
 * @param {Object} success
 * @param {Object} fail
 */
// function post (url, data, success, fail) {
//   request(url, data, "POST", success, fail)
// }

function post (data) {
  request(data.url, data.data, "POST", data.success, data.fail)
}

/**
 * GET请求
 * @param {Object} url
 * @param {Object} data
 * @param {Object} success
 * @param {Object} fail
 */
function get (url, data, success, fail) {
  request(url, data, "GET", success, fail)
}

/**
 * 网络请求
 * @param {Object} url
 * @param {Object} data
 * @param {Object} method
 * @param {Object} success
 * @param {Object} fail
 */
function request (url, data, method, success, fail) {
	// 携带token请求
	if (typeof data == 'undefined') { data = {} }
	data.token = uni.getStorageSync('token');
	data.system = system

	uni.showLoading({title: "加载中"})
	uni.request({
		url: host + url, //请求地址
		method: method, //请求方法
		header: { //请求头
		  "Content-Type": "application/json;charset=UTF-8"
		},
		data: data, //请求参数    
		dataType: 'json', //返回数据格式
		responseType: 'text', //响应的数据类型
		success: function (result) {
			var duration = 1500;
				if (result.data.info) {
				uni.showToast({
					icon: 'none',
					duration: duration,
					title: result.data.info
				})
			}
			//成功执行方法，参数值为res.data,直接将返回的数据传入
			if (result.data.status == 1) {
				if (typeof success == 'function') {
					if (result.data.info) {
						setTimeout(function () {
							success(result.data)
						}, duration)
					} else {
						success(result.data)
					}
				}
				return
			}
		  
		  
			if (result.data.status == 0) {
				uni.showToast({
					title: result.data.info,
					duration: duration,
					icon: 'none'
				})
				if (typeof fail == 'function') {
					setTimeout(function () {
						fail(result.data)
					}, duration)
				}
				return
			}
			
			if(result.data.status == '-1'){
				// uni.showModal({
				// 	title:'登录',
				// 	content:'使用该功能需要登录，是否进行登录？',
				// 	success: res => {
				// 		uni.redirectTo({
				// 			url: "/pages/login/login"
				// 		})
				// 	}
				// })
				uni.redirectTo({
					url: "/pages/login/login"
				})
			}
		},
		fail: function (err) {
			if (typeof fail == 'function') {
				fail(err)
				return
			}
			console.log(err)
		},
		complete: function () {
			uni.hideLoading()
		}
	})
}
// **************************************网络请求end************************************************


// **************************************上传start************************************************

/**
 * 图片上传
 * @param {Object} params
 * 
 * 使用方法
upload({
	url: '', // 请求域名
	success: function (success) {}, // 上传成功回调
	error: function (error) {}, // 上传错误回调
	progress: function (progress) {} // 上传进度
})
 */
function upload (params) {
	uni.chooseImage({
		count: 1,
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album','camera'], //从相册选择
		success: function(res) {
			uni.showLoading({
				title: "加载中",
				mask: true,
			})
			
			const tempFilePaths = res.tempFilePaths;
			const uploadTask = uni.uploadFile({
				url: params.url ? host + params.url : host + '/h/ajax/upload_images',
				filePath: tempFilePaths[0],
				name: 'file',
				success: function(uploadFileRes) {
					var fbb = JSON.parse(uploadFileRes.data);
					if (typeof params.success == 'function') {
						params.success(fbb)
						return
					}
					console.log(fbb)
				},
				complete: function () {
					uni.hideLoading()
				}
			});
				
			uploadTask.onProgressUpdate(function(res) {
				if (typeof params.progress == 'function') {
					params.progress(res)
					return
				}
				console.log(res)
			})
		},
		error: function(e) {
			if (typeof params.error == 'function') {
				params.error(e)
				return
			}
			uni.showToast({
				icon: 'none',
				duration: duration,
				title: '上传错误，请重试'
			})
			console.log(e)
		}
	})
}
// **************************************上传end************************************************


// **************************************倒计时start************************************************

/**
 * 倒计时
 * @param {Object} endTime
 * @param {Object} succFun
 * @param {Object} endFn
 * 
 * 使用方法
countDown('2021/4/8', function (time) {
	// 倒计时回调
}, function (msg) {
	// 倒计时结束回调
})
 */
function countDown (endTime, succFun, endFn) {
	var timer = setInterval (function () {
		var result = showTime(endTime)
		if (result.status == 200) {
			if (typeof succFun == 'function') {
				succFun(result.data)
			}
		} else {
			if (typeof endFn == 'function') {
				clearInterval(timer)
				endFn(result.msg)
			}
		}
	}, 1000) // 1秒执行一次
}

/**
 * 倒计时执行
 * @param {Object} endTime
 */
function showTime (endTime) {
	var nowtime = new Date(),  //获取当前时间
		endtime = new Date(endTime);  //定义结束时间
	var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
		leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
		lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
		leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
		lefts = Math.floor(lefttime/1000%60);  //计算秒数
	
	leftd = leftd < 10 ? '0' + leftd : leftd
	lefth = lefth < 10 ? '0' + lefth : lefth
	leftm = leftm < 10 ? '0' + leftm : leftm
	lefts = lefts < 10 ? '0' + lefts : lefts
	// leftd + "天" + lefth + ":" + leftm + ":" + lefts
	var result = {
		status: 200,
		data: {
			str: lefth + ":" + leftm + ":" + lefts ,//返回倒计时的字符串
			day: leftd,
			hour: lefth,
			minute: leftm,
			second: lefts,
		}
	}
	if (lefttime < 0) {
		result = {
			status: 400,
			msg: '倒计时结束',
			data: {}
		}
	}
	
	return result
}


/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */

function showFormatTime(time) {
	const d = new Date(time)
	const now = Date.now()
	const diff = (now - d) / 1000
	if (diff < 30) {
		return '刚刚'
	} else if (diff < 3600) {
		return Math.ceil(diff / 60) + '分钟前'
	} else if (diff < 3600 * 24) {
		return Math.ceil(diff / 3600) + '小时前'
	} else if (diff < 3600 * 24 * 2) {
		return '1天前'
	}else{
		var date = new Date(time);
		var curTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + 			date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
		return curTime
	}
}

// **************************************倒计时end************************************************


// **************************************页面分享start************************************************

// #ifdef H5
var wx = require('./wx_index.js')
/**
 * 微信分享
 * @param {Object} params
 * 
 * 使用方法
share({
	title: '标题',
	desc: '描述',
	link: '页面链接 如 /pages/index/index',
	imgUrl: '图片地址',
	success: function () {}
})
 */
function share (params) {
	params.link = typeof params.link != 'undefined' ? host + '/m' + params.link : window.location.href
	jsSDK(params, function () {
		wx.ready(function () {
			var data = {
				title: params.title,
				desc: params.desc,
				link: params.link,
				imgUrl: params.imgUrl,
				success: function () {
					// 分享成功后的操作
					if (typeof params.success == 'function') {
						params.success()
					}
				}
			}
			wx.onMenuShareAppMessage(data) // 分享给朋友
			wx.onMenuShareTimeline(data) // 分享到朋友圈 
		})
	})
}
// #endif


/**
 * 初始化JS-SDK
 * @param {Object} params
 * @param {Object} callback
 */
function jsSDK (params, callback) {
	if (typeof params == 'undefined') { params = {} }
	params.sign_link = window.location.href
	post(typeof params.url != 'undefined' ? params.url : '/MallApi/User/share', params, function (res) {
		wx.config({
			debug: res.data.debug,
			appId: res.data.appId,
			timestamp: res.data.timestamp,
			nonceStr: res.data.nonceStr,
			signature: res.data.signature,
			jsApiList: res.data.jsApiList
		})
		// 回调执行方法
		if (typeof callback == 'function') {
			callback(res)
		}
	})
	
}

// **************************************页面分享end************************************************

// 暴露接口
export {
	host,
	post,
	get,
	upload,
	// #ifdef H5
	share,
	// #endif
	countDown,
	showFormatTime
}