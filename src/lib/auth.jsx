import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;

// src/api/auth.js
const API_URL = 'localhost:8080';

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
