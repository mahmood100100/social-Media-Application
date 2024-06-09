import api from './ApiConfig';
import { CreatePost, GetPost } from '../DataTypes/PostType';

export const fetchPosts = async (currentPage: number): Promise<GetPost[]> => {
    try {
        const response = await api.get(`/posts?page=${currentPage}`);
        const postsData: GetPost[] = response.data.data;
        return postsData;
    } catch (error) {
        throw "Error fetching posts, please try again";
    }
};

export const addPost = async (postData: CreatePost): Promise<GetPost> => {
    try {
      const response = await api.post('/posts', postData , { headers : { 'Content-Type' : 'multipart/form-data'}});
      return response.data.data;
    } catch (error : any) {
      throw new Error(error.response.data.message);
    }
  };
