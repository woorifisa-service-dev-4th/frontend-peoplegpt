// src/hooks/usePosts.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts, createPost, getComments, createComment } from '../api/posts';

export const usePosts = (type, classType) => {
  return useQuery({
    queryKey: ['posts', type, classType],
    queryFn: () => getPosts(type, classType),
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
};

export const useComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId),
    enabled: !!postId,
  });
};

export const useCreateComment = (postId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentData) => createComment(postId, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    },
  });
};