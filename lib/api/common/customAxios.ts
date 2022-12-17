import { ACCESS_TOKEN } from '@constants/cookie';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'universal-cookie';

const clientAPI = axios.create({
  baseURL: 'http://localhost:4000',
});

clientAPI.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  const cookies = new Cookies();
  const accessToken = cookies.get(ACCESS_TOKEN);

  if (!!accessToken && config.headers) {
    config.headers.Authorization = 'Bearer ' + accessToken;
  }

  return config;
});

export default clientAPI;
