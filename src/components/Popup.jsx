import React from 'react';
import Modal from 'react-modal';

// Make sure to bind the modal to your app element (e.g., root div)
Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose , setPopupText }) => {

    const handlePopupClose = () => {
        onClose();
        // setPopupText(''); // Clear the popup text when closing

        setPopupText = '';
      };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>{setPopupText}</div>
      <button onClick={handlePopupClose} >Close</button>
    </Modal>
  );
};

export default Popup;

