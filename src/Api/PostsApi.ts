import api from './ApiConfig';
import { CreatePost, DeletePost, GetPost } from '../DataTypes/PostType';

export const fetchPosts = async (currentPage: number): Promise<GetPost[]> => {
  try {
    const response = await api.get(`/posts?page=${currentPage}`);
    const postsData: GetPost[] = response.data.data;
    return postsData;
  } catch (error) {
    throw "Error fetching posts, please try again";
  }
};

export const fetchUserPosts = async (userId: number): Promise<GetPost[]> => {
  try {
    const response = await api.get(`/users/${userId}/posts?sortBy=created_at&orderBy=des`);
    const userPosts: GetPost[] = response.data.data;
    return userPosts;
  } catch (error) {
    throw "Error fetching posts, please try again";
  }
};

export const addPost = async (postData: CreatePost): Promise<GetPost> => {
  try {
    const response = await api.post('/posts', postData, { headers: { 'Content-Type': 'multipart/form-data' } });
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const updatePost = async (postId : number , body: string): Promise<GetPost> => {
  try {
    const response = await api.put(`/posts/${postId}`, {body});
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deletePost = async (postId: number): Promise<GetPost> => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
