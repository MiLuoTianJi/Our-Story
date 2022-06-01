import $axios from './axios';

// 添加用户登录请求 data如果约定好可以添加ts 接口类型
export const userLogin = (data:any) => {
	return $axios({
               url:'xxx',
               method:'post',
               data
	})
}