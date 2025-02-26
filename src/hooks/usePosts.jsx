import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// API functions
const API_BASE_URL = '/api';

// Get posts by category - matches the backend endpoint
const getPostsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch posts');
  }
};

// Get single post by ID - matches the backend endpoint
const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch post details');
  }
};

// Get comments for a post - needs to be implemented in backend
const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch comments');
  }
};

// Create a new post - matches the POST /post endpoint
const createNewPost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post`, postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create post');
  }
};

// Create a new comment - needs to be implemented in backend
const createNewComment = async ({ postId, commentData }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/post/${postId}/comment`, commentData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create comment');
  }
};

// Custom hooks for components to use
export const usePosts = (category) => {
  return useQuery({
    queryKey: ['posts', 'category', category],
    queryFn: () => getPostsByCategory(category),
    enabled: !!category,
  });
};

export const usePost = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });
};

export const useComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    enabled: !!postId,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createNewPost,
    onSuccess: (data, variables) => {
      // Invalidate relevant queries to refetch data
      queryClient.invalidateQueries(['posts', 'category', variables.category]);
    },
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createNewComment,
    onSuccess: (data, variables) => {
      // Invalidate comments for this post
      queryClient.invalidateQueries(['comments', variables.postId]);
      // Also invalidate the post to update any comment counts
      queryClient.invalidateQueries(['post', variables.postId]);
    },
  });
};