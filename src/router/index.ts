import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/ceshi',
		name: 'ceshi',
		component: () => import('../views/ceshi.vue'),
	},
	{ path: '/', redirect: { path: '/axis' } },
    {
		path: '/layout',
		name: 'layout',
		component: () => import('../views/layout.vue'),
		children:[
			{
				path: '/axis',
				name: 'axis',
				component: () => import('../views/axis/index.vue'),
			},
			{
				path: '/detail/:json',
				name: 'detail',
				component: () => import('../views/detail/index.vue'),
			},
			{
				path: '/foot',
				name: 'foot',
				component: () => import('../views/foot/index.vue'),
			},
		]
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
