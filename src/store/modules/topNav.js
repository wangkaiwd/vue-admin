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
    topNavList: [],
    activeTab: '',
  },
  mutations: {
    ADD_NAV (state, item) {
      //  根据index找出对应的route
      const { index, menus } = item;
      const { topNavList } = state;
      const isRepeat = topNavList.some(list => list.path === index);
      if (!isRepeat) {
        topNavList.push(getActiveTab(menus, index));
      }
      state.activeTab = index;
    },
    CHANGE_ACTIVE (state, index) {
      state.activeTab = index;
    },
    DELETE_NAV (state, item) {
      const { topNavList } = state;
      const { index } = item;
      const targetIndex = topNavList.findIndex(list => list.path === index);
      if (index === state.activeTab) {
        const prevTab = topNavList[targetIndex - 1] && topNavList[targetIndex - 1].path;
        const nextTab = topNavList[targetIndex + 1] && topNavList[targetIndex + 1].path;
        if (prevTab) {
          state.activeTab = prevTab;
        } else if (nextTab) {
          state.activeTab = nextTab;
        } else {
          state.activeTab = '';
        }
      }
      topNavList.splice(targetIndex, 1);
    }
  },
  actions: {}
};
export default topNav;
