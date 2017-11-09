import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: '',   // 页面目录 life work pic
    type: '',   // 页面类型 home list edit detail
    tags: []     // 文章当前tag
  },
  getters: {
  },
  mutations: {
    setMenu (state, payload) {
      state.menu = payload
    },
    setType (state, payload) {
      state.type = payload
    },
    setTags (state, payload) {
      state.tags = payload
    }
  }
})
