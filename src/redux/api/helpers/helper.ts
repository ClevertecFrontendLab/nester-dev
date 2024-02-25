import Cookies from 'js-cookie';

export const getAccessToken = () => {
    return Cookies.get('accessToken');
};

export const saveTokenToStorage = (token: string) => {
    Cookies.set('accessToken', token);
};

export const removeFromStorage = () => {
    Cookies.remove('accessToken');
};
