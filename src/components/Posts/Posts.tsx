import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { fetchPosts } from '../../Api/PostsApi';
import { GetPost } from '../../DataTypes/PostType';
import { RootState } from '../../State/Store';
import { savePosts } from '../../state/Posts/PostsSlice';
import styles from './Posts.module.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts: GetPost[] = useSelector((state: RootState) => state.posts);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const loadPosts = async (page: number) => {
    loadingRef.current = true;
    setLoading(true);
    let newPosts : GetPost[] = [];
    try {
       newPosts = await fetchPosts(page);
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setCurrentPage(page);
      }
    } catch (error: any) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
      loadingRef.current = false;
      dispatch(savePosts(newPosts));
    }
  };

  useEffect(() => {
    loadPosts(currentPage);
  }, []);

  const handleScroll = () => {
    if (
      hasMore &&
      !loadingRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 &&
      currentPage !== currentPage + 1
    ) {
      loadPosts(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore, currentPage]);

  return (
    <div className={styles.Posts}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
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
