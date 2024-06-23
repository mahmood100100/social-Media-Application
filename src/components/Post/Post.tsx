import React, { useEffect, useRef, useState } from 'react';
import Comment from '../../assets/Images/comment.png';
import Share from '../../assets/Images/share.png';
import Heart from '../../assets/Images/like.png';
import { GetPost } from '../../DataTypes/PostType';
import CommentsModal from '../CommentsModal/CommentsModal';
import { UilSetting } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../State/Store';
import UpdatePostModal from '../UpdatePostModal/UpdatePostModal';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deletePost } from '../../Api/PostsApi';
import { Bounce, toast } from 'react-toastify';
import { deleteSpecificPost } from '../../State/Posts/PostsSlice';
import { decreaseUserPostsCount } from '../../State/User/UserSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.css';

interface PostProps {
  key: number;
  post: GetPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [commentsModalOpened, setCommentsModalOpened] = useState<boolean>(false);
  const [updatePostModalOpened, setUpdatePostModalOpened] = useState<boolean>(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState<boolean>(false);
  const page: string = useSelector((state: RootState) => state.page.currentPage);
  const settingsMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSettingsList = () => {
    setSettingsMenuOpen(!settingsMenuOpen);
  };

  const handleUpdate = () => {
    setUpdatePostModalOpened(true);
    setSettingsMenuOpen(false);
  };

  const handleDelete = async () => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await deletePost(post.id);
              dispatch(deleteSpecificPost(post.id))
              dispatch(decreaseUserPostsCount())
              setSettingsMenuOpen(false);
              toast.success('Post deleted successfully', {
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
              console.error('Error deleting post:', error);
              toast.error('Failed to delete post. Please try again later.', {
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
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target as Node)) {
        setSettingsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingsMenuRef]);

  return (
    <div className={styles.Post}>
      <div className={styles.header}>
        <div onClick={() => {
          navigate(`/profile/${post.author.id}`)
        }} className={styles.left}>
          {post.author?.profile_image && (
            <img src={post.author?.profile_image} alt={post.author?.name} className={styles.authorImage} />
          )}
          <div className={styles.authorInfo}>
            <span className={styles.authorName}><b>{post.author?.name}</b></span>
            <span className={styles.createdAt}>{post?.created_at}</span>
          </div>
        </div>
        {page === "yourProfile" && (
          <div className={styles.right} onClick={handleSettingsList}>
            <UilSetting />
            {settingsMenuOpen && (
              <div ref={settingsMenuRef} className={styles.settingsMenu}>
                <button className={styles.updateButton} onClick={handleUpdate}>Update</button>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{post.title || 'Untitled'}</h2>
        <p className={styles.text}>{post.body}</p>
        {post.image && (
          <img src={post?.image} alt={post?.title || 'Post image'} className={styles.postImage} />
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.reactions}>
          <img src={Heart} alt="like" />
          <img onClick={() => setCommentsModalOpened(true)} src={Comment} alt="comment" />
          <img src={Share} alt="share" />
        </div>
        <span className={styles.commentsCount}>{post?.comments_count} comments</span>
      </div>

      <CommentsModal postId={post?.id} commentsModalOpened={commentsModalOpened} setCommentsModalOpened={setCommentsModalOpened} />
      <UpdatePostModal postId={post?.id} updatePostModalOpened={updatePostModalOpened} setUpdatePostModalOpened={setUpdatePostModalOpened} />
    </div>
  );
}

export default Post;
