import axios from 'axios';
import { BaseApiUrl } from './ApiConfig';
import { PostType } from '../DataTypes/PostType';

const limit = 60;

export const fetchPosts = async (): Promise<PostType[]> => {
    try {
        const response = await axios.get(`${BaseApiUrl}/posts?limit=${limit}`);
        const postsData : PostType[] = response.data.data;
        return postsData;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
