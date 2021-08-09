<template>
	<view>
		<view class="operation" :class="{move: operation_show}">
			<view class="title">操作</view>
			<view class="btns acea-row row-around">
				<view class="btn1" @click="handleDel" v-if="showdel">
					<image src="../../static/images/del2.png" mode=""></image>
					<view>删除</view>
				</view>
				<view class="btn2" @click="handlePhone" v-if="showDinhu">
					<image src="../../static/images/phone.png" mode=""></image>
					<view>打电话</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Operation",
		props:{
			operation_show: {
				type: Boolean,
				default: false
			},
			showdel: {
				type: Boolean,
				default: true
			},
			showDinhu: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		
		methods: {
			
			// 删除
			handleDel(){
				this.$emit("handleDel")
			},
			
			
			// 打电话
			handlePhone(){
				this.$emit("handlePhone")
			},
			
		}
	}
</script>

<style lang="scss">
	.operation {
		width: 100%;
		height: 260rpx;
		padding: 0 20rpx;
		border-top-right-radius: 30rpx;
		border-top-left-radius: 30rpx;
		background-color: #fff;
		position: fixed;
		bottom: -100%;
		left: 0;
		z-index: 61;
		transition: all 0.3s;
		&.move {
			bottom: 0;
		}
		.title {
			padding: 30rpx 0;
			text-align: center;
			font-size: 36rpx;
			color: #333;
			font-weight: bold;
		}
		.btns {
			
			.btn1,.btn2 {
				width: 340rpx;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 10rpx;
				font-size: 30rpx;
				color: #fff;
				image {
					width: 48rpx;
					height: 48rpx;
				}
			}
			.btn1 {
				background-color: #FF4B1A;
			}
			.btn2 {
				background-color: #29CC44;
			}
		}
	}
</style>
