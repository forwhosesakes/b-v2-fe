
import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';



const httpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});


const logOnDev = (message: string, log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError) => {
  if (import.meta.env.DEV) {
    console.log(message, log);
  }
};

httpClient.interceptors.request.use((request) => {
//TODO: Add bearer token later
  return request;
});

httpClient.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(`✨ [${method?.toUpperCase()}] ${url} | Response ${status}`, response);

    return response;
  },
  (error) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    logOnDev(`🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${data?.message || ''} | ${message}`, error);

    return Promise.reject(error);
  },
);

export default httpClient;