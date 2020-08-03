import config from './../config.json';

export function authHeader() {
    // return authorization header with jwt token
    const token = JSON.parse(localStorage.getItem(config.CONSTANT.LOGIN_KEY));
    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}