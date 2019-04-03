/**
 * Created by wangkai on 2019/4/3
 * 常用工具函数
 */
const omitPrivate = (doc, obj) => {
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};
const options = {
  toObject: {
    transform: omitPrivate
  },
  toJSON: {
    transform: omitPrivate
  }
};

module.exports = options;
