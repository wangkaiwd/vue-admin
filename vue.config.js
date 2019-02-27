const path = require('path')
const resolve = dir => path.resolve(__dirname, `src/${dir}/`)
module.exports = {
  // 关闭eslint
  lintOnSave: false,

  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    // 这里用到了webpack.DefinePlugin
    config.plugin('define').tap(args => {
      console.log('args', args)
      const argv = process.argv
      const mode = argv[argv.indexOf('--project-mode') + 1]
      // 这里必须要使用`"string"`,字符串必须要单双引号俩层嵌套，否则使用到process.env的时候会报错
      // 文档：这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引用。通常，有俩种方式
      // 来达到这个效果，使用'"production"',或者使用JSON.stringify('production')
      args[0]['process.env'].MODE = `"${mode}"`
      // args[0]['process.env'].BASE_API = JSON.stringify('http://editor-api.eloco.cn')
      return args
    })
    // 这里的具体配置都可以在文档的链接中找到
    // 配置别名
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('api', resolve('api'))
      .set('utils', resolve('utils'))
      .set('http', resolve('http'))
      .set('views', resolve('views'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .set('styles', resolve('assets/styles'))
      .set('img', resolve('assets/img'))
      .set('filters', resolve('filters'))
      .set('mixins', resolve('mixins'))
      .set('store', resolve('store'))
      .end()
      // 扩展名省略
      .extensions
      .add('.scss')
  },
  css: {
    loaderOptions: {
      // 自动引入scss
      sass: {
        data: `
          @import "styles/mixins.scss";
          @import "styles/vars.scss";
        `
      }
    }
  }
}
