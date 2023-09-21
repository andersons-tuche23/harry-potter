import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Personagens</h1>
      <ul>
        {personagens.map(personagem => (
          <li key={personagem.id}>
            {personagem.name} - {personagem.house}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonagensList;
