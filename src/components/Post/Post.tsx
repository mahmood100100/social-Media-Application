import React from 'react';
import Comment from '../../assets/Images/comment.png';
import Share from '../../assets/Images/share.png';
import Heart from '../../assets/Images/like.png';
import { PostType } from '../../DataTypes/PostType';
import styles from './Post.module.css';

interface PostProps {
  key: number;
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.Post}>
      <div className={styles.header}>
        {post.author.profile_image && (
          <img src={post.author.profile_image} alt={post.author.name} className={styles.authorImage} />
        )}
        <div className={styles.authorInfo}>
          <span className={styles.authorName}><b>{post.author.name}</b></span>
          <span className={styles.createdAt}>{post.created_at}</span>
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{post.title || 'Untitled'}</h2>
        <p className={styles.text}>{post.body}</p>
        {post.image && (
          <img src={post.image} alt={post.title || 'Post image'} className={styles.postImage} />
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.reactions}>
          <img src={Heart} alt="like" />
          <img src={Comment} alt="comment" />
          <img src={Share} alt="share" />
        </div>
        <span className={styles.commentsCount}>{post.comments_count} comments</span>
      </div>
    </div>
  );
}

export default Post;
