import axios from 'axios';
import history from '../history';

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});


httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        // маємо додати до запиту заголовок Authorization з цим токеном
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}, 
(err) => { Promise.reject(err)});


httpClient.interceptors.response.use((response)=> {
    // success handler
    // Виконується, якщо у відповіді 1хх, 2хх, 3хх статус-код
    if (response.data.tokens) {
        const {data: {tokens: {accessToken, refreshToken}}} = response
    // якщо в успішній відповіді прийшли токени - маємо їх покласти до localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    }
    return response
}, (error)=>{
    // error handler

    /*
    Якщо помилка з кодом 403 - токен коцнутий(або прострочився). Необхний рефреш сесії
    Якщо помилка з кодом 401 - аксессТокен відсутній або рефреш не вдався, необхідно перелогінити юзера
    */
    if (error.response.status === 403 ) {
        // рефрешримо сесію 
        // маємо зробити запит на /refresh з РТ, щоби оновити сесію, а після цього повторно зробити початковий запит за ресурсом, який хотів юзер
        refreshSession()
        .then(() => {
            // коли запит на оновлення сесії успішно повернувся і поклав до LS свіжі токени - робимо заново той же самий запит
            return httpClient(error.config); 
        })

    } else if (error.response.status === 401) {
        logOut();
        /// перекидаємо юзера на сторінку авторизації
        history.replace('/');
    }

})


/// TODO: response interceptors
// Якщо приходить 403 помилка - намагаємося оновити сесію за допомогою RefreshToken

/* Auth API */

export const signIn = async (data) => await httpClient.post('/users/sign-in', data);
export const signUp = async (data) => await httpClient.post('/users/sign-up', data);


export const refreshSession = async () => {
    // беремо з localStorage refreshToken і надсилаємо його на /refresh
    const rt = localStorage.getItem('refreshToken');
    return await httpClient.post('/users/refresh', {rt});
}

export const logOut = async () => {
    localStorage.clear();
}


/* Chat API */

export const getUserChats = async () => await httpClient.get('/chats')

