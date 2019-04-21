/**
 * Created by wangkai on 2019-04-21
 * 按钮权限指令
 */
import store from 'store';

const adminAuth = {
  inserted (el, binding) {
    const authFlag = binding.value;
    const componentAuth = store.getters['router/component'];
    if (!componentAuth[authFlag]) {
      el.remove();
    }
  }
};

export default adminAuth;
