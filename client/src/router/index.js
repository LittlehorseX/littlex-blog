import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/index'
import Life from 'components/life/index'
import LifeList from 'components/life/articlelist'
import LifeEdit from 'components/life/articleedit'
import LifeArticle from 'components/life/articledetail'
import Work from 'components/work/index'
import WorkList from 'components/work/articlelist'
import WorkEdit from 'components/work/articleedit'
import WorkArticle from 'components/work/articledetail'
import Pic from 'components/pic/index'
import PicHome from 'components/pic/pichome'
import PicEdit from 'components/pic/picedit'
import PicList from 'components/pic/piclist'
import PicDetail from 'components/pic/picdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/life',
      component: Life,
      children: [{
        path: '',
        component: LifeList
      }, {
        path: 'edit/:id',
        component: LifeEdit
      }, {
        path: 'article/:id',
        name: 'lifedetail',
        component: LifeArticle
      }]
    },
    {
      path: '/work',
      component: Work,
      children: [{
        path: '',
        component: WorkList
      }, {
        path: 'edit/:id',
        component: WorkEdit
      }, {
        path: 'article/:id',
        name: 'workdetail',
        component: WorkArticle
      }]
    },
    {
      path: '/pic',
      component: Pic,
      children: [{
        path: '',
        component: PicHome
      }, {
        path: 'edit/:id',
        name: 'picedit',
        component: PicEdit
      }, {
        path: ':type',
        name: 'piclist',
        component: PicList
      }, {
        path: ':type/:id',
        name: 'picdetail',
        component: PicDetail
      }]
    }
  ]
})
