import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { POST_TYPES } from '../lib/constants';
import { API_URL } from '../lib/constants';

// Get posts by category and filter
const getPostsByCategory = async (category, filter = null) => {
  try {
    let url = `${API_URL}/post?category=${category}`;
    if (filter) {
      url += `&filter=${filter}`;
    }
    
    const response = await axios.get(url);
    console.log(response);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch posts');
  }
};

// Get single post by ID
const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/post/${postId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch post details');
  }
};

// Get comments for a post
const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`/comment/list/${postId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch comments');
  }
};

// Create a new QNA post
const createQNAPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/post/create`, postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create post');
  }
};

// Create a new Mentor post (for CODESHARE or DAILY)
const createMentorPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/post/mentor/create`, postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create mentor post');
  }
};

// Create a new comment
const createComment = async ({ postId, commentData }) => {
  try {
    const response = await axios.post(`/comment/create`, {
      ...commentData,
      postId: postId
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create comment');
  }
};

// Custom hooks for components to use
export const usePosts = (category, filter = null) => {
  return useQuery({
    queryKey: ['posts', category, filter],
    queryFn: () => getPostsByCategory(category, filter),
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
    mutationFn: (postData) => {
      if (postData.category === POST_TYPES.QNA) {
        return createQNAPost(postData);
      } else {
        return createMentorPost(postData);
      }
    },
    onSuccess: (data, variables) => {
      // Invalidate relevant queries to refetch data
      queryClient.invalidateQueries(['posts', variables.category]);
    },
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createComment,
    onSuccess: (data, variables) => {
      // Invalidate comments for this post
      queryClient.invalidateQueries(['comments', variables.postId]);
      // Also invalidate the post to update any comment counts
      queryClient.invalidateQueries(['post', variables.postId]);
    },
  });
};