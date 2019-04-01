## 目前功能
* 注册: 全球公认头像， 密码加密
* 登录：`token`认证，请求进行登录认证


### 相关依赖

什么是全球公认头像？  
`Gravatar`全球公认头像：`Globally Recognized Avatar`的缩写，是`http://cn.gravatar.com`推出的一项服务，意为“全球通用头像”。如果在`Gravatar`的服务器上放置了你自己的头像，那么在任何支持`Gravatar`的`blog`或者留言本上留言时，只要提供你与头像关联的`email`地址，就能够显示出你的`Gravatar`头像来。

什么是`JSON Web Token`?  
`JSON Web Token`(缩写`JWT`)是目前最流行的跨域认证解决方案

* [`bcrypt`](https://github.com/kelektiv/node.bcrypt.js#readme): 密码加密算法
* [`gravatar`](https://github.com/emerleite/node-gravatar): 全球公认头像
* [`jsonwebtoken(jwt)`](https://github.com/auth0/node-jsonwebtoken): 目前最流行的跨域认证解决方案(http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
* [`passport`](https://github.com/jaredhanson/passport): `Node`平台的身份认证中间件
* [`passport-jwt`](https://github.com/themikenicholson/passport-jwt): 使用`JSON Web Token`进行身份认证的`passport`策略
