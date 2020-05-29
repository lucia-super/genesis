import Home from '@/custom/home/Home'
import router from "@/modules/router.js"
export default [
    { name: 'Home', path: '/home', component: Home },
    ...router,
]