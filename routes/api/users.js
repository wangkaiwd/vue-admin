const express = require('express');
// 第三方加密
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../../models/User');
const saltRounds = 10;
router.get('/test', (req, res) => {
  res.json({
    msg: 'login success'
  });
});

router.post('/register', (req, res) => {
  const { username, password, email, avatar } = req.body;
  User.findOne({ username: username }).then(
    user => {
      console.log('user', user);
      if (user) {
        res.status(400).json({
          code: 1000,
          msg: '账户已存在'
        });
        return;
      }
      const newUser = new User({ username, password, email, avatar });
      bcrypt.genSalt(saltRounds, function (err, salt) {
        console.log(salt);
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(
            userInfo => {
              res.json({ code: 0, userInfo, msg: '注册成功' });
            },
            err => console.log(err)
          );
        });
      });
    }
  );
});
module.exports = router;
