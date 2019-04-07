/**
 * Created by wangkai on 2019-04-07
 * 列表相关接口
 */
import reqMethods from 'http/ajax';

export const fetchProfileList = reqMethods.post('/api/profiles/list');
