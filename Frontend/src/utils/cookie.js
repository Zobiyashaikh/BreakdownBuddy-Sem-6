import Cookies from 'js-cookie';

export const setCookie = (name, value, options) => {
    return Cookies.set(name, value, { expires: 7, path: '/' })
}

export const removeCookie = (name) => {
    return Cookies.remove(name)
}

export const getCookie = (name) => {
    return Cookies.get(name)
}