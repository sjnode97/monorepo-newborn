import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from "./router"

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
