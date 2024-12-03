<script setup lang="ts">
import { reactive } from 'vue';

const message = reactive({
	data: [
		{
			type: 'other',
			content: '你好，这里是chat界面。',
		},
		{
			type: 'me',
			content: '看起来还不错哦！',
		},
		{
			type: 'other',
			content: '要加点互动功能吗？',
		},
	],
})


</script>

<template>
	<div class="chat-container">
		<!-- 顶部标题 -->
		<div class="chat-header">chat</div>

		<!-- 聊天内容区 -->
		<div class="chat-content" id="chatContent">
			<!-- 时间 -->
			<div class="chat-time">2024-11-18 15:30</div>

			<!-- 对方消息 -->
			<div class="chat-bubble other">
				<img class="avatar" src="@/assets/images/robot.gif" alt="robot头像" />
				
				<div class="bubble">你好，这里是chat界面。</div>
			</div>

			<!-- 自己的消息 -->
			<div class="chat-bubble me">
				<div class="bubble">看起来还不错哦！</div>
				<img class="avatar" src="@/assets/images/user.gif" alt="我的头像" />
			</div>

			<!-- 时间 -->
			<div class="chat-time">2024-11-18 15:32</div>

			<!-- 对方消息 -->
			<div class="chat-bubble other">
				<img class="avatar" src="@/assets/images/robot.gif" alt="robot头像" />
				<div class="bubble">要加点互动功能吗？</div>
			</div>
		</div>

		<!-- 输入框 -->
		<div class="chat-footer">
			<input type="text" class="chat-input" id="chatInput" placeholder="请输入消息..." />
			<button class="send-btn" id="sendBtn">发送</button>
		</div>
	</div>
</template>

<style scoped>
/* 容器 */
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

/* 顶部标题 */
.chat-header {
	padding: 15px;
	text-align: center;
	color: white;
	font-size: 18px;
	font-weight: bold;
	background-color: #2bbc80;
}

/* 聊天内容区 */
.chat-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 10px;
	padding: 15px;
	overflow-y: auto;
}

/* 时间 */
.chat-time {
	margin: 10px 0;
	text-align: center;
	color: #999;
	font-size: 12px;
}

/* 聊天气泡 */
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

/* 头像 */
.avatar {
	width: 40px;
	height: 40px;
	margin: 0 10px;
	border-radius: 50%;
	object-fit: cover;
}

/* 气泡样式 */
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

/* 输入框 */
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
