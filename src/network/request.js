import axios from 'axios';


export function request(config) {
    const test = axios.create({
        baseURL: "http://49.235.115.254",
        // baseURL: "/api",
        timeout: 5000
    });

    test.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    });

    return test(config);
}