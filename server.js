const express = require('express');
const bodyParser = require('body-parser');
require('./utils/mongo_con');
const users = require('./routes/api/users');
const app = express();

const PORT = process.env.PORT || 5000;
// 解析post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

