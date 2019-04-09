/**
 * Created by wangkai on 2019-04-07
 * 生成侧边栏数组
 */

/**
 * 单独处理一级路由，将对应的子路由对象移动到一级数组中
 * @param menus 路由配置列表
 */
const removeLeaf = (menus) => {
  const leafMenus = menus.filter(menu => menu.leaf);
  leafMenus.map(leaf => {
    const index = menus.indexOf(leaf);
    if (index !== -1) {
      const temp = menus[index].children;
      menus.splice(index, 1, ...temp);
    }
  });
};
/**
 * 将路由文件处理成需要的侧边栏数组
 * @param routes 侧边栏数组
 * @returns {Array} 过滤处理后的侧边栏数组
 */
// FIXME: 这里其实也可以都不做处理，而是在遍历sideBar组件的时候进行处理
const menuList = (routes) => {
  const menus = JSON.parse(JSON.stringify(routes));
  // 先将叶子路由处理掉
  removeLeaf(menus);
  /**
   * 内部递归函数，删除需要隐藏的数据
   * @param tree
   */
  const iterate = (tree) => {
    for (let i = tree.length - 1; i >= 0; i--) {
      const node = tree[i];
      if (node.hidden) {
        tree.splice(i, 1);
      } else if (node.children) {
        iterate(node.children);
      }
    }
  };
  iterate(menus);
  return menus;
};
export default menuList;
