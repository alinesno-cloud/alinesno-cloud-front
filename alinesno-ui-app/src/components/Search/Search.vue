<template>
	<view>
		<view class="search">
			<image src="../../static/images/search.png" mode=""></image>
			<input type="text" :value="value" :placeholder="placeholder" @input="inputVal" />
		</view>
	</view>
</template>

<script>
	export default {
		name:"Search",
		
		props: {
			placeholder: {
				type: String,
				default: ''
			}
		},
		externalClasses: ['search-class'],
		data() {
			return {
				value: ''
			};
		},
		methods:{
			inputVal(e){
				this.$emit("input", e.target.value)
			}
		}
	}
</script>

<style lang="scss">
	.search {
		width: 100%;
		padding: 0 10rpx;
		display: flex;
		align-items: center;
		height: 70rpx;
		border-radius: 10rpx;
		background-color: #F2F2F2;
		image {
			width: 48rpx;
			height: 48rpx;
		}
		input {
			flex: 1;
			font-size: 30rpx;
		}
	}
</style>
