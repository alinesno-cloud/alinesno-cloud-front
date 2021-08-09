<template>
	<view>
		<view class="footer_nav" :style="{ 'padding-bottom': buBottom + 'rpx' }">
			<navigator
				class="footer_nav_item"
				:class="activeIndex === index ? 'on' : ''"
				:url="item.path"
				open-type="reLaunch"
				hover-class="none"
				v-for="(item, index) in tabbar"
				:key="index"
			>
				<image :src="activeIndex === index ? item.selectIcon : item.icon"></image>
				<view class="footer_nav_text">{{item.name }}</view>
			</navigator>
			<!-- <navigator class="footer_nav_item" :class="activeIndex===index?'on':''" :url="index==0?firstLink[3]:item.path" open-type="reLaunch" hover-class="none" v-for="(item,index) in tabbar" :key="index">
				<image :src="activeIndex===index?item.selectIcon:item.icon"></image>
				<view class="footer_nav_text">{{index==0?firstNavName[3]:item.name}}</view>
			</navigator> -->
			<view class="quick_btn" @click="is_quick = true">
				<image src="/static/images/jia.png" mode=""></image>
				<view class="name">快捷</view>
			</view>
		</view>
		<!-- 底部间距占位 -->
		<view class="footer_margin" :style="{ 'padding-bottom': buBottom + 'rpx' }"></view>

		<!-- 自定义常用应用 -->
		<view class="mask" v-if="is_quick" @click="is_quick = false"></view>
		<view class="diy" :class="{ up: is_quick }">
			<view class="nav">
				<view class="nav_link" @click="goPage('/pages/launch/jianchaRenwu')">
					<image src="/static/images/d1.png" mode=""></image>
					<view class="name">检查任务</view>
				</view>
				<view class="nav_link" @click="goPage('/pages/launch/sujijiancha')">
					<image src="/static/images/d2.png" mode=""></image>
					<view class="name">随机检查</view>
				</view>
				<view class="nav_link" @click="goPage('/pages/launch/special')">
					<image src="/static/images/d3.png" mode=""></image>
					<view class="name">专项检查</view>
				</view>
				<view class="nav_link" @click="goPage('/pages/riskControl/riskControl/riskControl')">
					<image src="/static/images/d4.png" mode=""></image>
					<view class="name">风险源监管</view>
				</view>
				<view class="nav_link" @click="goPage('/pages/danger/index')">
					<image src="/static/images/d5.png" mode=""></image>
					<view class="name">危险作业</view>
				</view>
				<view class="nav_link" @click="goPage('/pages/safetyCheck/safetyCheck/safetyCheck')">
					<image src="/static/images/d6.png" mode=""></image>
					<view class="name">安全验收</view>
				</view>
				<view class="nav_link" @click="openSan">
					<image src="/static/images/d7.png" mode=""></image>
					<view class="name">扫一扫</view>
				</view>
				<view class="nav_link" @click="openImg">
					<image src="/static/images/d8.png" mode=""></image>
					<view class="name">拍照</view>
				</view>
			</view>
			<image src="/static/images/s_close_icon.png" class="close" mode="" @click="is_quick = false"></image>
		</view>
	</view>
</template>

