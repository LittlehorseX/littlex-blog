const axios = require('axios')

function createArticle (para) {
  return axios({
    method: 'post',
    url: '/article/add',
    data: para,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function updateArticle (para) {
  return axios({
    method: 'post',
    url: '/article/update',
    data: para,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function uploadPic (para) {
  return axios({
    method: 'post',
    url: '/pic/upload',
    data: para,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function updatePic (para) {
  return axios({
    method: 'post',
    url: '/pic/update',
    data: para,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function getArticleCount () {
  return axios.get('/article/count')
}

function getArticleList (type) {
  return axios.get(`/article/list/${type}`)
}

function getArticleDetail (id) {
  return axios.get(`/article/${id}`)
}

function getPicList (type) {
  return axios.get(`/pic/list/${type}`)
}

function getPicDetail (type, id) {
  return axios.get(`/pic/${type}/${id}`)
}

function delPic (id) {
  return axios({
    method: 'post',
    url: '/pic/delete',
    data: {
      id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

module.exports = {
  createArticle,
  updateArticle,
  uploadPic,
  updatePic,
  getArticleCount,
  getArticleList,
  getArticleDetail,
  getPicList,
  getPicDetail,
  delPic
}
