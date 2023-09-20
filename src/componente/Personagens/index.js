// import React, {useEstate useEffect } from 'react';
import './Personagens.css';
import { Link } from 'react-router-dom';



function Personagens() {
// const [Personagens, setPersonagens] = useEstate([]);

// useEffect()

    return (
        <>
            <div className='backpersonagens'>
                <Link to='/'>
                    <div className='imagem-topo' >
                        <img src='/logo.harry.potter.png' alt='image_harry_potter' />
                    </div>
                </Link>
                <div>
                    
                </div>
            </div>
           
        </>

    )
}

export default Personagens;