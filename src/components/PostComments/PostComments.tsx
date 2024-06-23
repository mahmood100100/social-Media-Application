import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostWithComments } from '../../Api/CommentsApi';
import { RootState } from '../../State/Store';
import { saveComments } from '../../State/Comments/CommentsSlice';
import ShareComment from '../ShareComment/ShareComment';
import styles from './PostComments.module.css';
import { useNavigate } from 'react-router-dom';

interface CommentProps {
    postId: number;
}

const PostComments: React.FC<CommentProps> = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.comments);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetchPostWithComments(postId);
                dispatch(saveComments(response.comments));
            } catch (err) {
                setError('Failed to fetch comments.');
            } finally {
                setLoading(false);
            }
        };

        getComments();
    }, [dispatch, postId]);

    return (
        <div className={styles.commentsSection}>
            <h3>Comments</h3>
            {loading && <div>Loading comments...</div>}
            {error && <div>{error}</div>}
            {comments.length > 0 ? (
                comments.map(comment => (
                    <div key={comment.id} className={styles.comment}>
                        <img
                        onClick={() => {
                            console.log("hellow")
                            navigate(`/profile/${comment.author.id}`)
                        }}
                            src={comment.author.profile_image || 'default-profile.png'}
                            alt={`${comment.author.username}'s profile`}
                            className={styles.profileImage}
                        />
                        <div className={styles.commentContent}>
                            <span onClick={() => {
                              navigate(`/profile/${comment.author.id}`)
                            }} className={styles.commentAuthor}>{comment.author.username}</span>
                            <p className={styles.commentBody}>{comment.body}</p>
                        </div>
                    </div>
                ))
            ) : (
                !loading && <div>No comments available.</div>
            )}
            <ShareComment postId={postId} />
        </div>
    );
};

export default PostComments;
