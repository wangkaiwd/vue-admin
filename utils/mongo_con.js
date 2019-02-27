const mongoose = require('mongoose');
const { mongoURI } = require('../config/db');
// connect database
mongoose.connect(mongoURI);
const db = mongoose.connection;

db.once('open').then(

)
