const Article = require('../models/article.js')
const Count = require('../models/count.js')

module.exports.init = router => {
  router.post('/article/add', ctx => articleAdd(ctx))
  router.post('/article/update', ctx => articleUpdate(ctx))
  router.get('/article/count', ctx => articleCount(ctx))
  router.get('/article/list/:type', ctx => articleList(ctx))
  router.get('/article/:id', ctx => articleDetail(ctx))
}

async function articleAdd (ctx) {
  let data = {}, value = 0, success = true, errmsg = ''
  await idValue().then(res => {
    value = res
  }).catch(err => {
    success = false
    errmsg = err
  })
  const req = ctx.request.body
  const para = {
    _id: value || 0,
    type: req.type || 'life',
    title: req.title || '',
    content: req.content || '',
    tags: req.tags || [],
  }
  const art = new Article(para)
  await art.save().then(res => {
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

async function idValue (ctx) {
  let data = {value: 0}
  await Count.findByIdAndUpdate({_id: 'idMax'}, {$inc: { value: 1}}).then(res => {
    data = res
  }).catch(err => console.log(err))
  return data.value
}

async function articleUpdate (ctx) {
  let data = {}, success = true, errmsg = ''
  const {id, title, content, tags, lastEditTime} = ctx.request.body
  await Article.findByIdAndUpdate({_id: id}, {title, content, tags, lastEditTime}).then(res => {
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

async function articleCount (ctx) {
  let data = 0, success = true, errmsg = ''
  await Article.count({}, (err, count) => {
    if (err) {
      success = false
      errmsg = err
    } else {
      data = count
    }
  })
  return data
}

async function articleList (ctx) {
  let data = {}, success = true, errmsg = ''
  await Article.find({type: ctx.params.type}, (err, res) => {
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

async function articleDetail (ctx) {
  let data = {}, success = true, errmsg = ''
  await Article.findById(ctx.params.id).then(res => {
    data = res
  })
  ctx.status = 200
  ctx.body = {
    success,
    errmsg,
    data
  }
}
