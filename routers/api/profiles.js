/**
 * Created by wangkai on 2019-04-01
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Profile = require('models/Profile');

// 要通过认证，必须要在请求头中携带token： Authorization: '具体的token'
router.post('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
  // 通过认证之后可以通过req.user获取用户信息
  Profile.find()
    .then(
      (profile = []) => {
        // toObject方法只能对一条文档使用
        const result = profile.map(item => item.toObject());
        res.json({ code: 0, data: { data: result }, msg: '成功' });
      },
      err => console.log(err)
    );
});
// 新增
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.create(req.body)
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '成功' });
        } else {
          res.json({ code: 10001, data: {}, msg: '新增出错' });
        }
      },
      err => console.log(err)
    );
});

// 编辑
router.post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '成功' });
        } else {
          res.json({ code: 10001, data: {}, msg: '没有找到数据' });
        }
      },
      err => console.log(err)
    );
});

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { id } = req.params;
  Profile.findByIdAndRemove(id)
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '删除成功' });
        } else {
          res.json({ code: 10001, data: {}, msg: '删除出错' });
        }
      },
      err => console.log(err)
    );
});
module.exports = router;
