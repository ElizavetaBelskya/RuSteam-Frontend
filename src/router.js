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
import UserEditorPage from "@/views/UserEditorPage.vue";
import DeveloperRegistrationPage from "@/views/DeveloperRegistrationPage.vue";
import DeveloperPersonalProfile from "@/views/DeveloperPersonalProfile.vue";
import {getAccountId, getAccountIdResponse, getAccountInfo, getRefreshToken} from "@/plugins/token";
const routes = [
    {
        path: '/',
        name: 'AppList',
        component: AppList,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: Error,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/app/:appId',
        name: 'app',
        component: AppDescription,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/developer/:developerId',
        name: 'developer',
        component: DeveloperProfile,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            requiresAuth: true,
            roles: ['USER']
        }
    },
    {
        path: '/ask',
        name: 'ask',
        component: AccountEditorPage,
        meta: {
            requiresAuth: true,
            roles: ['ANON']
        }
    },
    {
        path: '/register_user',
        name: 'RegisterUser',
        component: UserRegistrationPage,
        meta: {
            requiresAuth: true,
            roles: ['ANON']
        }
    },
    {
        path: '/register_developer',
        name: 'RegisterDeveloper',
        component: DeveloperRegistrationPage,
        meta: {
            requiresAuth: true,
            roles: ['ANON']
        }
    },
    {
      path: '/edit_user',
      name: 'EditUser',
      component: UserEditorPage,
        meta: {
          requiresAuth: true
      }
    },
    {
        path: '/developer_profile',
        name: 'DeveloperPersonalProfile',
        component: DeveloperPersonalProfile,
        meta: {
            requiresAuth: true,
            roles: ['MODERATOR']
        }
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

async function isAuthenticated() {
    try {
        const accountId = await getAccountIdResponse();
        return accountId.status === 200;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            try {
                const tokenResponse = await getRefreshToken();
                if (tokenResponse.status === 200) {
                    return isAuthenticated();
                }
            } catch (error) {
                console.error('Ошибка при обновлении токена:', error);
                return false;
            }
        } else {
            console.error('Ошибка при получении аккаунта:', error);
            return false;
        }
    }
}


function getRole() {
    return new Promise((resolve) => {
        let id;
        getAccountId()
            .then((res) => {
                id = res;
                console.log(id);
                getAccountInfo(id).then((res) => {
                    resolve({
                        role: res.role,
                        status: 200,
                    });
            })
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    const tokenResponse = getRefreshToken();
                    if (tokenResponse.status === 200) {
                        return getAccountInfo(id);
                    } else {
                        resolve({
                            role: null,
                            status: 401,
                        });
                    }
                } else {
                    resolve({
                        role: null,
                        status: 500,
                    });
                }
            });
    });
}


router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !(await isAuthenticated())) {
        console.log('Не аутентифицирован')
        next(from);
    } else if (requiresAuth && !(await hasAccess(to.meta.roles))) {
        console.log('Не соответствует роль')
        next(from);
    } else {
        next();
    }
});



async function hasAccess(allowedRoles) {
    const {role, status} = await getRole();
    console.log(status)
    console.log(role + ' ' + allowedRoles)
    return allowedRoles.includes(role);
}

export default router

