/**
 * Created by wangkai on 2019-04-07
 * 用户相关接口
 */
import ajax from 'http/ajax';

export const fetchLogin = ajax.post('/api/users/login', 'form');
export const fetchRegister = ajax.post('/api/users/register', 'form');
export const fetchLogout = ajax.post('/api/users/logout');
export const fetchAuthToken = ajax.get('api/users/authentication');
