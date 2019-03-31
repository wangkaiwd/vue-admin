const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./utils/mongo_con');
require('./utils/passport');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const app = express();
const urlPrefix = '/api';
const PORT = process.env.PORT || 5000;
// 解析post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(`${urlPrefix}/users`, users);
app.use(`${urlPrefix}/profiles`, profiles);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

