// src/hooks/useAuth.js
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  return {
    // 항상 인증된 상태로 처리
    isAuthenticated: true,
    
    // 테스트용 더미 유저 데이터
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      role: "user"
    },

    // 로그인 함수 (현재는 바로 대시보드로 이동)
    login: async (credentials) => {
      console.log('Login credentials:', credentials);
      navigate('/dashboard/qna');
    },

    // 로그아웃 함수 (현재는 바로 로그인 페이지로 이동)
    logout: () => {
      console.log('Logout called');
      navigate('/login');
    }
  };
};



// // src/hooks/useAuth.js
// import { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAuthStore from '../lib/auth';
// import axios from '../lib/axios';

// export const useAuth = () => {
//   const navigate = useNavigate();
//   const { token, user, setToken, setUser, logout: clearAuth } = useAuthStore();

//   // 로그인 함수
//   const login = useCallback(async (credentials) => {
//     try {
//       const response = await axios.post('/api/auth/login', credentials);
//       const { token, user } = response.data;

//       // 토큰과 유저 정보 저장
//       setToken(token);
//       setUser(user);

//       // 대시보드로 이동
//       navigate('/dashboard/qna');
      
//       return { token, user };
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw new Error(error.response?.data?.message || 'Login failed');
//     }
//   }, [navigate, setToken, setUser]);

//   // 로그아웃 함수
//   const logout = useCallback(async () => {
//     try {
//       // 백엔드 로그아웃 API 호출 (필요한 경우)
//       if (token) {
//         await axios.post('/api/auth/logout');
//       }
//     } catch (error) {
//       console.error('Logout API call failed:', error);
//     } finally {
//       // 로컬 상태 초기화
//       clearAuth();
//       navigate('/login');
//     }
//   }, [token, clearAuth, navigate]);

//   // 유저 정보 새로고침 함수
//   const refreshUser = useCallback(async () => {
//     if (!token) return;

//     try {
//       const response = await axios.get('/api/auth/me');
//       setUser(response.data);
//     } catch (error) {
//       console.error('Failed to refresh user:', error);
//       if (error.response?.status === 401) {
//         clearAuth();
//         navigate('/login');
//       }
//     }
//   }, [token, setUser, clearAuth, navigate]);

//   return {
//     isAuthenticated: !!token,
//     user,
//     token,
//     login,
//     logout,
//     refreshUser
//   };
// };