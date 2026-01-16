import axios from "axios";
import { confgureInterceptors } from './interceptors';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    withCredentials: true
});

const configuredApiInstance = confgureInterceptors(api);

export default configuredApiInstance;