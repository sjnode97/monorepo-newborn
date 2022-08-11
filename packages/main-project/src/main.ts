import {createApp, App, Component} from 'vue'
import { createPinia } from 'pinia'
import * as myComponents from "@newborn/components"

import './style.css'
import 'element-plus/dist/index.css'

import rootApp from './App.vue'
import router from "./router"
import {renderContent} from "element-plus";

const pinia = createPinia()
const app = createApp(rootApp)


const registerComponents = (app:App, components:Component) => {
    Object.keys(components).forEach((key:string) => {
        // @ts-ignore
        app.component(key, components[key]);
    });
};
registerComponents(app, myComponents)
app.use(pinia)
app.use(router)
app.mount('#app')
