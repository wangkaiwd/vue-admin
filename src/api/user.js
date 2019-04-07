/**
 * Created by wangkai on 2019-04-07
 * 用户相关接口
 */
import reqMethods from 'http/ajax';

const fetchLogin = reqMethods.post('/api/users/login', 'form');
const fetchRegister = reqMethods.post('/api/users/register', 'form');
