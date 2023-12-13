import React from 'react';
import '../components/Login.css';


// alert modal
const AlertModal = ({ message, onClose }) => {
  return (
    <div className="alert-modal">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AlertModal;
