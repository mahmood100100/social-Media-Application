import axios from 'axios';
import { BaseApiUrl } from './ApiConfig';
import { PostType } from '../DataTypes/PostType';

export const fetchPosts = async (currentPage : number): Promise<PostType[]> => {
    try {
        const response = await axios.get(`${BaseApiUrl}/posts?page=${currentPage}`);
        const postsData : PostType[] = response.data.data;
        return postsData;
    } catch (error) {
        throw "Error fetching posts , please try again"
    }
};