<script>
import { addCamera } from '@/utils/index.js';
export default {
	props: {
		activeIndex: {
			type: Number,
			default: 0
		},
		firstNameIndex: {
			type: Number,
			default: 0
		},
		firstLinkIndex: {
			type: Number,
			default: 0
		}
	},

	data() {
		return {
			tabbar: [
				{
					path: '/pages/index/indexYinhuan',
					name: '隐患排查',
					icon: '/static/images/arrow-circle-down@2x.png',
					selectIcon: '/static/images/worry.png'
				},
				{
					path: '/pages/application/application',
					name: '应用',
					icon: '/static/images/layout@2x.png',
					selectIcon: '/static/images/appcation.png'
				},
				{},
				{
					path: '/pages/cart/index',
					name: '大数据',
					icon: '/static/images/pie-chart@2x.png',
					selectIcon: '/static/images/data.png'
				},
				{
					path: '/pages/mine/mine',
					name: '我的',
					icon: '/static/images/person@2x.png',
					selectIcon: '/static/images/mine.png'
				}
			],

			firstNavName: ['隐患排查', '危险作业', '风险管控', '安全验收'],

			firstLink: ['/pages/index/indexYinhuan', '/pages/danger/index', '/pages/riskControl/riskControl/riskControl', '/pages/safetyCheck/safetyCheck/safetyCheck'],

			// iphoneX以上机型底部黑条
			buBottom: 0,

			// 快捷弹窗
			is_quick: false,
			firstNameIndexA: 0,
			firstLinkIndexA: 0
		};
	},
	onReady() {},
	created() {
		// #ifdef H5
		this.isIPhoneX();
		// #endif
		// if(this.firstNavName[this.firstNameIndex] !='' && this.firstLink[this.firstLinkIndex] !='' ){
		// if (this.firstNameIndex + 1 != '' && this.firstLinkIndex + 1 != '') {
		// 	let name = {
		// 		name: this.firstNavName[this.firstNameIndex],
		// 		url: this.firstLink[this.firstLinkIndex]
		// 	};
		// 	let item = {
		// 		index: this.firstNameIndex,
		// 		data: name
		// 	};
		// 	uni.setStorageSync('indexPage', item);
		// }
		// #ifdef MP-WEIXIN
		this.isWeiXinPhone();
		// #endif
		let defaultData = uni.getStorageSync('indexPage');
		if ((defaultData + 1) && (defaultData.index + 1)) {
			this.firstNameIndexA = defaultData.index;
			this.firstLinkIndexA = defaultData.index;
			this.tabbar[0].name = this.firstNavName[this.firstNameIndexA]
			this.tabbar[0].path = this.firstLink[this.firstLinkIndexA]
		}
	},

	methods: {
		goPage(url) {
			uni.navigateTo({
				url: url
			});
		},
		openSan() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		},
		openImg() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['camera'], //这要注意，camera掉拍照，album是打开手机相册
				success: res => {
					const tempFilePaths = res.tempFilePaths;
					addCamera(tempFilePaths[0]);
				}
			});
		},
		// 判断是否iphoneX
		// #ifdef H5
		isIPhoneX(fn) {
			var u = navigator.userAgent;
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if (isIOS) {
				if (screen.height >= 812 && screen.width >= 375) {
					this.buBottom = 68;
				} else {
					this.buBottom = 0;
				}
			}
		},
		// #endif

		// #ifdef MP-WEIXIN
		isWeiXinPhone() {
			let that = this;
			wx.getSystemInfo({
				success: res => {
					// console.log('手机信息res'+res.model)
					let modelmes = res.model;
					if (modelmes.search('iPhone X') != -1) {
						that.isIphoneX = true;
						that.buBottom = 68;
					}
				}
			});
		}
		// #endif
	}
};
</script>

<style lang="scss" scoped>
.footer_nav {
	width: 100%;
	height: 110rpx;
	display: flex;
	justify-content: space-around;
	box-sizing: content-box;
	background-color: #fff;
	box-shadow: 0 -10rpx 20rpx rgba(0, 0, 0, 0.05);
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 20;
	padding: 0 20rpx;
	.footer_nav_item {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding-bottom: 10rpx;
		width: 142rpx;
		height: 110rpx;
		font-size: 22rpx;
		position: relative;
		image {
			width: 60rpx;
			height: 60rpx;
		}
		&.on {
			color: $themeColor;
		}
	}
	.quick_btn {
		width: 142rpx;
		padding-top: 70rpx;
		text-align: center;
		font-size: 22rpx;
		position: absolute;
		top: 0;
		left: 50%;
		// margin-left: -60rpx;
		transform: translateX(-50%);
		&:after {
			display: block;
			content: '';
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			background-color: #fff;
			box-shadow: 0 -10rpx 20rpx rgba(0, 0, 0, 0.05);
			position: absolute;
			top: -50rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 5;
		}
		image {
			width: 120rpx;
			height: 120rpx;
			position: absolute;
			top: -40rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 6;
		}
	}
}
.footer_margin {
	height: 110rpx;
	box-sizing: content-box;
}

.diy {
	width: 100%;
	padding: 30rpx;
	padding-bottom: 220rpx;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	background-color: #fff;
	position: fixed;
	bottom: -100%;
	left: 0;
	z-index: 60;
	transition: all 0.3s;
	&.up {
		bottom: 0;
	}
	.nav {
		display: flex;
		flex-wrap: wrap;
		.nav_link {
			width: 25%;
			padding: 20rpx 0;
			text-align: center;
			font-size: 26rpx;
			color: #333;
			image {
				width: 100rpx;
				height: 100rpx;
				margin-bottom: 16rpx;
			}
		}
	}
	.close {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		bottom: 100rpx;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
