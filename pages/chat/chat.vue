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

		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true">
			<view class="chat-main">
				<view class="chat-ls" v-for="(item, index) in msg" :key="item.id">
					<view class="chat-time">{{myFun.dateTime(item.time)}}</view>
					<view class="msg-content msg-left">
						<image :src="item.imgurl" class="user-img"></image>
						<view class="message" v-if="item.types === 0">
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types === 1">
							<image class="msg-image" src="../../static/images/index/OIP.jpg" mode="widthFix"></image>
						</view>
					</view>
				</view>

				<view class="chat-ls">
					<view class="chat-time">14:00</view>
					<view class="msg-content msg-right">
						<image src="../../static/images/index/OIP.jpg" class="user-img"></image>
						<view class="message">
							<view class="msg-text">你好，我的朋友，多日不见，甚是想念。</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script setup>
	import messages from '../../commons/js/mock.js'
	import myFun from '../../untils/formatter.js'
	import {
		ref
	} from "vue";
	import {
		onLoad
	} from '@dcloudio/uni-app'

	// 返回上一次层
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	let msg = ref([])
	msg.value = messages
	const getData = () => {
		msg.value = msg.value.map(item => {

			if (item.types == 1) {
				item.message = '../../static/' + item.message
			}

			return {
				id: item.id,
				imgurl: '../../static/' + item.imgurl,
				message: item.message,
				types: item.types,
				time: item.time,
				tip: item.tip,
			}
		}).reverse()
	}

	// 时间戳处理
	const handlerTime = () => {

	}
	onLoad(() => {
		getData()
	})
</script>

<style lang="scss">
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

		.chat-main {
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-top: 100rpx;
			padding-bottom: 120rpx;
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