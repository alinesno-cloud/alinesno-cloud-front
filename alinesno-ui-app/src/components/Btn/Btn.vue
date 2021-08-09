<template>
	<view>
		<view class="btn_wrap" :style="'padding-bottom:' + buBottom + 'rpx'">
			<view class="btn" @click="comBtn">{{name}}</view>
		</view>
		<!-- 占位 -->
		<view class="btn_margin" :style="'padding-bottom:' + buBottom + 'rpx'"></view>
	</view>
</template>

<script>
	export default {
		name:"Btn",
		props: {
			name: {
				type: String,
				default: '确定'
			}
		},
		data() {
			return {
				buBottom: getApp().globalData.buBottom
			};
		},
		
		
		methods: {
			// 按钮
			comBtn(){
				this.$emit("comBtn")
			},
		}
		
	}
</script>

<style lang="scss">
	.btn_wrap {
		width: 100%;
		height: 110rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: content-box;
		background-color: #fff;
		box-shadow: 0 -10rpx 10rpx rgba(0,0,0,.05);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 50;
	}
	
	.btn_margin {
		height: 100rpx;
		box-sizing: content-box;
	}
	
	.btn {
		width: 690rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
		background-color: $themeColor;
		font-size: 30rpx;
		color: #fff;
	}
	
</style>
