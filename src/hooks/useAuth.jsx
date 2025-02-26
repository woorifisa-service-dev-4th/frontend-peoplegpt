// // src/hooks/useAuth.js
// import { useNavigate } from 'react-router-dom';

// export const useAuth = () => {
//   const navigate = useNavigate();

//   return {
//     // 항상 인증된 상태로 처리
//     isAuthenticated: true,
    
//     // 테스트용 더미 유저 데이터
//     user: {
//       id: 1,
//       name: "Test User",
//       email: "test@example.com",
//       role: "user"
//     },

//     // 로그인 함수 (현재는 바로 대시보드로 이동)
//     login: async (credentials) => {
//       console.log('Login credentials:', credentials);
//       navigate('/dashboard/qna');
//     },

//     // 로그아웃 함수 (현재는 바로 로그인 페이지로 이동)
//     logout: () => {
//       console.log('Logout called');
//       navigate('/login');
//     }
//   };
// };


// src/hooks/useAuth.js
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../lib/auth';
import axios from '../lib/axios';

// API 함수 분리
const loginApi = async (credentials) => {
  const data = {
    email: credentials.email,
    password: credentials.password
  };
  
  console.log('Sending login request with data:', data);
  const response = await axios.post('/user/signIn', {
    email: credentials.email,
    password: credentials.password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const useAuth = () => {
  const navigate = useNavigate();
  const { token, user, setToken, setUser, logout: clearAuth } = useAuthStore();

  // useMutation을 사용한 로그인 처리
  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const { token, user } = data;
      setToken(token);
      setUser(user);
      navigate('/dashboard/qna');
    },
    onError: (error) => {
      console.error('Login failed:', error);
      console.error('Response data:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  });

  // 로그인 함수 (useMutation을 감싸는 래퍼)
  const login = useCallback(async (credentials) => {
    return loginMutation.mutateAsync(credentials);
  }, [loginMutation]);

  // 로그아웃 함수
  const logout = useCallback(() => {
    clearAuth();
    navigate('/login');
  }, [clearAuth, navigate]);

  return {
    isAuthenticated: !!token,
    user,
    login,
    logout,
    isLoggingIn: loginMutation.isPending
  };
};
