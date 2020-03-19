import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import routerModules from '@/router'
import storeModules from '@/store'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)


const store = new Vuex.Store({
  modules: storeModules
})

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerModules
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
