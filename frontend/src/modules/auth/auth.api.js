import axios from 'axios';
import * as api from './../api';

export async function register({ data }) {
    const request = api.axiosApiInstance({
        path: '/register',
        method: 'POST',
        data
    });

    const response = await axios.request(request);
    return response.data;
}

export async function login({ data }) {
    const request = api.axiosApiInstance({
        path: '/login',
        method: 'POST',
        data
    });

    const response = await axios.request(request);
    localStorage.setItem('app_token', response.data.token);
    return response.data;
}
