<template>
	<view>
		<view class="custom" :style="'padding-top:' + statusBarHeight + 'px'">
			<view class="custom_row">
				<!-- 返回按钮 -->
				<!-- <view class="back_btn" @click="backClick" v-if="backShow"></view> -->
				<image class="back_btn" src="/static/back.png" @click="backClick" v-if="backShow" mode="aspectFit"></image>
				<view class="title">{{title}}</view>
				<!-- 刷新按钮 -->
				<view class="tools_btn" @click="reflash" v-if="reflashShow">
					<view>刷新</view>
					<image src="/static/images/reflash.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 列表按钮 -->
				<view class="tools_btn" @click="minu" v-if="minuShow">
					<view>列表</view>
					<image src="/static/images/minu.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 地图按钮 -->
				<view class="tools_btn" @click="addressBtn" v-if="addressShow">
					<view>地图</view>
					<image src="/static/images/local.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 分享按钮 -->
				<view class="tools_btn" @click="shareBtn" v-if="shareShow">
					<view>分享</view>
					<image src="/static/images/share.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 筛选按钮 -->
				<view class="tools_btn" @click="sortBtn" v-if="sortShow">
					<view>筛选</view>
					<image src="/static/images/sort.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 取消按钮 -->
				<view class="tools_btn" @click="cancelBtn" v-if="cancelShow">
					<view>取消</view>
				</view>
				<!-- 扫一扫 -->
				<view class="tools_btn" @click="scanBtn" v-if="scanShow">
					<image src="/static/images/scan.png" class="tools_icon" mode=""></image>
				</view>
				<!-- 编辑 -->
				<view class="tools_btn" @click="editBtn" v-if="editShow">
					<view>编辑</view>
					<image src="/static/images/edit.png" class="tools_icon" mode=""></image>
				</view>
				
				<view class="tools_btn" @click="jianrenBtn" v-if="jianrenShow">
					兼任
				</view>
				<!-- 全选 -->
				<view class="qx-btn" @click="editHide" v-if="editHide1 && allShow">
					<view>取消编辑</view>
				</view>
				<view class="tools_btn" @click="allBtn" v-if="allShow">
					<view>{{allTitle}}</view>
				</view>
				
				<view class="tools_btn" @click="rightBtn" v-if="showRight || rightTitle.length > 0">
					<view>{{rightTitle}}</view>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="custom_margin" :style="'padding-top:' + statusBarHeight + 'px'"></view>
	</view>
</template>

<script>
	
	export default {
		name:"Custom",
		
		props: {
			title: {
				type: String,
				default: ''
			},
			rightTitle: {
				type: String,
				default: ''
			},
			allTitle: {
				type: String,
				default: ''
			},
			// 暴露刷新按钮显示或隐藏
			backShow: {
				type: Boolean,
				default: false
			},
			jianrenShow: {
				type: Boolean,
				default: false
			},
			// 暴露刷新按钮显示或隐藏
			reflashShow: {
				type: Boolean,
				default: false
			},
			showRight: {
				type: Boolean,
				default: false
			},
			// 暴露列表按钮显示或隐藏
			minuShow: {
				type: Boolean,
				default: false
			},
			
			// 暴露地图按钮显示或隐藏
			addressShow: {
				type: Boolean,
				default: false
			},
			
			// 暴露分享按钮显示或隐藏
			shareShow: {
				type: Boolean,
				default: false
			},
			
			// 暴露筛选按钮显示或隐藏
			sortShow: {
				type: Boolean,
				default: false
			},
			
			// 暴露筛选按钮显示或隐藏
			cancelShow: {
				type: Boolean,
				default: false
			},
			
			// 扫一扫
			scanShow: {
				type: Boolean,
				default: false
			},
			
			// 编辑
			editShow: {
				type: Boolean,
				default: false
			},
			// 编辑
			editHide1: {
				type: Boolean,
				default: false
			},
			// 全选
			allShow: {
				type: Boolean,
				default: false
			},
			
		},
		
		externalClasses: ['abc'],
		
		data() {
			return {
				statusBarHeight: 0
			};
		},
		
		
		created() {
			
			// 刘海
			this.statusBarHeight = getApp().globalData.statusBarHeight
		},

		methods: {
			
			backClick(){
				uni.navigateBack({
					delta: 1
				})
			},
			rightBtn(){
				this.$emit("rightClick")
			},
			// 兼任
			jianrenBtn(){
				this.$emit("jianren")
			},
			// 刷新
			reflash(){
				this.$emit("reflash")
			},
			
			// 列表
			minu(){
				this.$emit("minu")
			},
			editHide(){
				this.$emit("editHideBtn")
			},
			// 地图
			addressBtn(){
				this.$emit("addressBtn")
			},
			
			// 分享
			shareBtn(){
				this.$emit("shareBtn")
			},
			
			// 筛选
			sortBtn(){
				this.$emit("sortBtn")
			},
			
			// 取消
			// 筛选
			cancelBtn(){
				this.$emit("cancelBtn")
			},
			
			// 扫一扫
			scanBtn(){
				this.$emit("scanBtn")
			},
			
			// 编辑
			editBtn(){
				this.$emit("editBtn")
			},
			
			// 全选
			allBtn(){
				this.$emit("allBtn")
			},
		}
		
	}
</script>

<style lang="scss">
	.custom {
		width: 100%;
		height: 45px;
		box-sizing: content-box;
		background-color: #0D70C7;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 98;
		.custom_row {
			padding: 0 20upx;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.title {
				font-size: 32upx;
				color: #fff;
				font-weight: bold;
			}
		}
	}
	
	.custom_margin {
		height: 45px;
		box-sizing: content-box;
	}
	
	.back_btn {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: 50%;
		margin-top: -25rpx;
		left: 30rpx;
		// &:before,&:after {
		// 	display: block;
		// 	content: '';
		// 	width: 14px;
		// 	height: 3px;
		// 	background-color: #fff;
		// 	position: absolute;
		// 	left: 0;
		// }
		// &:before {
		// 	top: 34rpx;
		// 	transform: rotate(-45deg);
		// }
		// &:after {
		// 	bottom: 34rpx;
		// 	transform: translateY(-50%);
		// 	transform: rotate(45deg)
		// }
	}
	
	.tools_btn {
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		color: #fff;
		position: absolute;
		top: 0;
		right: 30rpx;
		.tools_icon {
			width: 48rpx;
			height: 48rpx;
			margin-left: 10rpx;
		}
	}
	.qx-btn{
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		color: #fff;
		position: absolute;
		top: 0;
		left: 100rpx;
	}
</style>
