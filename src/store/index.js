import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// modules
import home from "./home/index.js"

// 创建Vuex的实例
export default new Vuex.Store({
    modules: {
        home
    }
})