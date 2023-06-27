import axios from "axios";

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

export default ApiService;