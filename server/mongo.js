const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/blogx'

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, () => {})

mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + dbUrl)
})

mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected')
})

module.exports = mongoose
