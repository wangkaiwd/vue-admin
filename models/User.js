/**
 * Created by wangkai on 2019/4/1
 */
const mongoose = require('mongoose');
const options = require('utils/schemaOpt');
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, required: true },
    date: { type: Date, default: Date.now }
  },
  options
);

module.exports = mongoose.model('user', UserSchema);
