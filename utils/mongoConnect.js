const mongoose = require('mongoose');
const { mongoUrl } = require('config/common');
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(
    () => console.log(`Mongodb has connected`),
    err => console.log(err)
  );

