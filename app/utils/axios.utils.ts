import axios from 'axios';
import { AppConfig } from '../config';

export const AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_API_URL,
});
