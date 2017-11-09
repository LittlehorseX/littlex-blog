const article = require('./article.js')
const count = require('./count.js')
const pic = require('./pic.js')

module.exports.init = (router) => {
  article.init(router)
  count.init()
  pic.init(router)
}
