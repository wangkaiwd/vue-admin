const mongoose = require('mongoose');
const { mongoURI } = require('../config/db');
// connect database
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(
    () => console.log(`Mongodb has connected`),
    err => console.log(err)
  );
