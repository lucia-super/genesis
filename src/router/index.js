import Home from '@/screen/Home'
import school from "@/screen/school/list.vue";
import schoolDetail from "@/screen/school/detail.vue";
import students from "@/screen/students/list.vue";
import studentsDetail from "@/screen/students/detail.vue";
export default [ 
{ path: '/Home', component: Home },
{ path: '/school', component: school },
{ path: '/schoolDetail', component: schoolDetail },
{ path: '/students', component: students },
{ path: '/studentsDetail', component: studentsDetail },
]