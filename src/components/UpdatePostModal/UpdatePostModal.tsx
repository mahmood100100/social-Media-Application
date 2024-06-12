import React, { useState } from 'react';
import { Modal, TextInput, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../State/Store';
import { updatePost } from '../../Api/PostsApi';
import { editPostBody } from '../../State/Posts/PostsSlice';
import { Bounce, toast } from 'react-toastify';

interface UpdatePostModalProps {
  postId: number;
  updatePostModalOpened: boolean;
  setUpdatePostModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdatePostModal: React.FC<UpdatePostModalProps> = ({ postId, updatePostModalOpened, setUpdatePostModalOpened }) => {
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.posts.userPosts);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await updatePost(postId, body);
      setBody('')
      toast.success('Post updated successfully', {
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
      dispatch(editPostBody({ postId, postBody: body }));
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Failed to update post. Please try again later.', {
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
    setUpdatePostModalOpened(false);
    console.log(data);
  };

  return (
    <Modal
      opened={updatePostModalOpened}
      onClose={() => setUpdatePostModalOpened(false)}
      title="Post Updating"
      size={'55%'}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Post Body"
          placeholder="Update your post body"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          required
        />
        <Button type="submit" mt="md">
          Update Post
        </Button>
      </form>
    </Modal>
  );
};

export default UpdatePostModal;
