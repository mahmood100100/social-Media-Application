import { Modal } from '@mantine/core';
import React from 'react';
import PostComments from '../PostComments/PostComments';

interface CommentsModalProps {
  postId: number;
  commentsModalOpened: boolean;
  setCommentsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentsModal: React.FC<CommentsModalProps> = ({postId ,  commentsModalOpened, setCommentsModalOpened }) => {

  return (
    <>
      <Modal
        opened={commentsModalOpened}
        onClose={() => setCommentsModalOpened(false)}
        title="Post Comments"
        size={'55%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered={true}
      >
        <PostComments postId = {postId} />
      </Modal>
    </>
  );
};

export default CommentsModal;
