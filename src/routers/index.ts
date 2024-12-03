import { createRouter, createWebHashHistory } from 'vue-router';

const ChatHome = () => import('@/components/common/Home.vue');
const modules = import.meta.glob('@/views/**/*.vue');

// 路由
const routes = [
    {
        path: '/',
        redirect: '/home/'
    },
    {
        path: '/home/',
        name: 'ChatHome',
        component: ChatHome
    },
]

// 动态生成路由
const modulesRoute = Object.keys(modules).map(key => {
    const name = key.replace(/.*\/(.*).vue$/, '$1')  
    const path = name === 'Home' ? '/' : `/${name.toLowerCase()}`

    return {
        path,
        name, 
        component: modules[key]
    } 
});

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
        ...routes,
        ...modulesRoute
	],
	strict: false,
	sensitive: false,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			let position: any = {};

			if (to.hash) {
				position.selector = to.hash;
			}

			if (to.matched.some((m) => m.meta.scrollToTop)) {
				position.x = 0;
				position.y = 0;
			}

			return position;
		}
	}
});

router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {
		next({ name: '404' });
	}
	else {
		next();
	}
});

export default router;
