/**
 * Created by wangkai on 2019/4/1
 */
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ code: 0, data: {}, msg: '成功' });
});

router.post('/login', (req, res) => {

});

module.exports = router;
