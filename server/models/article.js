/**
 * 文章信息
 */

const mongoose = require('../mongo.js')
const Schema = mongoose.Schema
const moment = require('moment')

const articleSchema = new Schema({
  _id: Number,
  type: String,
  title: String,
  content: String,
  tags: [String],
  createTime: { type: String, default: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')},
  lastEditTime: { type: String, default: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}
})

module.exports = mongoose.model('Article', articleSchema)
