const app = new (require('koa'))()
const Router = require('koa-router')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const path = require('path')
const router = new Router()
const controllers = require('./controllers/index.js')

controllers.init(router)

app.use(bodyParser({jsonLimit: '5mb'}))
app.use(router.routes()).use(router.allowedMethods())
app.use(koaStatic(path.join(__dirname, 'dist'), { gzip: true }))
app.use(cors({
  // 'Access-Control-Allow-origin': 'http://localhost:8080',
  // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
  // "Access-Control-Allow-Headers": 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
}))

const fs = require('fs')
const { PassThrough } = require('stream')
app.use(async ctx => {
  ctx.set('content-type', 'text/html; charset=utf-8')
  ctx.body = new PassThrough()
  const inStream = fs.createReadStream(path.join(__dirname, 'dist', 'index.html'))
  inStream.pipe(ctx.body)
  inStream.on('error', (err) => {
    console.error(err.stack)
    ctx.body.end()
  })
})

app.listen(8088)
