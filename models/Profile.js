/**
 * Created by wangkai on 2019-03-31
 */
const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  remark: { type: String },
  type: { type: String, required: true },
  describe: { type: String },
  income: { type: String, required: true },
  expend: { type: String, required: true },
  cash: { type: String, required: true },
  date: { type: Date, default: new Date }
});

module.exports = mongoose.model('profile', ProfileSchema);
