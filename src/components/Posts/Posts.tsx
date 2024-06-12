import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { fetchPosts } from '../../Api/PostsApi';
import { GetPost } from '../../DataTypes/PostType';
import { RootState } from '../../State/Store';
import { savePosts, clearPosts } from '../../state/Posts/PostsSlice';
import styles from './Posts.module.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts: GetPost[] = useSelector((state: RootState) => state.posts.homePosts);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const loadPosts = async (page: number) => {
    loadingRef.current = true;
    setLoading(true);
    let newPosts: GetPost[] = [];
    try {
      newPosts = await fetchPosts(page);
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        dispatch(savePosts({ posts: newPosts, page: "home" }));
        setCurrentPage(page);
      }
    } catch (error: any) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    loadPosts(1);
    return () => {
      dispatch(clearPosts());
    };
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    if (
      !loadingRef.current &&
      hasMore &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      loadPosts(currentPage + 1);
    }
  }, [currentPage, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.Posts}>
      {posts.map((post, index) => (
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
};

export default Posts;
