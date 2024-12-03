<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';

const message = reactive({
	data: [
		{
			id: 1,
			type: 'other',
			content: '你好，这里是chat界面。',
			time: '2024-11-18 15:30'
		},
		{
			id: 2,
			type: 'me',
			content: '看起来还不错哦！',
			time: '2024-11-18 15:30'
		},
		{
			id: 3,
			type: 'other',
			content: '要加点互动功能吗？'
		}
	],
	inputContent: ''
});

let $chatCont = ref<HTMLElement | null>(null);

const sendMessage = () => {
	/* if (!message.inputContent) {
		alert('请输入内容');
		return;
	} */

	message.data.push({
		id: Number((Math.random() * 10).toFixed(3)),
		type: 'me',
		content: message.inputContent
	});

	message.inputContent = '';

	if ($chatCont.value) {
		$chatCont.value.scrollTop = $chatCont.value.scrollHeight;
	}
};

onMounted(() => {
	if ($chatCont.value) {
		$chatCont.value.scrollTop = $chatCont.value.scrollHeight;
	}
});
</script>

<template>
	<div class="chat-container">
		<div class="chat-header">chat</div>

		<div class="chat-content" ref="$chatCont">
			<template v-for="item in message.data" :key="item.id">
				<div v-if="item?.time" class="chat-time">{{ item.time }}</div>

				<div :class="['chat-bubble', item.type]">
					<template v-if="item.type === 'other'">
						<img class="avatar" src="@/assets/images/robot.gif" alt="robot头像" />
						<div class="bubble">{{ item.content }}</div>
					</template>
					<template v-else>
						<div class="bubble">{{ item.content }}</div>
						<img class="avatar" src="@/assets/images/user.gif" alt="我的头像" />
					</template>
				</div>
			</template>
		</div>

		<div class="chat-footer">
			<input type="text" class="chat-input" v-model="message.inputContent" placeholder="请输入消息..." />
			<button class="send-btn" @click="sendMessage">发送</button>
		</div>
	</div>
</template>

<style scoped>
.chat-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 450px;
	height: 100vh;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
}

.chat-header {
	padding: 15px;
	text-align: center;
	color: white;
	font-size: 18px;
	font-weight: bold;
	background-color: #2bbc80;
}

.chat-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 20px;
	padding: 15px;
	overflow-y: auto;
}

.chat-time {
	text-align: center;
	color: #999;
	font-size: 12px;
}

.chat-bubble {
	display: flex;
	align-items: flex-start;
	opacity: 0;
	transform: translateY(20px);
	animation: bubble-in 0.3s forwards ease-in-out;
}

.chat-bubble.other {
	justify-content: flex-start;
}

.chat-bubble.me {
	justify-content: flex-end;
}

.avatar {
	width: 40px;
	height: 40px;
	margin: 0 10px;
	border-radius: 50%;
	object-fit: cover;
}

.chat-bubble .bubble {
	max-width: 70%;
	line-height: 1.5;
	padding: 10px 15px;
	border-radius: 8px;
	word-wrap: break-word;
	font-size: 14px;
}

.chat-bubble.other .bubble {
	border: 1px solid #e6e6e6;
	border-top-left-radius: 0;
	background-color: #f5f5f5;
}

.chat-bubble.me .bubble {
	border-top-right-radius: 0;
	color: white;
	background-color: #2bbc80;
}

.chat-footer {
	display: flex;
	padding: 10px;
	border-top: 1px solid #ddd;
	background-color: #f9f9f9;
}

.chat-input {
	flex: 1;
	padding: 10px;
	margin-right: 10px;
	border: 1px solid #ddd;
	border-radius: 20px;
	outline: none;
	font-size: 14px;
}

.groups {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;
	border-top: 1px solid #ddd;
	background-color: #f9f9f9;
}

.groups button {
	padding: 5px 10px;
	margin-right: 10px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	color: white;
	font-size: 12px;
	background-color: #2bbc80;
}

.send-btn {
	padding: 10px 15px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	color: white;
	font-size: 14px;
	background-color: #2bbc80;
}

.send-btn:hover {
	background-color: #2bbc80;
}

@keyframes bubble-in {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
