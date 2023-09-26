import React, { useEffect, useState } from 'react';
import './PersonagensList.css'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';



function PersonagensList() {

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const casa = queryParams.casa;

  const [personagens, setPersonagens] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);

 
 
  
  useEffect(() => {
    
    if (casa) {
      
      fetch(`https://hp-api.onrender.com/api/characters/house/${casa}`)
        .then((response) => response.json())
        .then((data) => {
          setPersonagens(data);
        })
        .catch((error) => {
          console.error('Erro ao buscar personagens:', error);
        });
    } else {
      
      fetch('https://hp-api.onrender.com/api/characters')
        .then((response) => response.json())
        .then((data) => {
          setPersonagens(data);
        })
        .catch((error) => {
          console.error('Erro ao buscar personagens:', error);
        });
    }
  }, [casa]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  


  return (
   <>
   
    <div>
      <div className="personagens-container">
        {personagens.map(personagem => (
          <div key={personagem.id} className="personagem">
            <img src={personagem.image ? personagem.image : "/sem.imagem.png" }  alt={personagem.name} />
            <p className='nome-pesonagem'>{personagem.name}</p>
            <p className='nome-da-casa'>{personagem.house}</p>
          </div>
        ))}
      </div>
    </div>

    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Conteúdo do modal */}
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
    
  );
}

export default PersonagensList;
