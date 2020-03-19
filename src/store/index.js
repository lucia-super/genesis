import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// modules
import home from "./home/index.js"

// 创建Vuex的实例
const store = new Vuex.Store({
    modules: {
        home
    }
})

export default store