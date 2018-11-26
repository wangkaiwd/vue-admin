import axios from 'axios';
import qs from 'qs';
import serverConfig from './serverConfig';
import { getToken, handleErrorCode, delRepeatHttpRequest } from './tool';
const { localURL, baseURL, mockURL } = serverConfig;
const instance = axios.create({
  // 根据开发和使用习惯
  baseURL: localURL || baseURL || mockURL,
  timeout: 20000
});
const CancelToken = axios.CancelToken;
const requestMap = new Map();
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
instance.interceptors.request.use(
  config => {
    const { method, data } = config;
    // 防重复提交: 原理：在请求还未返回内容时取消再次发起的请求
    delRepeatHttpRequest(requestMap, config, qs, CancelToken);
    if (method === 'post') {
      config.data = qs.stringify(data);
    }
    const token = getToken();
    token && (config.headers['user_token'] = token);
    return config;
  },
  error => {
    console.warn('request error');
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  res => {
    // 请求成功后重置requestMap
    requestMap.set(res.config._keyString, false);
    const { status, data } = res;
    if (status === 200) {
      // 通过code来处理错误码
      if (data.code !== 0) handleErrorCode(data.code);
      return data;
    }
    console.warn('response status error');
    // 在参数进行传递之前进行错误提示处理
    return Promise.reject(res);
  },
  error => {
    console.warn('response error');
    return Promise.reject(error);
  }
);
export default instance;
