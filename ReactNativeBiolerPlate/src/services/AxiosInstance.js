import axios from 'axios';
import { getEnvVars } from './Environment';

const { apiUrl } = getEnvVars();

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 20000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (err) => Promise.reject(err)
)
export default axiosInstance;

export function ApiGet(apiEndpoint){
  apiEndpoint =  apiUrl + apiEndpoint;

  return axiosInstance({
    method: 'GET',
    url: apiEndpoint,
    headers:{
      Authorization: '',
      "Content-Type": "application/json",
    }
  })
}

export function ApiPost(apiEndpoint, apiData){
  apiEndpoint = apiUrl + apiEndpoint;
  return axiosInstance({
    method: 'POST',
    url: apiEndpoint,
    data: apiData,
    headers:{
      Authorization: ''
    }
  })
  
}


