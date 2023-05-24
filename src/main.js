import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'
import './axios'
import DefaultLayout from './layouts/default.vue'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)


app.use(vuetify)
app.use(router)
app.component('default-layout', DefaultLayout)

app.config.productionTip = false

app.mount('#app')


