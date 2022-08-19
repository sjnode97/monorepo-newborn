import Vue, {createApp, App, Component, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import * as myComponents from "@newborn/components"
import ElementPlus from 'element-plus'
import './style.css'
// import 'element-plus/dist/index.css'
import Directives from "./directive"
import rootApp from './App.vue'
import router from "./router"


const pinia = createPinia()
const app = createApp(rootApp)

interface version {
    version?: string,
}
let componentsVersion:version

let viewComponents = import.meta.glob("../../components/src/**/index.vue")
let optionComponents = import.meta.glob("../../components/src/**/option.vue")
for (const [key, value] of Object.entries(viewComponents)) {
    var reg = new RegExp('/index.vue','g');
    const viewName = key.slice(21).replace(reg, "")
    app.component(viewName, defineAsyncComponent<any>(value))
}
for (const [key, value] of Object.entries(optionComponents)) {
    var reg = new RegExp('.vue','g');
    var slash = new RegExp('/','g');
    const viewName = key.slice(21).replace(reg, "").replace(slash, "-")
    console.log(viewName)
    console.log(key)
    console.log(value)
    app.component(viewName, defineAsyncComponent<any>(value))
}
app.use(pinia)
// @ts-ignore
app.use(ElementPlus)
app.use(router)
app.use(Directives)
app.mount('#app')
