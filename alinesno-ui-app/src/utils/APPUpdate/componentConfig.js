// import $http from '@/config/requestConfig'
import {
	getVersion
} from '@/api/public.js'

const platform = uni.getSystemInfoSync().platform;
export default {
	
	getServerNo: (version, isPrompt = false, callback) => {
		let httpData = {
			versionCode: version.versionCode,
			// 版本名称
			platform: platform,
			app_id: 1,
		};
	
		getVersion(httpData).then(res => {
			var res = res.data.info;
			
			if (res && res.downloadUrl) {
				if (res.updateType) {
					callback && callback(res);
				} else {
					if (res.forceUpdate) {
						res.updateType = "forcibly";
					} else {
						res.updateType = "solicit";
					}
					callback && callback(res);
				}
			} else if (isPrompt) {
				uni.showToast({
					title: "暂无新版本",
					icon: "none"
				});
			}
		}).catch(err=>{
			if (isPrompt) {
				uni.showToast({
					title: "暂无新版本",
					icon: "none"
				});
			}
		})
		/****************以上是示例*******************/
	},
	// 弹窗主颜色（不填默认粉色）
	appUpdateColor: "54D401",
	// 弹窗图标（不填显示默认图标，链接配置示例如： '/static/demo/ic_attention.png'）
	appUpdateIcon: '/static/ic_ar.png'
}
