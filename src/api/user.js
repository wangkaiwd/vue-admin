/**
 * Created by wangkai on 2019-04-07
 * 用户相关接口
 */
import reqMethods from 'http/ajax';

export const fetchLogin = reqMethods.post('/api/users/login', 'form');
export const fetchRegister = reqMethods.post('/api/users/register', 'form');
