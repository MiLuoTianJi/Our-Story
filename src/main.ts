import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import * as tools from './utils/tools';
const app = createApp(App);

// 挂载路由
app.use(router);
// 挂载vuex
app.use(store);
// 挂载ElementPlus
app.use(ElementPlus);

// 注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount('#app');
