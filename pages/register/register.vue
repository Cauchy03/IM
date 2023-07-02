<template>
	<view class="content">
		<view class="bar">
			<view class="top-bar-left">
				<image src="../../static/images/commons/back.png" class="back-img" @tap="goBack"></image>
			</view>
			<view class="logo">
				<image src="../../static/images/login/火.png"></image>
			</view>

			<view class="main">
				<view class="title">注册</view>
				<view class="login-form">
					<view class="inputs-div">
						<input class="user" type="text" placeholder="输入名字"
							placeholder-style="color: #aaa; font-weight: 400">
						<view class="employ" v-show="false">用户名已占有</view>
						<image src="../../static/images/register/right.png" class="success" v-show="isUserSuccess">
						</image>
					</view>
					<view class="inputs-div">
						<input class="email" type="text" placeholder="请输入邮箱"
							placeholder-style="color: #aaa; font-weight: 400" @blur="isEmail">
						<view class="employ" v-show="false">邮箱已占有</view>
						<view class="envalid" v-show="isEmailInvalid">邮箱无效</view>
						<image src="../../static/images/register/right.png" class="success" v-show="isEmailSuccess">
						</image>
					</view>
					<view class="inputs-div">
						<input class="pws" :type="password" placeholder="密码"
							placeholder-style="color: #aaa; font-weight: 400">
						<image
							:src="isHidePsw ? '../../static/images/register/hide.png' : '../../static/images/register/look.png'"
							class="pws-img" @tap="isHide"></image>
					</view>
				</view>
			</view>
			<button class="submit">注册</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let password = ref('password')
	let isUserSuccess = ref(false)
	let isEmailSuccess = ref(false)
	let isEmailInvalid = ref(false)
	let isHidePsw = ref(false)

	const isHide = () => {
		password.value = password.value === 'password' ? 'text' : 'password'
		isHidePsw.value = !isHidePsw.value
	}

	const isEmail = () => {
		isEmailInvalid.value = true
	}

	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: env(safe-area-inset-bottom);

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

			.top-bar-left {
				float: left;
				padding-right: 32rpx;

				.text {
					font-size: $uni-font-size-lg;
					font-weight: 500;
					color: $uni-text-color;
					line-height: 88rpx;
				}

				.back-img {
					margin-top: 17rpx;
					padding-left: 14rpx;
					width: 60rpx;
					height: 60rpx;
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


				.login-form {
					padding-top: 48rpx;

					.inputs-div {
						position: relative;

						.employ,
						.envalid {
							float: right;
							position: absolute;
							right: 120rpx;
							top: 8rpx;
							font-size: $uni-font-size-base;
							color: #FF5D5B;
							font-weight: 500;
							line-height: 88rpx;
						}

						.success {
							position: absolute;
							right: 120rpx;
							top: 40rpx;
							width: 42rpx;
							height: 32rpx;
						}

						.pws-img {
							position: absolute;
							right: 120rpx;
							top: 30rpx;
							width: 52rpx;
							height: 52rpx;
						}

					}

					input {
						width: 84%;
						height: 88rpx;
						font-size: $uni-font-size-lg;
						color: $uni-text-color;
						font-weight: 500;
						line-height: 88rpx;
						border-bottom: 1px solid $uni-border-color;
					}
				}

			}

			.submit {
				width: 520rpx;
				height: 96rpx;
				background: rgba(39, 40, 50, 0.20);
				;
				box-shadow: 0px 50rpx 32rpx -36px rgba(0, 85, 255, 0.4);
				border-radius: 48rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-inverse;
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
			}

		}

	}
</style>