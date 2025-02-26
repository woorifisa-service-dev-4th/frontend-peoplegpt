// src/hooks/useSignUp.js
import { useMutation } from '@tanstack/react-query';
import axios from '../lib/axios';

// API 함수 분리
const signUpApi = async (userData) => {
  console.log('Sending signup request with data:', userData);
  const response = await axios.post('/user/signUp', userData);
  return response.data;
};

export const useSignUp = () => {
  const signUpMutation = useMutation({
    mutationFn: signUpApi,
    onError: (error) => {
      console.error('SignUp failed:', error);
      console.error('Response data:', error.response?.data);
      throw new Error(error.response?.data?.message || 'SignUp failed');
    }
  });

  const signUp = async (userData) => {
    return signUpMutation.mutateAsync(userData);
  };

  return {
    signUp,
    isLoading: signUpMutation.isPending,
    error: signUpMutation.error
  };
};