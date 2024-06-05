import React, { useEffect, useState, useRef } from 'react';
import Post from '../Post/Post';
import { fetchPosts } from '../../Api/PostsApi';
import { GetPost } from '../../DataTypes/PostType';
import styles from './Posts.module.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<GetPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadingRef = useRef<boolean>(false);

  const loadPosts = async (page: number) => {
    loadingRef.current = true;
    setLoading(true);
    try {
      const newPosts = await fetchPosts(page);
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setCurrentPage(page);
      }
    } catch (error : any) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    loadPosts(currentPage);
  }, []);

  const handleScroll = () => {
    if (
      hasMore &&
      !loadingRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 1
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
      {loading && <div className={styles.cards}>
        <div className={`${styles.card} ${styles['is-loading']}`}> 
          <div className={styles.content}>
            <h2></h2>
            <p></p>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>}
      {error &&
       <div className={styles.error}>
        <h1>ERROR!</h1>
         {error}
       </div>
       }
    </div>
  );
}

export default Posts;
