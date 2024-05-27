import React from 'react';
import Post from '../Post/Post.tsx';
import {PostsData } from '../../Api/PostsApi.ts';
import { PostType } from '../../DataTypes/PostType.ts';
import styles from './Posts.module.css';

const Posts: React.FC = () => {
  return (
    <div className={styles.Posts}>
      {PostsData.map((post: PostType, id: number) => (
        <Post data={post} key={id} />
      ))}
    </div>
  );
}

export default Posts;
