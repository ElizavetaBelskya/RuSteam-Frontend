import axios from "axios";
import router from "@/router";

export async function getAccountInfo(id) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    const response = await axios.get('accounts/' + id);
    return response.data;
}

export async function getAccountId() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    const response = await axios.get('accounts/account_id');
    return response.data;
}

export async function getUserInfo(id) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    const response = await axios.get('users/' + id);
    return response.data;
}

export async function getRefreshToken() {
    try {
        const token = localStorage.getItem('refreshToken');
        localStorage.removeItem('accessToken');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        const res = await axios.post('auth/login');
        if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
        } else {
            console.log('Ошибка при обновлении токена');
            localStorage.removeItem('refreshToken');
        }
        return res;
    } catch (refreshError) {
        localStorage.removeItem('accessToken');
        console.error('Ошибка при обновлении токена:', refreshError);
        return refreshError;
    }
}

export async function getAccount() {
    try {
        const accountId = await getAccountId();
        const accountInfo = await getAccountInfo(accountId);
        const userInfo = await getUserInfo(accountId);
        return {accountInfo, userInfo};
    } catch (error) {
        if (error.response && error.response.status === 401) {
            const tokenResponse = await getRefreshToken();
            if (tokenResponse.status === 200) {
                return getAccount();
            } else {
                return tokenResponse;
            }
        } else {
            await router.push('/error');
            console.error('Ошибка при выполнении запроса:', error);
        }
    }
}
