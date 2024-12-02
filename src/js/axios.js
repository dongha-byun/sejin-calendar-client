import axios from "axios";
import { ACCESS_TOKEN_KEY } from "./login/login";

export const serverURL = "http://localhost:8888";

export const api = axios.create({
    baseURL: serverURL
});

const ApiService = {
    get: async(url) => {
        return await api.get(url);
    },
    post: async(url, body) => {
        return await api.post(url, body);
    },
    delete: async(url) => {
        return await api.delete(url);
    },
    put: async(url, body) => {
        return await api.put(url, body);
    }
}

api.interceptors.request.use(
    (config) => {
        console.log(config);
        let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

        if(accessToken) {
            config.headers.Authorization = "Bearer " + accessToken;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default ApiService;