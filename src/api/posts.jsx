// src/api/posts.js
import useAuthStore from '../lib/auth';

const API_URL = 'YOUR_API_URL';

const getAuthHeaders = () => {
  const token = useAuthStore.getState().token;
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getPosts = async (type, classType) => {
  try {
    const response = await fetch(
      `${API_URL}/posts?type=${type}&classType=${classType}`,
      {
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const getComments = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const createComment = async (postId, commentData) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      throw new Error('Failed to create comment');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};