<template>
	<view class="pl-list">
	  <view class="acea-row row-column row-middle row-center" @click="addCollect">
	  	<view class="lt_start_icon">
	  		<image :src="isCollect ? '/static/images/star_full.png':'/static/images/lt_start_icon.png'"></image>
	  	</view>
	  	<view class="c_f1">
	  		{{isCollect ? '已收藏':'收藏'}}
	  	</view>
	  </view>
	</view>
</template>

<script>
	import { CollectsAdd, removeComment } from "@/api/public.js"
	export default {
		name:"addCollects",
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			isCollect: { // 是否存在列表
				type: [Boolean, Number],
				default: false
			},
			businessId: {
				type: String,
				default: ''
			},
			businessType: {
				type: Number,
				default: 0
			},
			aindex: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				isOpen: false,
				plLists: [],
				openView: false,
				contentMsg: '',
				userInfo: {}
			};
		},
		mounted() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods:{
			addCollect(){
				let data = {
					businessId: this.businessId,
					businessType: this.businessType
				}
				if(this.isCollect){
					removeComment(data).then(res=>{
						if(res.code == 200){
							this.isCollect = false
							this.$emit("callBack", {index: this.aindex, status: false})
							this.$api.msg({title: '取消收藏成功！'})
						}
					})
				}else {
					CollectsAdd(data).then(res=>{
						if(res.code == 200){
							this.$emit("callBack", {index: this.aindex, status: true})
							this.isCollect = true
							this.$api.msg({title: '收藏成功！'})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
.pl-list{
	.c_f1 {
		color: #0D70C7;
		font-size: 24rpx;
	}
	
	.lt_start_icon image {
		width: 48rpx;
		height: 48rpx;
		object-fit: cover;
	}
}
</style>
