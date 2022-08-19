import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../view/index.vue"
const routes = [
    {path: "/" , redirect:'/index'},
    {path:"/:pathMatch(.*)*", redirect:'/'},
    {path: "/index" ,name: 'index',component:() => import("../view/index.vue")},
    {path: "/test" ,name: 'test',component:() => import("../view/test.vue")},
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router

