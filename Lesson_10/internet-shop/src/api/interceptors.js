export const confgureInterceptors = (apiInstance) => {
    apiInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            }
            console.log(`Sent request:`, config.method, config.url);

            return config;
        },
        ( error ) => {
            console.error(error);
            return Promise.reject(error);
        }
    );

    apiInstance.interceptors.response.use(
        ( response ) => {
            console.log(`Received response:`, response.status, response.data);
            return response.data;
        },
        async ( error ) => {
            if (error.response?.status === 401) {
                const responseData = await apiInstance.post('/auth/refresh');
                localStorage.setItem('access-token', JSON.stringify(responseData.accessToken) );
                return apiInstance(error.config);
            }

            if (error.response) {
                console.warn(`Response error with status code ${error.response.status}: `, error.response.data);
            }
            else {
                console.warn(`Unknown error during response: `, error)
            }

            return Promise.reject(error);
        }
    );

    return apiInstance;
};