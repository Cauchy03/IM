<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="goUserHome">
				<image src="../../static/images/index/OIP.jpg"></image>
			</view>

			<view class="top-bar-center" >
				<image class="logo" src="../../static//images/index/火.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="goSearch">
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
						<text class="tip">1111</text>
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

	const goSearch = () => {
		uni.navigateTo({
			url: '../search/search'
		})
	}

	const goUserHome = () => {
		console.log(1);
		uni.navigateTo({
			url: '../userHome/userHome'
		})
	}
</script>

<style lang="scss" scoped>
	@import '../../commons/css/header.scss';

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: env(safe-area-inset-bottom);

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
					top: -8rpx;
					left: 68rpx;
					min-width: 20rpx;
					padding: 0 8rpx;
					width: 36rpx;
					height: 36rpx;
					background: $uni-color-warning;
					border-radius: 18rpx;
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