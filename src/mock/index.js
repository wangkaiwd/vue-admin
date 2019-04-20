/**
 * Created by wangkai on 2019/4/18
 */
import Mock from 'mockjs';
import routerTemplate from './response/router';

const prefix = '/api/';
const tableTemplate = {
  'dataSource|10': [
    {
      id: '@id',
      name: '@cname',
      'age|1-100': 100,
      email: '@email'
    }
  ]
};
const data = Mock.mock(tableTemplate);

Mock.mock(`${prefix}users/authInfo`, 'GET', routerTemplate);
export default data;
