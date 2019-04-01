/**
 * Created by wangkai on 2019-04-01
 */
const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  type: { type: String, required: true },
  describe: { type: String, required: true },
  income: { type: String, required: true },
  expend: { type: String, required: true },
  cash: { type: String, required: true },
  remark: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('profile', ProfileSchema);
