/**
 * Created by wangkai on 2019/4/18
 */
import Mock from 'mockjs';
import routerTemplate from './response/router';
import { mock } from 'http/env';

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
Mock.mock(`${mock.baseURL}${prefix}users/authInfo`, 'get', routerTemplate);
export default data;
