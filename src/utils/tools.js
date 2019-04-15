/**
 * Created by wangkai on 2019/4/15
 * 常用的工具函数
 */

/**
 * 返回递归数组中某一项及其父项
 * @param array 传入的递归数组
 * @param key 需要查找项的key值
 * @param val 需要查找项的value值
 * @param childKey 递归项key值，默认为'children'
 */
export const findMatched = (array, key, val, childKey = 'children') => {
  array.some(item => {
    let temp;
    if (item[key] === val) {
      return item;
    }
    temp = findMatched(item[childKey] || [], key, val, childKey);
    if (temp) {
      const copyItem = JSON.parse(JSON.stringify(item));
      copyItem.tree = temp;
      return copyItem;
    }
  });
};
