<template>
	<view class="pl-list">
		<view>
			<block>
				<view class="acea-row row-between-wrapper mb-20">
					<view class="acea-row row-middle " @click="openPinlun">
						<text>{{ plLists.length }}条评论</text>
						<image class="pinlun-jt-icon ml-10" :class="isOpen ? 'on' : ''" src="/static/images/ra.png" mode=""></image>
					</view>
					<image @click="openAdd" class="pinlun-icon" src="/static/images/comment_icon.png" mode=""></image>
				</view>
				<block v-if="isOpen">
					<view class="p-20 pl-box" v-if="plLists.length > 0">
						<view class="item mb-10" v-for="(item, i) in plLists" :key="i">
							<text class="name" v-if="item.operatorName">{{ item.operatorName }}：</text>
							<text class="detail">
								<text class="font-blue" v-if="item.toUser">@{{ item.toUser }}</text>
								{{ item.content }}
							</text>
							
						</view>
					</view>
				</block>
			</block>
		</view>
		<!-- 弹出评论列表 -->
		<uni-popup ref="addpl" type="bottom">
			<view class="addpin">
				<block>
					<view class="">
						<view class="acea-row row-around p-30  top">
							<view class="acea-row row-middle " @click="closeView">
								<text>{{ plLists.length }}条评论,点击{{ openView ? '关闭' : '展开' }}评论</text>
								<image class="pinlun-jt-icon ml-10" :class="openView ? 'on' : ''" src="/static/images/ra.png" mode=""></image>
							</view>
						</view>
						<!-- 评论列表 -->
						<view class="bg-ff px-30" v-if="openView">
							<scroll-view scroll-y="true" class="scroll-box">
								<view class="item mb-10" v-for="(item, i) in plLists" :key="i">
									<text class="name font-blue" v-if="item.operatorName">{{ item.operatorName }}：</text>
									<text class="detail">
										<text class="font-blue" v-if="item.toUser">@{{ item.toUser }}</text>
										{{ item.content }}
									</text>
								</view>
							</scroll-view>
						</view>
					</view>

					<view class="acea-row row-between-wrapper submit-box pt-20 px-30">
						<view class="input"><input type="text" placeholder="请输入评论内容" :value="contentMsg" @input="pingluVal" /></view>
						<view class="submit" @click="submitBtn">发送</view>
					</view>
				</block>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { getPinlun, addComment } from '@/api/public.js';
export default {
	name: 'pinglunList',
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		isList: {
			// 是否存在列表
			type: Boolean,
			default: true
		},

		businessId: {
			type: String,
			default: ''
		},
		businessType: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			isOpen: false,
			plLists: [],
			openView: false,
			contentMsg: '',
			userInfo: {},
			isPinlun: false
		};
	},
	mounted() {
		this.getPinlun();
		this.userInfo = uni.getStorageSync('userInfo');
	},
	onBackPress(e) {
		console.log(e)
		if (e.from === 'backbutton') {
			if (!this.isPinlun) {
				this.isPinlun = false;
			} else {
				uni.navigateBack();
			}
			return true;
		}
	},
	methods: {
		pingluVal(e) {
			this.contentMsg = e.target.value;
		},
		submitBtn() {
			if (!this.contentMsg) return this.$api.msg({ title: '评论内容不能为空!' });
			let data = {
				businessId: this.businessId, // 业务Id
				userId: this.userInfo.userId, //用户Id
				businessType: this.businessType, // 业务类型
				content: this.contentMsg, // 评论内容
				toUserId: this.userInfo.userId, // 提到的用户ID
				fromUserId: this.userInfo.userId, // 发起评论用户的ID
				billType: '', //消息类型
				atUserId: '' //在评论里@的人的id
			};
			addComment(data).then(res => {
				if (res.code == 200) {
					this.$api.msg({ title: '评论成功！', icon: 'success' });
					this.contentMsg = '';
					this.getPinlun();
				}
			});
		},
		openAdd() {
			this.$refs.addpl.open();
			this.isPinlun = true
			this.openView = true;
		},
		getPinlun() {
			let data = {
				businessId: this.businessId,
				businessType: this.businessType
			};
			getPinlun(data).then(res => {
				this.plLists = res.data;
			});
		},
		closeView() {
			this.isPinlun = false
			this.openView = !this.openView;
		},
		openPinlun() {
			this.isOpen = !this.isOpen;
		},
		delectPinlun(item) {}
	}
};
</script>

<style lang="scss">
.pl-list {
	border-top: 1px solid #e6e6e6;
	padding: 20rpx 0 0rpx;
	.pl-box {
		width: 690rpx;
		background-color: #f2f2f2;
		border-radius: 12rpx;
		.name {
			color: #0c70c6;
		}
	}
	.addpin {
		// padding: 30rpx;
		.top {
			background-color: #edf4fa;
			border-radius: 30rpx 30rpx 0 0;
		}
		.item {
			padding: 20rpx 0;
			border-bottom: 1rpx solid #e6e6e6;
		}
		.scroll-box {
			width: 100%;
			height: 700rpx;
		}
		.submit-box {
			background-color: #f2f2f2;
			padding-bottom: 80rpx;
			z-index: 99;
		}

		.submit {
			width: 150rpx;
			height: 70rpx;
			background-color: #0c70c6;
			color: #ffffff;
			text-align: center;
			line-height: 70rpx;
			border-radius: 12rpx;
		}

		.input {
			width: 500rpx;
			background-color: #ffffff;
			padding: 20rpx;
			border-radius: 8rpx;
		}
	}
}
</style>
