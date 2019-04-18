/**
 * Created by wangkai on 2019/4/18
 */
import Mock from 'mockjs';

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
export default data;
