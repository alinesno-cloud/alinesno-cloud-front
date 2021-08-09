<template>
	<view class="null-box">
		<view class="p-30 item acea-row row-column row-center row-middle" v-if="isString == 1">
			<image class="img" src="/static/wsj.png" mode="aspectFit"></image>
			<view class="btn-1" @click="goback">
				返回
			</view>
		</view>
		<view class="p-30 item acea-row row-column row-center row-middle" v-if="isString == 2">
			<image class="img" src="/static/jzsxb.png" mode="aspectFit"></image>
			<view class="btn-1" @click="chonshiBtn">
				重试
			</view>
		</view>
		<view class="p-30 item acea-row row-column row-center row-middle" v-if="isString == 3">
			<image class="img" src="/static/wwl.png" mode="aspectFit"></image>
			<view class="btn-1" @click="chonshiBtn">
				重试
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"dataSuccess",
		props: {
			isString: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				uni.navigateBack({
					delta: 1
				})
			},
			chonshiBtn(){
				this.$emit("reflash")
			}
		}
	}
</script>

<style lang="scss">
.null-box{
	.item{
		.img{
			width: 690rpx;
			height: 610rpx;
			margin: 30rpx 0;
		}
	}
	.btn-1{
		width: 180rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #0062CC;
		color: #FFFFFF;
		border-radius: 12rpx;
		margin-top: 30rpx;
	}
}
</style>
