<template>
	<view class="emoji">
		<view class="emoji-line" v-for="(line, index) in emojis" :key="index">
			<view class="emoji-item" v-for="(item, index) in line" :key="index" @tap="clickEmoji(item)">
				{{item}}
			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";
	let emojis = ref([
		['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'],
		['😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙'],
		['😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄'],
		['😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫'],
		['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'],
		['😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙'],
		['😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄'],
		['😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫'],
		['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'],
		['😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙'],
		['😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄'],
		['😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫']
	])
	let emit = defineEmits(['sendEmoji'])
	const clickEmoji = emoji => {
		emit('sendEmoji', emoji)
	}
</script>

<style lang="scss" scoped>
	.emoji {
		width: 100%;
		height: 460rpx;
		padding: 16rpx 10rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
		.emoji-line {
			display: flex;
			.emoji-item {
				flex: 1;
				text-align: center;
				font-size: 44rpx;
				line-height: 72rpx
			}
		}
	}
</style>