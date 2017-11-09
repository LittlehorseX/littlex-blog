const Pic = require('../models/pic.js')

module.exports.init = router => {
  router.post('/pic/upload', ctx => uploadPic(ctx))
  router.get('/pic/list/:type', ctx => picList(ctx))
  router.get('/pic/:type/:id', ctx => picDetail(ctx))
}

async function uploadPic (ctx) {
  let data = {}, success = true, errmsg = ''
  const pic = new Pic(ctx.request.body)
  await pic.save().then(res => {
    data = res
  }).catch(err => {
    success = false
    errmsg = err
  })
  ctx.status = 200
  ctx.body = {
    success,
    errmsg,
    data
  }
}

async function picList (ctx) {
  let data = {}, success = true, errmsg = ''
  await Pic.find({type: ctx.params.type}, (err, res) => {
    if (err) {
      success = false
      errmsg = err
    }
    else {
      data = res
    }
  })
  ctx.status = 200
  ctx.body = {
    success,
    errmsg,
    data
  }
}

async function picDetail (ctx) {
  let data = {}, success = true, errmsg = ''
  await Pic.findById(ctx.params.id).then(res => {
    data = res
  })
  ctx.status = 200
  ctx.body = {
    success,
    errmsg,
    data
  }
}
