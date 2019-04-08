/**
 * Created by wangkai on 2019-04-07
 * 用户信息相关
 */
import vm from '@/main';

export const getToken = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo ? userInfo.token : '';
};

export const goLogin = (message) => {
  message && vm.$message.warning(message);
  localStorage.clear();
  vm.$router.push('/login');
};
