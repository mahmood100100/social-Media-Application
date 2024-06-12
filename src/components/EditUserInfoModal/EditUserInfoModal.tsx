import { Modal } from '@mantine/core';
import React from 'react'

interface userInfoModalProps {
  modalOpened : boolean;
  setModalOpened : React.Dispatch<React.SetStateAction<boolean>>;
}

const  EditUserInfoModal: React.FC<userInfoModalProps> = ({modalOpened , setModalOpened}) => {
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="edit your information"
        size={'55%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered={true}
      >
        helloworld
      </Modal>
    </>
  )
}

export default EditUserInfoModal