const Count = require('../models/count.js')

module.exports.init = () => {
  Count.create({
    _id: 'idMax',
    value: 0
  })
}
