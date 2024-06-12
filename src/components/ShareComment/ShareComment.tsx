import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostWithComments, shareComment } from '../../Api/CommentsApi';
import { incrementUserCommentsCount } from '../../State/User/UserSlice';
import { editPostCommentsCount } from '../../State/Posts/PostsSlice';
import { saveComments } from '../../State/Comments/CommentsSlice';
import {RootState} from '../../State/Store'
import styles from './ShareComment.module.css';
import { Bounce, toast } from 'react-toastify';

interface ShareCommentProps {
    postId: number;
}

const ShareComment: React.FC<ShareCommentProps> = ({ postId }) => {
    const dispatch = useDispatch();

    const [commentBody, setCommentBody] = useState('');

    const page: string = useSelector((state: RootState) => state.page.currentPage);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentBody(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await shareComment(postId, commentBody);
            const { comments, comments_count } = await fetchPostWithComments(postId);
            dispatch(saveComments(comments));
            dispatch(incrementUserCommentsCount());
            dispatch(editPostCommentsCount({ postId, commentsCount: comments_count, page }));
            setCommentBody('');
            toast.success('comment added successfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error(`${error}`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div className={styles.createComment}>
            <input
                className={styles.commentInput}
                placeholder="What's on your mind?"
                value={commentBody}
                onChange={handleChange}
            />
            <button className={`button ${styles.submitButton}`} onClick={handleSubmit}>
                Post
            </button>
        </div>
    );
};

export default ShareComment;
