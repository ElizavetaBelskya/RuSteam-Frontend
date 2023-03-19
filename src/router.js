import { createRouter, createWebHistory } from 'vue-router'
import AppList from './views/AppListPage.vue'
import Login from './views/LoginPage.vue'
import Register from './views/RegistrationPage.vue'

const routes = [
    {
        path: '/',
        name: 'AppList',
        component: AppList
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

