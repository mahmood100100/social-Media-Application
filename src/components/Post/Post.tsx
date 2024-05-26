import React from 'react';
import styles from './Post.module.css';
import Comment from '../../assets/Images/comment.png';
import Share from '../../assets/Images/share.png';
import Heart from '../../assets/Images/like.png';
import NotLike from '../../assets/Images/dislike.png';
import { PostType } from '../../DataTypes/PostType';

interface PostProps {
  data: PostType;
}

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <div className={styles.Post}>
      <img src={data.img} alt="" />

      <div className={styles.postReact}>
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

      <div className={styles.detail}>
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
