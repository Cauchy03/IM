<template>
	<view class="submit">
		<view class="submit-chat">
			<view class="btn-img" @tap="changeRecord">
				<image :src="voiceOrKeybord"></image>
			</view>
			<textarea auto-height="true" class="chat-send btn" v-show="!isRecord" @input="inputs"
				v-model="sessionMsg"></textarea>
			<view class="record btn" v-show="isRecord">按住说话</view>
			<view class="btn-img" @tap="emoji">
				<image src="../../static/images/chat/emoji.png"></image>
			</view>
			<view class="btn-img">
				<image src="../../static/images/chat/add.png"></image>
			</view>
		</view>
		
		<view class="emoji" v-show="isEmoji">
			<Emoji @sendEmoji="receptEmoji"></Emoji>
		</view>
	</view>
</template>

<script setup>
	import {
		nextTick,
		ref,
		watch
	} from "vue";
	// 语音打字切换
	let isRecord = ref(false)
	let voiceOrKeybord = ref('../../static/images/chat/voice.png')
	const changeRecord = () => {
		isRecord.value = !isRecord.value
	}
	watch(isRecord, (newValue, oldValue) => {
		voiceOrKeybord.value = newValue ? '../../static/images/chat/keybord.png' :
			'../../static/images/chat/voice.png'
	})

	// 点击表情
	let isEmoji = ref(false)
	const emoji = () => {
		isEmoji.value = !isEmoji.value
		nextTick(() => {
			getElHeight()
		})
	}

	// 获取高度
	let emit = defineEmits(['msg','submitHeight'])
	const getElHeight = () => {
		const query = uni.createSelectorQuery().in(this);
		query.select('.submit').boundingClientRect(data => {
			emit('submitHeight', data.height)
		}).exec();
	}

	// 文字发送
	let sessionMsg = ref('')
	const inputs = (e) => {
		let chatn = e.detail.value
		let pos = chatn.indexOf('\n')
		if (pos !== -1 && chatn.length > 1) {
			emit('msg', sessionMsg.value)
			sessionMsg.value = ''
		}
	}
	
	const receptEmoji = (emoji) => {
		emit('msg', emoji)
	}
</script>

<style lang="scss" scoped>
	.submit {
		background: #F4F4F4;
		box-shadow: inset 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 100;
		padding-bottom: var(--status-bar-height);

		.submit-chat {
			width: 100%;
			display: flex;
			align-items: flex-end;
			box-sizing: border-box;
			padding: 14rpx 10rpx;

			image {
				width: 56rpx;
				height: 56rpx;
				margin: 0 10rpx;
				flex: auto;
			}

			.btn {
				flex: auto;
				background-color: #fff;
				border-radius: 10rpx;
				padding: 15rpx;
				max-height: 85rpx;
				margin: 0 10rpx;
			}

			.record {
				text-align: center;
				font-size: $uni-font-size-base;
				background: $uni-bg-color-grey;
				margin: 0 10rpx;
			}

			.chat-send {
				// line-height: 90rpx;
			}
		}

		.emoji {
			width: 100%;
			height: 460rpx;
			background: rgba(236, 237, 238, 1);
			box-shadow: 0 -1rpx 0 0 rgba(0, 0, 0, 0.1);
		}
	}
</style>