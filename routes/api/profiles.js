/**
 * Created by wangkai on 2019-03-31
 */
const router = require('express').Router();
const Profile = require('../../models/Profile');
const passport = require('passport');
router.get('/test', (req, res) => {
  res.json({ code: 0, data: {}, msg: '成功' });
});

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newProfile = new Profile(req.body);
  newProfile.save()
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '成功' });
        } else {
          res.json({ code: 66666, data: {}, msg: '保存出错' });
        }
      },
      err => console.log(err)
    );
});
module.exports = router;
