import { createRouter, createWebHistory } from 'vue-router'
import AppList from './views/AppListPage.vue'
import Login from './views/LoginPage.vue'
import Register from './views/RegistrationPage.vue'
import Error from './views/ErrorPage.vue'
import AppDescription from "@/views/AppDescriptionPage.vue";
import Profile from '@/views/ProfilePage.vue'
import NotFound from '@/views/NotFound.vue';
import DeveloperProfile from "@/views/DeveloperProfile.vue";
import AccountEditorPage from "@/views/AccountEditorPage.vue";
import UserRegistrationPage from "@/views/UserRegistrationPage.vue";
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
        path: '/app/:appId',
        name: 'app',
        component: AppDescription
    },
    {
        path: '/developer/:developerId',
        name: 'developer',
        component: DeveloperProfile
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: '/ask',
        name: 'ask',
        component: AccountEditorPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/register_user',
        name: 'RegisterUser',
        component: UserRegistrationPage
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function isAuthenticated() {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
}


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !isAuthenticated()) {
        next('/');
    } else {
        next();
    }
});


export default router

