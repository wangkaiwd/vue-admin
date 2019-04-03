import axiosInstance from './axios';

import qs from 'qs';
// qs: 将js对象转换为 key1=val1&key2=val2格式的工具
const ajax = (url, method = 'post') => (params) => {
  const cfg = {
    post: {
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(params)
    },
    get: { params }
  };
  // 请求头默认都是 Content-Type: application/json
  return axiosInstance(
    {
      method,
      url,
      ...cfg[method]
    }
  );
};

// 常用请求：
// 1.get:列表  2.post_json:新增/保存  3.post_form: 字段比较简单的保存
// 4.export: 表格导出：https://github.com/axios/axios/issues/1660 5. upload:文件上传
const http = {
  // list/search
  get () {

  },
  // json/form
  post () {

  },
  // formData
  export () {

  },
  // 文件/图片上传
  upload () {

  }
};
export default ajax;
