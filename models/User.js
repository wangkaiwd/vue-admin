/**
 * Created by wangkai on 2019/4/1
 */
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  role: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', UserSchema);
