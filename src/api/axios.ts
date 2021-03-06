import Axios from 'axios';

const BASE_URL = ''; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = ''; // 接口超时时间
const axios = Axios.create({
	baseURL: BASE_URL,
});

// 可以添加一个axios的全局配置
axios.defaults.headers.post = {
	'Content-Type': 'application/x-www-form-urlencoded',
};

// 添加请求拦截器
axios.interceptors.request.use(
	(config) => {
		// 可以在此处添加一些共有的请求拦截
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axios.interceptors.response.use(
	(response) => {
		const res = response.data;
		// 在此处添加一些响应拦截
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

export default axios;
