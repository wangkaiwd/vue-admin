/**
 * Created by wangkai on 2019-04-07
 * 列表相关接口
 */
import ajax from 'http/ajax';

export const fetchProfileList = ajax.post('/api/profiles/list');
export const fetchProfileAdd = ajax.post('/api/profiles/add');
export const fetchProfileEdit = ajax.post('/api/profiles/edit');
export const fetchProfileDelete = ajax.post('/api/profiles/delete');
