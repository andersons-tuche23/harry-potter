import React, { useEffect, useState } from 'react';
import './PersonagensList.css'

function PersonagensList() {
  const [personagens, setPersonagens] = useState([]);
 
  
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPersonagens(data); 
      })
      .catch(error => {
        console.error('Erro ao buscar personagens:', error);
      });
  }, []); 

  

    

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
    </>
  );
}

export default PersonagensList;
