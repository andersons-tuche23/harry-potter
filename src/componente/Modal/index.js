import React from 'react';
import './Modal.css'; // Importe seus estilos CSS aqui

const Modal = ({ isOpen, onClose,children }) => {
  // Renderiza o modal somente se isOpen for verdadeiro
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            Fechar
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
