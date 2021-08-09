<template>
	<view class="pl-list">
		<uni-popup ref="popup" type="bottom">
			
		<view v-if="isList">
			<block>
				<view class="acea-row row-around py-20 px-30 pl-top">
					<view class="acea-row row-middle " @click="close">
						<text>{{list.length}}条评论,点击关闭评论</text>
						<image class="pinlun-jt-icon ml-10" :class="isOpen ? 'on':''"  src="/static/images/ra.png" mode=""></image>
					</view>
				</view>
				
				<scroll-view scroll-y="true" class="scroll-box">
					<view class="p-20 pl-box" v-if="list.length > 0">
						<view class="item mb-10" v-for="(item,i) in list" :key='i'>
							<text class="name">
								{{item.commentUser}}：
							</text>
							<text class="detail">
								{{item.commentContent}}
							</text>
						</view>
					</view>
					<view class="p-20 pl-box" v-else>
						<view style="text-align: center;">暂无评论</view>
					</view>
				</scroll-view>
				
				<view class="acea-row row-between submit-box">
					<view class="input">
						<input type="text" placeholder="请输入评论内容" v-model="content" />
					</view>
					<view class="submit" @click="submitBtn">发送</view>
				</view>
				
			</block>
		</view>
	
	</uni-popup>
	
	</view>
</template>

<script>
	import { getPinlun , addComment } from "@/api/public.js"
	export default {
		name:"addcomment",
		props: {
			list: {
				type: Array,
				default:()=>[
					{commentUser:'李晓蕾',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
					{commentUser:'李晓蕾',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
					{commentUser:'关晓宇',commentContent:'检查通过，一切正常!'},
				]
			},
			isList: { // 时候存在列表
				type: Boolean,
				default: true
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
			// message: 消息提示 ; dialog : 对话框
			businessId: {
				type: String,
				default: ''
			},
			businessType: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				isOpen: true,
				plLists: [],
				content:'',
				
			};
		},
		onLoad() {
			this.getPinlun()
		},
		methods:{
			

			
			//发送
			submitBtn(){
				let that = this;
				that.close();
				return
				let data = {
					businessId:'',
					userId:'',
					businessType:'',
					content:that.content,
					toUser:'',
					toUserId:'',
					fromUserId:'',
					billType:''
				}
				addComment(data).then(res=>{
					
				}).catch(err=>{
					
				})
			},
			//获取评论
			getPinlun(){
				let data = {
					businessId: this.businessId,
					businessType: this.businessType
				}
				getPinlun(data).then(res=>{
					this.plLists = res.data
				})
			},
			//打开组件
			dayin(){
				this.open();
			},
			//打开弹框
			open() {
					this.$refs.popup.open()
			},
			//关闭弹框
			close() {
					this.$refs.popup.close()
			},
			
			delectPinlun(item){
				
			},
			
		}
	}
</script>

<style lang="scss">
.pl-list{
	
	.pl-top{
		background-color: #EDF4FA;
		border-top-left-radius: 15rpx;
		border-top-right-radius: 15rpx;
	}
	.pl-box{
		width: 100%;
		padding: 30rpx;
		min-height: 500rpx;
		background-color: #F2F2F2;
		background-color: #FFFFFF;
		.name{
			color: #0C70C6;
		}
	}
	
	.item{
		padding: 20rpx 0;
		border-bottom: 1rpx solid #E6E6E6;
	}
	.scroll-box{
		width: 100%;
		height: 500rpx;
	}
	.submit-box{
		background-color: #F2F2F2;
		padding: 30rpx 30rpx 80rpx 30rpx;
		z-index: 99;
	}
	
	.submit{
		width: 150rpx;
		height: 80rpx;
		background-color: #007AFF;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 12rpx;
	}
	
	.input{
		width: 500rpx;
		background-color: #FFFFFF;
		padding: 20rpx;
		border-radius: 8rpx;
	}
	
}
</style>
