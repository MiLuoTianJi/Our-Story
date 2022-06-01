import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/ceshi',
		name: 'ceshi',
		component: () => import('../views/ceshi.vue'),
	},
	{ path: '/', redirect: { name: 'layout' } },
    {
		path: '/layout',
		name: 'layout',
		component: () => import('../views/layout.vue'),
		children:[
			{
				path: '/home',
				name: 'home',
				component: () => import('../views/home/index.vue'),
			},
			{
				path: '/detail/:json',
				name: 'detail',
				component: () => import('../views/detail/index.vue'),
			},
		]
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
