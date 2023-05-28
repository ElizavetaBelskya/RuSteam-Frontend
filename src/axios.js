import axios from "axios";
// import router from "@/router";

axios.defaults.baseURL = 'http://localhost:80/'


// let refresh = false;
// axios.interceptors.response.use(
//     resp => resp,
//     async error => {
//         if (error.response.status === 401  && !refresh) {
//             localStorage.removeItem('accessToken');
//             refresh = true;
//             try {
//                 let token = localStorage.getItem('refreshToken')
//                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
//                 const res = await axios.post('auth/login');
//                 if (res.status === 200) {
//                     console.log(res.data.accessToken)
//                     localStorage.setItem('accessToken', res.data.accessToken);
//                     localStorage.setItem('refreshToken', res.data.refreshToken);
//                     const { config } = error;
//                     config.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
//                     return axios(config);
//                 } else {
//                     localStorage.removeItem('refreshToken');
//                     router.push('/login');
//                 }
//             } catch (refreshError) {
//                 localStorage.removeItem('accessToken');
//                 console.error('Ошибка при обновлении токена:', refreshError);
//                 router.push('/login');
//             }
//         } else {
//             refresh = false;
//         }
//
//         return Promise.reject(error);
//     }
// );
