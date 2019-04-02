/**
 * Created by wangkai on 2019-04-01
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Profile = require('models/Profile');
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.create(req.body)
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '成功' });
        } else {
          res.json({ code: 10001, data: {}, msg: '保存出错' });
        }
      },
      err => console.log(err)
    );
});
// 要通过认证，必须要在请求头中携带token： Authorization: '具体的token'
router.post('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
  // 通过认证之后可以通过req.user获取用户信息
  Profile.find()
    .then(
      (profile = []) => res.json({ code: 0, data: { data: profile }, msg: '成功' }),
      err => console.log(err)
    );
});
module.exports = router;
