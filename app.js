require('./utils/pathAlias');
require('utils/mongoConnect');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const users = require('routers/api/users');
const PORT = 5000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/api/users', users);
app.get('/', (req, res) => {
  res.json({ msg: 'hello express' });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

