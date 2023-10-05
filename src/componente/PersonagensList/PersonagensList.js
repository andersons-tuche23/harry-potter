import './PersonagensList.css'
import Modal from '../Modal/index'


function PersonagensList({personagens, closeModal, openModal, selectedCharacter}) {

  return (
    <>

      <div className='meus-personagens'>
        <div className="personagens-container">
          {personagens.map(personagem => (
            <div key={personagem.id} className="personagem" onClick={() => openModal(personagem)}>
              <img src={personagem.image ? personagem.image : "/sem.imagem.png"} alt={personagem.name} />
              <p className='nome-pesonagem'>{personagem.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedCharacter && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          character={selectedCharacter}
        />
      )}
    </>

  );
}

export default PersonagensList;
