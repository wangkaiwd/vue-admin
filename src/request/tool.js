import instance from './axiosConfig'
import Vue from 'vue'
import Toast from '@/components/plugin'
Vue.use(Toast)
const vm = new Vue()
/**
 * 提前定义接口路径，请求方法
 * @param url {String} 请求地址
 * @param method {String} 请求方式
 * @returns {Promise} 返回调用接口函数
 */
// 返回promise实例，方便通过async和await使异步代码变为同步
export const ajaxFunc = (url, method = 'post') => (params = {}) => new Promise((resolve, reject) => {
  let value
  method.toLowerCase() === 'post' ? value = 'data' : value = 'params'
  return instance({
      url,
      method,
      [value]: params
    })
    .then(res => resolve(res), err => reject(err))
})
/**
 * 判断本地存储中的token是否存在，从而在请求头中携带
 * @returns {string} [返回localStorage中的token,或者返回'']
 * @todo: 要结合vuex在全局进行用户信息的处理和更新
 */
export const getToken = () => {
  var userInfo = localStorage.getItem('user') || ''
  let token = ''
  userInfo && (token = JSON.parse(userInfo).user_token)
  return token
}
// 错误码配置项
const codeMsg = {
  '10000': 'user_token为空',
  '10001': '登录信息过期或已失效，请登录！',
  '10002': 'user_token不存在 || 超级会员身份失效'
}
/**
 * 对错误code进行统一处理：
 * @param code {Number} 后端返回的code
 */
export const handleErrorCode = (code) => {
  codeMsg[code] && vm.$message(codeMsg[code]);
}

/**
 * 删除重复请求：确保前一次的请求发送之后才能再此次发起请求
 * @param {Map} requestMap 区分唯一请求的Map对象键值保存对
 * @param {Object} config 请求配置项
 * @param {Object} qs 将嵌套对象转换为query的工具
 * @param {Function} CancelToken 取消请求实例
 */
export const delRepeatHttpRequest = (requestMap, config, qs, CancelToken) => {
  const {
    url,
    method,
    data
  } = config
  const keyString = qs.stringify(Object.assign({}, {
    url,
    method
  }, data));
  if (requestMap.get(keyString)) {
    // 取消当前请求
    config.cancelToken = new CancelToken((cancel) => {
      cancel({
        type: 'cancelHttp',
        msg: 'Please slow down a little'
      });
    });
  }
  requestMap.set(keyString, true);
  Object.assign(config, {
    _keyString: keyString
  });
}
