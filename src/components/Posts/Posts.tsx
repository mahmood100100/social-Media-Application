import React from 'react';
import styles from './Posts.module.css';
import {PostsData } from '../../Api/PostsApi.ts';
import Post from '../Post/Post.tsx';
import { PostType } from '../../DataTypes/PostType.ts';

const Posts: React.FC = () => {
  return (
    <div className= {styles.Posts}>
      {PostsData.map((post: PostType, id: number) => (
        <Post data={post} key={id} />
      ))}
    </div>
  );
}

export default Posts;
