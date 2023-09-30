import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, character }) => {
  
  if (!isOpen) return null;

  const { name, house, specie, dateOfBirth, male, patronus, actor, ancestry, length, core, wood } = character;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>

        <div className='container-modal'>
          <div className="modal-content">
            <p><span>Nome:</span> {name}</p>
            <p><span>Casa:</span> {house}</p>
            <p><span>Espécie:</span> {specie}</p>
            <p><span>Data de nascimento:</span> {dateOfBirth}</p>
            <p><span>Gênero:</span> {male}</p>
            <p><span>Patronus:</span> {patronus}</p>
            <p><span>Varinha:</span></p>
            <p><span>- Madeira:</span>{wood}</p>
            <p><span>- Nucleo:</span> {core}</p>
            <p><span>- Comprimento:</span> {length}</p>
            <p><span>Ancestrabilidade:</span> {ancestry}</p>
            <p><span>Ator:</span> {actor}</p>
          </div>
          <div>
            <img
              src={character.image ? character.image : "/sem.imagem.png"}
              alt={character.name}
              className="character-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
