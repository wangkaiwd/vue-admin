/**
 * Created by wangkai on 2019-04-01
 */
const express = require('express');
const router = express.Router();
const Profile = require('models/Profile');
router.post('/add', (req, res) => {
  // res.json({ code: 0, data: {}, msg: '成功' });
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
router.post('/list', (req, res) => {
  Profile.find()
    .then(
      (profile = []) => res.json({ code: 0, data: { data: profile }, msg: '成功' }),
      err => console.log(err)
    );
});
module.exports = router;
