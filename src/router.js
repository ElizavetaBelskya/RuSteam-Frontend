import { createRouter, createWebHistory } from 'vue-router'
import AppList from './views/AppListPage.vue'
import Login from './views/LoginPage.vue'
import Register from './views/RegistrationPage.vue'
import Error from './views/ErrorPage.vue'
import AppDescription from "@/views/AppDescriptionPage.vue";
import Profile from '@/views/ProfilePage.vue'
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
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    },
    {
        path: '/1',
        name: 'app',
        component: AppDescription
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

