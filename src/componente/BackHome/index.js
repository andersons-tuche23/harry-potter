import React from 'react';
import './BackHome.css'
import { Link } from 'react-router-dom';
import TextoNavegue from '../TextoNavegue';



function BackHome(props) {
    return (
        <>
            <div className='image-topo'>
                <img src='/topo.png' alt='image_topo' />
            </div>
            <div className='backhome'>
                <div className='logo-home'>
                    <img src='/logo.png' alt='image_logo' />
                </div>
                <div className='botao'>
                    <Link to='/personagens'>
                        <button className='botao-hover'>veja todos<br />os personagens</button>
                    </Link>
                </div>
                <div>
                    <TextoNavegue texto='Navegue Pelas Casas' />
                </div>
               
                <section className='image-cards'>
                    <div>
                        <img src='/grifinoria.png' alt='image_grifinoria' />
                    </div>
                    <div>
                        <img src='sonserina.png' alt='image_sonserina' />
                    </div>
                    <div>
                        <img src='lufa-lufa.png' alt='image_lufa' />
                    </div>
                    <div>
                        <img src='corvinal.png' alt='image_cornival' />
                    </div>
                </section>
            </div>

        </>

    )
}

export default BackHome;