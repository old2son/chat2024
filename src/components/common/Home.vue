<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import appLayout from '@/components/AppLayout.vue';
import chatUser from '@/views/chat/chatUser.vue';
import group from '@/views/chat/group.vue';

const routes = [
	{ text: '去聊天', path: '/chatUser/', component: chatUser, id: 1 },
	{ text: '去群聊', path: '/group/', component: group, id: 2 }
];

let $header = ref<HTMLElement | null>(null);
let headerHeight = computed(() => {
	return $header.value ? `${$header.value.offsetHeight}px` : 0;
});
</script>

<template>
	<appLayout>
		<div class="page-home">
			<h1 ref="$header">首页</h1>

			<nav>
				<!-- <RouterLink to="/chat">Go to chat</RouterLink>  -->
				<ul>
					<template v-for="route in routes" :key="route.id">
						<li>
							<RouterLink :to="route.path">
								{{ route.text }}
							</RouterLink>
						</li>
					</template>
				</ul>
			</nav>
		</div>
		
	</appLayout>
</template>

<style scoped>
.page-home {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

.page-home h1 {
	padding: 15px;
	text-align: center;
	color: white;
	font-size: 18px;
	font-weight: bold;
	background-color: #2bbc80;
}

.page-home nav {
	height: 100%;
	margin-top: 10px;
	padding-top: v-bind('headerHeight');
	overflow: hidden auto;
}

.page-home nav ul {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	height: 100%;
	
}

.page-home nav li {
	width: 50vw;
	padding: 4px 8px;
	line-height: 1.8;
	border-radius: 4px;
	text-align: center;
	background-color: #2bbc80;
}

.page-home nav li a {
	color: #fff;
	font-size: 14px;
}
</style>
