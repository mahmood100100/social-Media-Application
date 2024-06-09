import api from "./ApiConfig";
import { PostWithComments } from "../DataTypes/PostType";
import { Comment} from "../DataTypes/CommentsType";

export const fetchPostWithComments = async (postId: number): Promise<PostWithComments> => {
    try {
        const response = await api.get(`/posts/${postId}`);
        const data: PostWithComments = response.data.data;
        return data;
    } catch (error) {
        throw new Error("Error fetching comments, please try again");
    }
};

export const shareComment = async (postId: number, body: string): Promise<Comment> => {
    try {
        const response = await api.post(`/posts/${postId}/comments`, { body });
        const newComment: Comment = response.data.data;
        return newComment;
    } catch (error) {
        throw new Error("Error posting comment, please try again");
    }
};
