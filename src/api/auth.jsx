// src/api/auth.js
const API_URL = 'localhost:8282';

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