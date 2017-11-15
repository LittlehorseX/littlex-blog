const Pic = require('../models/pic.js')
const fs = require('fs-promise')
const shortid = require('shortid')

module.exports.init = router => {
  router.post('/pic/upload', ctx => uploadPic(ctx))
  router.post('/pic/update', ctx => updatePic(ctx))
  router.post('/pic/delete', ctx => deletePic(ctx))
  router.get('/pic/list/:type', ctx => picList(ctx))
  router.get('/pic/:type/:id', ctx => picDetail(ctx))
}

async function uploadPic (ctx) {
  let data = {}, success = true, errmsg = ''
  const para = ctx.request.body
  const picId = shortid.generate()
  await fs.writeFile('static/upload/' + picId + '.png', new Buffer(ctx.request.body.picData.replace(/^data.*;base64,/, ''), 'base64'))
  const pic = new Pic({
    title: para.title,
    type: para.type,
    url: 'static/upload/' + picId + '.png'
  })
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

async function updatePic (ctx) {
  let data = {}, success = true, errmsg = ''
  const {id, title} = ctx.request.body
  await Pic.findByIdAndUpdate({_id: id}, {title}).then(res => {
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

async function deletePic (ctx) {
  let data = {}, success = true, errmsg = ''
  await Pic.remove({_id: ctx.request.body.id}, (err, res) => {
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
