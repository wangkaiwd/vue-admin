/**
 * Created by wangkai on 2019-04-20
 */
const routerTemplate = () => {
  return {
    code: 0,
    data: {
      page: {
        'dashboard': true,
        'main': true,
        'editTable': false,
        'editor': true,
        'list': true,
        'components': true,
        'splitPanel': true,
        'dirTree': true,
        'form': true,
        'mapForm': true
      },
      component: {
        'main:edit': true,
        'main:search': true
      }
    },
    msg: '成功'
  };
};

export default routerTemplate;
