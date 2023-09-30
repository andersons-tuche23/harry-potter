import React, { useEffect, useState } from 'react';
import './Personagens.css';
import { Link } from 'react-router-dom';
import TextoNavegue from '../TextoNavegue';
import PersonagensList from '../PersonagensList/PersonagensList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function Personagens() {

    
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const casa = queryParams.casa;

  const [personagens, setPersonagens] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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


  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const houses = () => { // Certifique-se de passar 'casa' como argumento para a função
    switch (casa) {      
      case "gryffindor":
        return "Grifinória";
      case "hufflepuff":
        return "Lufa-Lufa";
      case "ravenclaw":
        return "Corvinal";
      case "slytherin":
        return "Sonserina";
  
      default:
        return "PERSONAGENS"; // Adicionado 'return' aqui
    }
  };

  console.log(casa, 'casa');

    return (
        <>
            <section className='backpersonagens'>
                <div>
                    <div className='imagem-harry' >
                        <Link to='/'>
                            <img src='/logo.harry.potter.png' alt='image_harry_potter' />
                        </Link>
                    </div>
                    <div>
                        <TextoNavegue texto={houses()} />
                    </div>
                </div>
                <div>
                    <PersonagensList personagens={personagens} openModal={openModal} closeModal={closeModal} selectedCharacter={selectedCharacter} />
                </div>
            </section>

        </>

    )
}

export default Personagens;