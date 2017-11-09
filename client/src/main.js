// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

let MessageBox = Vue.extend(require('./common/notification.vue'))
let instance
var message = (options) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  instance = new MessageBox({
    data: options
  })
  instance.vm = instance.$mount()
  if (options.type) {
    instance.vm.$el.children[0].className += options.type
  }
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

const type = ['success', 'info', 'warning', 'error']
type.forEach((type) => {
  message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return message(options)
  }
})

Vue.prototype.$message = message
