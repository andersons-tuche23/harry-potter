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
            <p><span>Nome:</span> {name ? name : "Não informado"}</p>
            <p><span>Casa:</span> {house ? house : "Não informado"}</p>
            <p><span>Espécie:</span> {specie ? specie : "Não informado"}</p>
            <p><span>Data de nascimento:</span> {dateOfBirth ? dateOfBirth : "Não informado"}</p>
            <p><span>Gênero:</span> {male ? male : "Não informado"}</p>
            <p><span>Patronus:</span> {patronus ? patronus : "Não informado"}</p>
            <p><span>Varinha:</span></p>
            <p><span>- Madeira:</span>{wood ? wood : "Não informado"}</p>
            <p><span>- Nucleo:</span> {core ? core : "Não informado"}</p>
            <p><span>- Comprimento:</span> {length ? length : "Não informado"}</p>
            <p><span>Ancestrabilidade:</span>  {ancestry ? ancestry : "Não informado"}</p>
            <p><span>Ator:</span> {actor ? actor : "Não informado"}</p>
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
