/**
 * Created by wangkai on 2019-04-21
 * 顶部tab切换
 */

const getActiveTab = (menus, index, tempObj) => {
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    if (menu.path === index) {
      return tempObj.activeItem = menu;
    }
    if (menu.children) {
      return getActiveTab(menu.children, index, tempObj);
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
      let tempObj = {};
      getActiveTab(menus, index, tempObj);
      console.log(tempObj);
      state.topNavList.push(tempObj.activeItem);
    },
    DELETE_NAV (state, item) {

    }
  },
  actions: {}
};
export default topNav;
