import axios from 'axios';
// import baseURL from './env';
import vm from '@/main';
import { getToken, goLogin } from 'utils/user';

const CODE_OK = 0;
// 注意：在使用代理的时候不要设置baseUrl
const axiosInstance = axios.create({
  // baseURL,
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  config => {
    // 在每次请求发送的时候都要携带token
    config.headers.authorization = getToken();
    return config;
  },
  err => {
    vm.$message.error('请求出错！');
    console.log('请求出错');
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  res => {
    const { data = {}, status } = res;
    if (status === 200) { // 服务器响应成功
      if (data.code === CODE_OK) { // 服务器返回数据正确
        return data;
      }
      vm.$message.error(data.msg);
      return Promise.reject(data);
    }
    vm.$message.error('服务器响应出错！');
    return Promise.reject(data);
  },
  err => {
    if (err.message.includes('401')) { // 请求头没有携带token或token失效
      // goLogin('用户信息已失效，请重新登录');
      console.log(err);
    } else {
      console.log(`响应出错: ${err.message}`);
      vm.$message.error('服务器响应出错！');
      return Promise.reject(err);
    }
  }
);

export default axiosInstance;
