import React from 'react';
import { Modal } from "@mantine/core";
import SharePost from '../SharePost/SharePost';

interface ShareModalProps {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareModal: React.FC<ShareModalProps> = ({ modalOpened, setModalOpened }) => {

  return (
    <>
    <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Share a Post"
        size={'55%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <SharePost/>
      </Modal>
    </>
  );
};

export default ShareModal;
