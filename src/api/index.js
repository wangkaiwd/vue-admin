import ajax from 'http/ajax';

export const fetchRatings = ajax('/ratings', 'get');
export const fetchGoods = ajax('/goods');
