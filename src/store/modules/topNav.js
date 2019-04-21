/**
 * Created by wangkai on 2019-04-21
 * 顶部tab切换
 */

const getActiveTab = (menus, index) => {
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    if (menu.path === index) {
      return menu;
    }
    const found = getActiveTab(menu.children || [], index);
    if (found) {
      return found;
    }
  }
};
const topNav = {
  namespaced: true,
  state: {
    topNavList: []
  },
  mutations: {
    ADD_NAV (state, item) {
      //  根据index找出对应的route
      const { index, menus } = item;
      const { topNavList } = state;
      const isRepeat = topNavList.some(list => list.path === index);
      if (!isRepeat) {
        state.topNavList.push(getActiveTab(menus, index));
      }
    },
    DELETE_NAV (state, item) {

    }
  },
  actions: {}
};
export default topNav;
