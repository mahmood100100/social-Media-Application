import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { fetchUserPosts } from '../../Api/PostsApi';
import { GetPost } from '../../DataTypes/PostType';
import { RootState } from '../../State/Store';
import { savePosts } from '../../state/Posts/PostsSlice';
import styles from '../Posts/Posts.module.css';
import { useParams } from 'react-router-dom';

function UserPosts() {
    const dispatch = useDispatch();
    const posts: GetPost[] = useSelector((state: RootState) => state.posts.userPosts);
    const {profileId} = useParams();
    const id = Number.parseInt(profileId || '');

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUserPosts = async (userId: number) => {
            setLoading(true);
            try {
                const userPosts = await fetchUserPosts(userId);
                dispatch(savePosts({ posts: userPosts, page: "" }));
            } catch (error) {
                setError('Failed to fetch user posts.');
            } finally {
                setLoading(false);
            }
        };
            loadUserPosts(id);
    }, [dispatch , id]);

    return (
        <div className={styles.Posts}>
            {posts.map((post , index) => (
                <Post key={index} post={post} />

            ))}
            {loading && (
                <div className={styles.cards}>
                    <div className={`${styles.card} ${styles['is-loading']}`}>
                        <div className={styles.content}>
                            <h2></h2>
                            <p></p>
                        </div>
                        <div className={styles.image}></div>
                    </div>
                </div>
            )}
            {error && (
                <div className={styles.error}>
                    <h1>ERROR!</h1>
                    {error}
                </div>
            )}
        </div>
    );
}

export default UserPosts;
