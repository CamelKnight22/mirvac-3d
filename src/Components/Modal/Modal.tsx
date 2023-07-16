import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface MyModalProps {
  buttonLabel: string;
  content: JSX.Element | string;
}

const MyModal: React.FC<MyModalProps> = ({ content }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faCircleInfo} size='3x' onClick={openModal} style={{cursor: 'pointer'}}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end" // This styles the overlay
        className="bg-white bg-opacity-70 rounded-lg shadow-2xl m-5 p-20 w-1/3 h-auto" // This styles the modal
      >
        <button  onClick={closeModal}>x</button>
        {content}
      </Modal>
    </div>
  );
}

export default MyModal;
