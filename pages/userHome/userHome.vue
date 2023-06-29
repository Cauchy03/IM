<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/commons/back.png" class="back-img" @tap="goBack"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/userHome/more.png"></image>
				</view>
			</view>
		</view>

		<view class="background">
			<view class="mask"></view>
			<image src="../../static/images/index/OIP.jpg" mode="aspectFill"></image>
		</view>

		<view class="main">
			<view class="avatar" :animation="animationAvatarData">
				<view class="sex">
					<image src="../../static/images/userHome/woman.png"></image>
				</view>
				<image src="../../static/images/index/OIP.jpg" mode="aspectFill" class="user-img"
					:animation="animationAvatarData"></image>
			</view>
			<view class="description">
				<view class="remark">Tom</view>
				<view class="user-name">昵称：小美</view>
				<view class="signature">
					逃跑吧，跑出这满是世俗的生活。
				</view>
			</view>
		</view>
		<button class="friend-application" @tap="addFriendAnimate">添加好友</button>

		<view class="add-friend" :style="{height: addHeight + 'px',bottom: - addHeight + 'px' }"
			:animation="animationTextareaData">
			<view class="name">Tom</view>
			<textarea value="请求加为好友" maxlength="120" class="add-content"></textarea>
		</view>
		<view class="add-btn" :animation="animationBtnData">
			<button class="close" size="mini" @tap="addFriendAnimate">取消</button>
			<button class="send" size="mini">发送</button>
		</view>
	</view>
</template>

<script setup>
	import {
		onReady
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from "vue";

	// 返回上一次层
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	// 消息框自适应
	let addHeight = ref(undefined)
	onReady(() => {
		const query = uni.createSelectorQuery().in(this);
		query.select('.background').boundingClientRect(data => {
			console.log("得到布局位置信息" + JSON.stringify(data));
			console.log("节点离页面顶部的距离为" + data.top);
			addHeight.value = data.height - 186
			console.log(addHeight.value);
		}).exec();
	})

	// 添加好友消息框动画
	let animationTextareaData = ref(null)
	let animationBtnData = ref(null)
	let animationAvatarData = ref(null)
	let isAdd = ref(false)
	const addFriendAnimate = () => {
		isAdd.value = !isAdd.value
		let animationTextarea = uni.createAnimation({
			duration: 500,
			timingFunction: 'ease',
		})

		let animationBtn = uni.createAnimation({
			duration: 500,
			timingFunction: 'ease',
		})

		let animationAvatar = uni.createAnimation({
			duration: 500,
			timingFunction: 'ease',
		})

		if (isAdd.value) {
			animationTextarea.bottom(0).step()
			animationBtn.bottom(140 + 'rpx').step()
			animationAvatar.width(260 + 'rpx').height(260 + 'rpx').step()
		} else {
			animationTextarea.bottom(-addHeight.value * 2 + 'rpx').step()
			animationBtn.bottom(-104 + 'rpx').step()
			animationAvatar.width(400 + 'rpx').height(400 + 'rpx').step()
		}
		animationTextareaData.value = animationTextarea.export()
		animationBtnData.value = animationBtn.export()
		animationAvatarData.value = animationAvatar.export()
	}
</script>

<style lang="scss">
	@import '../../commons/css/header.scss';

	.content {
		.top-bar-left {

			.back-img {
				margin-top: 17rpx;
				width: 60rpx;
				height: 60rpx;
			}
		}

		.background {
			z-index: -2;
			position: fixed;
			top: 0;
			lef: 0;
			width: 100%;
			height: 100%;

			.mask {
				width: 100%;
				height: 100%;
				background-color: #eee;
			}

			image {
				opacity: 0.6;
				position: absolute;
				width: 110%;
				height: 110%;
				left: -10rpx;
				top: -10rpx;
				filter: blur(16px);
			}
		}

		.main {
			padding-top: 148rpx;
			text-align: center;

			.avatar {
				width: 400rpx;
				height: 400rpx;
				margin: 0 auto;
				position: relative;
				z-index: 1;

				.sex {
					position: absolute;
					bottom: 10rpx;
					right: 10rpx;
					width: 64rpx;
					height: 64rpx;
					background: #FF5D5B;
					border-radius: 28px;
					z-index: 1;
					text-align: center;

					image {
						padding: 16rpx;
						width: 32rpx;
						height: 32rpx;
					}
				}

				.user-img {
					width: 400rpx;
					height: 400rpx;
					border: 3px solid #FFFFFF;
					border-radius: 48rpx;
					box-shadow: 0px 36rpx 40rpx 0px rgba(39, 48, 50, 0.1);
				}
			}

			.description {
				padding-top: 42rpx;

				.remark {
					font-size: 52rpx;
					color: $uni-text-color;
					line-height: 74rpx;
				}

				.user-name {
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					line-height: 40rpx;
				}

				.signature {
					padding: 20rpx 100rpx;
					width: 552rpx;
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					line-height: 48rpx;
					font-weight: 300;
				}
			}
		}

		.friend-application {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 70rpx;
			width: 90%;
		}

		.add-friend {
			position: fixed;
			// bottom: 0;
			width: 100%;
			// height: 1252rpx;
			box-sizing: border-box;
			background: $uni-bg-color;
			border-radius: 10px;
			padding: 0 56rpx;

			.name {
				padding-top: 168rpx;
				font-size: 52rpx;
				color: $uni-text-color;
				line-height: 74rpx;
			}

			.add-content {
				padding: 18rpx 22rpx;
				box-sizing: border-box;
				width: 100%;
				height: 320rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				line-height: 44rpx;
			}
		}

		.add-btn {
			position: fixed;
			left: 0;
			right: 0;
			bottom: -104rpx;
			display: flex;
			padding: 0 12rpx;
			z-index: 999;

			.close {
				width: 172rpx;
				height: 80rpx;
				background: rgba(39, 40, 50, 0.10);
				border-radius: $uni-border-radius-base;
				line-height: 80rpx;
			}

			.send {
				width: 480rpx;
				height: 80rpx;
				background: #FFE431;
				border-radius: $uni-border-radius-base;
				line-height: 80rpx;
			}
		}
	}
</style>