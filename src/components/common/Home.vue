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

let windowHeight = computed(() => {
	const headerHeightValue = typeof headerHeight.value === 'string' ? headerHeight.value.replace('px', '') : 0;
	return `${(window.innerHeight - Number(headerHeightValue)) * 0.9}px`;
});
</script>

<template>
	<appLayout>
		<div class="page-home">
			<h1 ref="$header">首页</h1>

			<nav>
				<!-- <RouterLink to="/chat">Go to chat</RouterLink>  -->
				<ul :style="{ marginTop: windowHeight ? '20px' : 0 }">
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
}

.page-home nav ul {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	gap: 20px;
	max-height: v-bind('windowHeight');
	overflow: hidden auto;
	transform: translate(0, -50%);
}

.page-home nav li {
	width: 50vw;
	padding: 12px;
	border-radius: 4px;
	text-align: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
	background-color: #2bbc80;
}

.page-home nav li a {
	color: #fff;
	font-size: 14px;
}
</style>
