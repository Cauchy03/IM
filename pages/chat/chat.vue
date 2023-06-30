<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="goBack">
				<image src="../../static/images/commons/back.png" class="back-img" @tap="goBack"></image>
			</view>
			<view class="top-bar-center">Tom</view>
			<view class="top-bar-right">
				<view class="avatar">
					<image src="../../static/logo.png"></image>
				</view>
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToview">
			<view class="chat-main" :style="{'padding-bottom': pdBottom + 'px'}">
				<view class="chat-ls" v-for="(item, index) in msgList" :key="item.id" :id="item.id">
					<view class="chat-time">{{myFun.dateTime(item.time)}}</view>
					<view class="msg-content"
						:class="{'msg-left': item.isMe === false, 'msg-right':item.isMe === true}">
						<image :src="item.imgurl" class="user-img"></image>
						<view class="message" v-if="item.types === 0">
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types === 1">
							<image class="msg-image" src="../../static/images/index/OIP.jpg" mode="widthFix"
								@tap="previewImage"></image>
						</view>
					</view>
				</view>

				<!-- <view class="chat-ls">
					<view class="chat-time">14:00</view>
					<view class="msg-content msg-right">
						<image src="../../static/images/index/OIP.jpg" class="user-img"></image>
						<view class="message">
							<view class="msg-text">你好，我的朋友，多日不见，甚是想念。</view>
						</view>
					</view>
				</view> -->
			</view>
			<view class="box"></view>
		</scroll-view>
		<Submit @msg="sendMsg" @submitHeight="chageBtmHeight">
		</Submit>
	</view>
</template>

<script setup>
	import messages from '../../commons/js/mock.js'
	import myFun from '../../untils/formatter.js'
	import {
		nextTick,
		ref
	} from "vue";
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		nanoid
	} from 'nanoid';

	// 返回上一次层
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	let msgList = ref([])
	let scrollToview = ref('')
	msgList.value = messages
	const getData = () => {
		msgList.value = msgList.value.map(item => {
			if (item.types == 1) {
				item.message = '../../static/' + item.message
			}

			return {
				id: item.id,
				imgurl: '../../static/' + item.imgurl,
				message: item.message,
				isMe: item.isMe,
				types: item.types,
				time: item.time,
				tip: item.tip,
			}
		}).reverse()
		scrollTovBottom()
	}

	let imgMsg = ref([])
	const previewImage = () => {
		// 预览图片
		uni.previewImage({
			urls: ['../../static/images/index/OIP.jpg', '../../static/logo.png'],
			longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				success: function(data) {
					console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	}

	// 发送消息
	const sendMsg = (msg) => {
		msgList.value.push({
			id: nanoid() + 1,
			imgurl: '../../static/images/index/OIP.jpg',
			message: msg,
			isMe: true,
			types: 0,
			time: new Date(),
			tip: 9
		})
		scrollTovBottom()
	}

	// 底部高度变化
	let pdBottom = ref('60')
	const chageBtmHeight = (height) => {
		pdBottom.value = height
		scrollTovBottom()
	}

	// 滚动到底部
	let scrollTovBottom = () => {
		nextTick(() => {
			scrollToview.value = msgList.value[msgList.value.length - 1].id
		})
	}

	onLoad(() => {
		getData()
	})
</script>

<style lang="scss" scoped>
	@import '../../commons/css/header.scss';

	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background: #F4F4F4;
	}

	.top-bar {
		background: #F4F4F4;
		box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);
	}

	.chat {
		height: 100%;

		.box {
			height: var(--status-bar-height);
			width: 100%;
		}

		.chat-main {
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-top: 100rpx;
			display: flex;
			flex-direction: column;
		}

		.chat-ls {
			.chat-time {
				font-size: $uni-font-size-base;
				color: rgba(39, 40, 50, 0.30);
				line-height: 34rpx;
				padding: 20rpx 0;
				text-align: center;
			}

			.msg-content {
				display: flex;
				padding: 20rpx 0;

				.user-img {
					width: $uni-img-size-sm;
					height: $uni-img-size-sm;
					;
					border-radius: $uni-border-radius-base;
				}

				.message {
					max-width: 480rpx;

					.msg-text {
						font-size: $uni-font-size-lg;
						color: rgba(39, 40, 50, 1);
						line-height: 44rpx;
						padding: 16rpx 24rpx;
					}

					.msg-image {
						max-width: 400rpx;
						border-radius: $uni-border-radius-base;
					}
				}
			}

			.msg-left {
				flex-direction: row;

				.msg-text {
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0 20rpx 20rpx 20rpx;
				}

				.msg-image {
					margin-left: 16rpx;
				}
			}

			.msg-right {
				flex-direction: row-reverse;

				.msg-text {
					margin-right: 16rpx;
					background: #FFE431;
					border-radius: 20rpx 0 20rpx 20rpx;
				}

				.msg-image {
					margin-left: 16rpx;
				}
			}
		}
	}
</style>