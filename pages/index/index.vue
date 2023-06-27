<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/index/OIP.jpg"></image>
			</view>
			<view class="top-bar-center">
				<image class="logo" src="../../static//images/index/火.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search">
					<image src="../../static/images/index/search.png"></image>
				</view>
				<view class="add">
					<image src="../../static/images/index/add.png"></image>
				</view>
			</view>
		</view>

		<view class="main">
			<view class="friends">
				<view class="friends-list">
					<view class="friends-list-left">
						<text class="tip">1</text>
						<image src="../../static/images/index/apply.png"></image>
					</view>
					<view class="friends-list-right">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">11:18</view>
						</view>
						<view class="info">Learn what HTML landmark roles are, how they improve accessibility, and
							how you can include them on your website effectively.</view>
					</view>
				</view>
			</view>
			<view class="friends" v-for="item in 20">
				<view class="friends-list">
					<view class="friends-list-left">
						<text class="tip">1</text>
						<image src="../../static/images/index/OIP.jpg"></image>
					</view>
					<view class="friends-list-right">
						<view class="top">
							<view class="name">Tom</view>
							<view class="time">11:18</view>
						</view>
						<view class="info">Learn what HTML landmark roles are, how they improve accessibility, and
							how you can include them on your website effectively.</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let a = ref(1)
	console.log(a);
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

		.top-bar {
			position: fixed;
			z-index: 999;
			top: 0;
			left: 0;
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height); // 去除导航栏 顶部沉浸式问题
			// box-sizing: border-box;
			background: $uni-bg-color;
			box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);

			.top-bar-left {
				float: left;
				padding-left: $uni-spacing-col-base;

				image {
					margin-top: 10rpx;
					width: 68rpx;
					height: 68rpx;
					border-radius: 16px;
				}
			}

			.top-bar-center {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				text-align: center;

				.logo {
					padding-top: calc(var(--status-bar-height) + 20rpx);
					width: 88rpx;
					height: 42rpx;
				}
			}

			.top-bar-right {
				float: right;
				padding-right: 14rpx;

				.search,
				.add {
					width: 88rpx;
					height: 88rpx;
					display: inline-block;
				}

				image {
					padding: 18rpx 0 0 18rpx;
					width: 52rpx;
					height: 52rpx;
				}
			}
		}

		.main {
			padding-top: 104rpx;
			// border: 1px solid red;
		}

		.friends-list {
			height: 96rpx;
			padding: 16rpx $uni-spacing-col-base;

			&:active {
				background-color: $uni-bg-color-grey;
			}

			.friends-list-left {
				float: left;
				position: relative;

				image {
					width: 96rpx;
					height: 96rpx;
					border-radius: $uni-border-radius-base;
					// background-color: $uni-color-primary;
				}

				.tip {
					position: absolute;
					z-index: 10;
					top: -6rpx;
					left: 68rpx;
					width: 36rpx;
					height: 36rpx;
					background: $uni-color-warning;
					border-radius: $uni-border-radius-circle;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-inverse;
					text-align: center;
				}
			}

			.friends-list-right {
				padding-left: 128rpx;

				.top {
					height: 50rpx;

					.name {
						float: left;
						font-size: 18px;
						font-weight: 400;
						color: $uni-text-color;
						line-height: 50rpx;
					}

					.time {
						float: right;
						font-size: $uni-font-size-sm;
						color: $uni-text-color-disable;
						line-height: 50rpx;
					}
				}

				.info {
					font-size: $uni-font-size-base;
					color: $uni-text-color-grey;
					margin-top: 8rpx;
					line-height: 40rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>