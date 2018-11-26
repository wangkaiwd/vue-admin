const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.extensions
      .merge(['.js', '.jsx', '.vue', '.json', '.less'])
      .end()
      .alias.set('@', resolve('src'))
      .set('styles', resolve('src/assets/styels'))
      .set('components', resolve('src/components'))
      .set('img', resolve('src/assets/img'));
  }
};
