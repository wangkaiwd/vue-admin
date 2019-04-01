/*
* 定义全局变量来进行绝对路径的简写
* */
const path = require('path');
const moduleAlias = require('module-alias');
const getPath = dir => path.resolve(__dirname, `../${dir}`);
// 参考 https://gist.github.com/branneman/8048520
moduleAlias.addAliases({
  '@': getPath(),
  'config': getPath('config'),
  'models': getPath('models'),
  'routers': getPath('routers'),
  'utils': getPath('utils'),
});
