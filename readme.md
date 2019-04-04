## `vue cli3.0`脚手架
为了方便不用再每次写项目的时候，都进行一些重复的配置，我在自己的`github`上维护了一份基于`vue cli3.0`的一份脚手架。这里的整体目录结构以及相关功能都会随着自己的学习而不断增加，持续完善
### 快速开始
在包管理工具上，我们选择`yarn`，用法和`npm`基本一样。
```
git clone git@github.com:wangkaiwd/vue-cli3.0-template.git
cd vue-cli3.0-template
yarn
yarn start
```
### 项目依赖
* [`axios`](https://github.com/axios/axios):基于`Promise`的`http`客户端，用于浏览器和`node.js`
* [`qs`](https://github.com/ljharb/qs):支持解析嵌套的`querystring`。通俗来讲就是可以将以`key1=val1&key2=val2&...`格式的字符串转换为对象格式`{key1:val1,key2:val2,...}` 
* [`elemente ui`](http://element-cn.eleme.io/#/zh-CN/component/installation):基于`Vue 2.0`的桌面端组件库
### 实现功能
* 自动引入全局`scss`,如`mixins`和`vars`。
* 分析打包性能:`npm run analyse`
* 根据命令行参数区分打包环境: `npm run build:test`,`npm run build:pro`
* `vue-router`路由懒加载
* `vuex`模块化处理
* `axios`接口请求封装以及`api`模块化管理
* 比较通用的项目文件夹结构
