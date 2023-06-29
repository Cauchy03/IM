<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/search/search.png"></image>
				<input type="search" placeholder="搜索用户名/群" class="search" placeholder-style="color: #aaa; font-weight: 400">
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="goBack">取消</view>
			</view>
		</view>
		
		<view class="main">
			<view class="search-user result">
				<view class="title">用户</view>
				<view class="list user">
					<image src="../../static/images/index/OIP.jpg"></image>
					<view class="userName">
						<view class="name">Tom</view>
						<view class="email"></view>
					</view>
					<view class="right-btn">发消息</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss">
	@import '../../commons/css/header.scss';
	.content {
		.top-bar {
			.search-div {
				position: absolute;
				top: 0;
				left: 0;
				float: left;
				width: 100%;
				z-index: -1;
				box-sizing: border-box;
				padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;
				.search {
					padding: 0 60rpx 0 12rpx;
					height: 60rpx;
					background: $uni-bg-color-grey;
					border-radius: 5px;
				}
				image {
					position: absolute;
					right: 130rpx;
					top: 22rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
			.top-bar-right {
				.text {
					padding-top: 20rpx;
					padding-right: 18rpx;
					font-size: 32rpx;
					color: #272832;
					font-weight: 500;
				}
			}
		}
		
		.main {
			padding: 88rpx $uni-spacing-col-base;
			.result {
				padding-top: $uni-spacing-col-base;
				.title{
					font-size: 44rpx;
					font-weight: 600;
					color: $uni-text-color;
					line-height: 60rpx;
				}
				.list {
					width: 100%;
					height: 80rpx;
					padding: 20rpx 0;
					image {
						float: left;
						width: 80rpx;
						height: 80rpx;
						border-radius: $uni-border-radius-base;
					}
					.userName {
						float: left;
						padding-left: $uni-spacing-col-base;
						.name {
							font-size: 36rpx;
							color: $uni-text-color;
						}
					}
					.right-btn {
						float: right;
						width: 120rpx;
						height: 48rpx;
						background: $uni-color-primary;
						border-radius: 24rpx;
						font-size: $uni-font-size-sm;
						color: $uni-text-color;
						line-height: 48rpx;
						text-align: center;
						margin-top: 16rpx;
					}
				}
			}
		}
		
	
	}

</style>