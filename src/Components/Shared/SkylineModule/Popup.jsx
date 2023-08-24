import React , { useEffect } from 'react';
import Modal from 'react-modal';

// Make sure to bind the modal to your app element (e.g., root div)
Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose , setPopupText }) => {

  const yourMethod = () => {
    console.log('Component loaded!');
    // Additional logic or actions can be performed here
  };

  useEffect(() => {
    // Call your method when the component mounts
    yourMethod();
  }, []);

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

