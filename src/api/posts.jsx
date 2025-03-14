import axios from 'axios';

const API_BASE_URL = '/api'; // Adjust based on your API configuration

// Fetch posts by category
export const getPostsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch posts');
  }
};

// Fetch a post by ID
export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch post details');
  }
};

// Create a new post
export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post`, postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create post');
  }
};

// Fetch comments for a post
export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch comments');
  }
};

// Create a new comment
export const createComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post/${postId}/comment`, commentData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create comment');
  }
};