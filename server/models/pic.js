/**
 * 图片信息
 */

const mongoose = require('../mongo.js')
const Schema = mongoose.Schema

const picSchema = new Schema({
  title: String,
  type: String,
  picData: String
})

module.exports = mongoose.model('Pic', picSchema)
