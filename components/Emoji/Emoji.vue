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
		['😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫']
	])
	let emit = defineEmits(['sendEmoji'])
	const clickEmoji = emoji => {
		emit('sendEmoji', emoji)
	}
</script>

<style lang="scss" scoped>

</style>