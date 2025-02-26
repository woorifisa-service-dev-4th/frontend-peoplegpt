// src/lib/axios.js
import axios from 'axios';
import { API_URL } from './constants';
import useAuthStore from './auth';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor with debugging
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 본문 디버깅 
    if (config.data) {
      console.log(`Request to ${config.url}:`, config.data);
    }
    
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Authorization header added');
    }
    
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor with debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`Response from ${response.config.url}:`, response.data);
    return response;
  },
  async (error) => {
    console.error('Response error:', error);
    console.error('Error response:', error.response?.data);
    
    if (error.response?.status === 401) {
      console.log('Unauthorized access detected, logging out');
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;