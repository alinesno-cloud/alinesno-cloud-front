import {
	getUserInfo
} from "@/api/user.js";

const state = {
	token: uni.getStorageSync('token') || false,
	backgroundColor: "#fff",
	userInfo: {},
	project: uni.getStorageSync('project'),
	uid: uni.getStorageSync('uid') || 0,
	homeActive: false,
	phoneStatus:true
};

const mutations = {
	SETPHONESTATUS(state,val){
		state.phoneStatus = val;
	},
	LOGIN(state, opt) {
		state.token = opt.token;
		uni.setStorageSync('token',opt.token);
	},
	SETUID(state,val){
		state.uid = val;
		uni.setStorageSync('uid', val);
	},
	UPDATE_LOGIN(state, token) {
		state.token = token;
	},
	LOGOUT(state) {
		state.token = undefined;
		state.uid = undefined
		uni.removeStorageSync('token')
		uni.removeStorageSync('project')
		uni.removeStorageSync('juese')
		uni.removeStorageSync('userInfo')
	},
	
	UPDATE_USERINFO(state, userInfo) {
		state.userInfo = userInfo;
		uni.setStorageSync('userInfo', userInfo);
		
	},
	OPEN_HOME(state) {
		state.homeActive = true;
	},
	CLOSE_HOME(state) {
		state.homeActive = false;
	},
};

const actions = {
	USERINFO({
		state,
		commit
	}, force) {
		if (state.userInfo !== null && !force)
			return Promise.resolve(state.userInfo);
		else
			return new Promise(reslove => {
				getUserInfo().then(res => {
					commit("UPDATE_USERINFO", res.data);
					uni.setStorageSync('userInfo', res.data);
					reslove(res.data);
				});
			}).catch(() => {

			});
	}
};

export default {
	state,
	mutations,
	actions
};
