/**
 * @Author: wangkai
 * @Date: 2018/11/2
 * @Last Modified by: wangkai
 * @Desc: 处理一些安卓、ios 或者移动端的兼容问题
 **/

/**
 * 解决在手机进行输入的时候键盘弹出框将`fixed`定位和`absolute`定位的内容顶到上方的问题
 * @param selector: css选择器
 */
export const inputWrite = selector => {
  const height = window.innerHeight;
  window.addEventListener('resize', () => {
    if (window.innerHeight < height) {
      document.querySelector(selector).style.display = 'none';
    } else {
      document.querySelector(selector).style.display = 'block';
    }
  });
};