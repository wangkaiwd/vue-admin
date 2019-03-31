const express = require('express');
// 第三方加密
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../../models/User');
const privateKey = require('../../config/auth');
const saltRounds = 10;
router.get('/test', (req, res) => {
  res.json({
    msg: 'login success'
  });
});
// 注册
router.post('/register', (req, res) => {
  let { username, password, email, avatar } = req.body;
  User.findOne({ email }).then(
    user => {
      console.log('user', user);
      if (user) {
        res.status(400).json({
          code: 1000,
          msg: '邮箱已注册'
        });
        return;
      }
      const newUser = new User({ username, password, email, avatar });
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
          newUser.avatar = avatar;
          newUser.save().then(
            userInfo => {
              res.json({ code: 0, data: userInfo, msg: '注册成功' });
            },
            err => console.log(err)
          );
        });
      });
    }
  );
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(
      user => {
        if (!user) {
          res.json({ code: 10000, data: {}, msg: '用户不存在' });
        } else {
          bcrypt.compare(password, user.password)
            .then(
              isMatch => {
                if (isMatch) {
                  // jwt.sign参数：1.token生成规则, 2. 唯一的key值 3. options:可以设置过期时间
                  const token = jwt.sign({ id: user.id, name: user.name }, privateKey);
                  // 要进行区分mongoose中的document和js Object的区别
                  res.json({ code: 0, data: { token, ...user.toObject() }, msg: '成功' });
                } else {
                  res.json({ code: 10001, data: {}, msg: '密码错误' });
                }
              },
              err => console.log(err)
            );
        }
      }
    );
});
module.exports = router;
