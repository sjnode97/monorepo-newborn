import {createApp, App, Component} from 'vue'
import { createPinia } from 'pinia'
import * as myComponents from "@newborn/components"
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'

import rootApp from './App.vue'
import router from "./router"


const pinia = createPinia()
const app = createApp(rootApp)

interface version {
    version?: string,
}
let componentsVersion:version
const registerComponents = (app:App, components:Component) => {
    Object.keys(components).forEach((key:string) => {
        if (key === 'version') {
            // @ts-ignore
            componentsVersion = {[key]:components[key]}
        } else {
            // @ts-ignore
            app.component(key, components[key]);
        }
    });
};
registerComponents(app, myComponents)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
