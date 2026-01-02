import axios from "axios";
import { confgureInterceptors } from './interceptors';

const api = axios.create({
    baseURL: 'http://localhost:5999/api',
    timeout: 5000,
    withCredentials: true
});

const configuredApiInstance = confgureInterceptors(api);

export default configuredApiInstance;