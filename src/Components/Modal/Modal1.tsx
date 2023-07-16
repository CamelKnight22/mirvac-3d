import {  faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface MyModalProps {
  buttonLabel: string;
  content: JSX.Element | string;
  imageSrc?: string;
}

const MyModal1: React.FC<MyModalProps> = ({ content, imageSrc }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFile} size='2x' onClick={openModal} style={{ cursor: 'pointer' }} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" // This styles the overlay
        className="bg-white bg-opacity-70 rounded-lg shadow-2xl m-5 p-20 w-3/5 h-auto" // This styles the modal
        style={{
          overlay: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          content: {},
        }}
      >
        <button onClick={closeModal}>x</button>
        {imageSrc && <img src={imageSrc} alt="Modal Image" className="mb-4 w-full h-auto" />}
        {content}
      </Modal>
    </div>
  );
}

export default MyModal1;
