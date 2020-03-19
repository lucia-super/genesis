import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        { path: '/', component: Home }
    ]
})

export default router