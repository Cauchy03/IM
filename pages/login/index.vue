<template>
	<view class="content">
		<view class="bar">
			<view class="top-bar-right">
				<view class="text">注册</view>
			</view>
			<view class="logo">
				<image src="../../static/images/login/火.png"></image>
			</view>

			<view class="main">
				<view class="title">登录</view>
				<view class="tip">欢迎来到德莱联盟！</view>
				<view class="login-form">
					<input class="user" type="text" placeholder="用户名或邮箱"
						placeholder-style="color: #aaa; font-weight: 400">
					<input class="pws" type="password" placeholder="密码"
						placeholder-style="color: #aaa; font-weight: 400">
				</view>
				<view class="warning">
					输入用户或密码错误!
				</view>
			</view>
			<button class="submit">登录</button>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

		.bar {
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

			.top-bar-right {
				float: right;
				padding-right: 32rpx;

				.text {
					font-size: $uni-font-size-lg;
					font-weight: 500;
					color: $uni-text-color;
					line-height: 88rpx;
				}
			}

			.logo {
				text-align: center;

				image {
					padding-top: 256rpx;
					width: 194rpx;
					height: 92rpx;
					margin: 0 auto;
				}

			}

			.main {
				padding: 54rpx $uni-spacing-row-lg 120rpx;
				width: 100%;

				.title {
					font-size: 56rpx;
					font-weight: 500;
					color: $uni-text-color;
					line-height: 80rpx;
				}

				.tip {
					font-size: 40rpx;
					color: $uni-text-color-grey;
					line-height: 56rpx;
				}

				.login-form {
					padding-top: 48rpx;
					input {
						height: 88rpx;
						font-size: $uni-font-size-lg;
						color: $uni-text-color;
						font-weight: 500;
						line-height: 88rpx;
						border-bottom: 1px solid $uni-border-color;
					}
				}
				.warning {
					float: left;
					font-size: $uni-font-size-lg;
					color: $uni-color-error;
					line-height: 56rpx;
				}
			}

			.submit {
				width: 520rpx;
				height: 96rpx;
				background: $uni-color-primary;
				box-shadow: 0px 50rpx 32rpx -36px rgba(0, 85, 255, 0.4);
				border-radius: 48rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
			}

		}
	}
</style>