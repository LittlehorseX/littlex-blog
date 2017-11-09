/**
 * 文章id最大值
 */

const mongoose = require('../mongo.js')
const Schema = mongoose.Schema

const countSchema = new Schema({
  _id: String,
  value: { type: Number, default: 0}
})

module.exports = mongoose.model('Count', countSchema)
