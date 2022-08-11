import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../view/index.vue"
const routes = [
    {path: "/index" ,component:() => import("../view/index.vue")},
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router
