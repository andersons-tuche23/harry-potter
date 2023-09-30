import React from 'react';
import './BackHome.css'
import { Link } from 'react-router-dom';
import TextoNavegue from '../TextoNavegue';
import queryString from 'query-string';



const adicionarQuery = (casa) => {
    const query = queryString.stringify({ casa: casa });
    return `/personagens?${query}`;
};


function BackHome() {


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
                        <Link to={adicionarQuery('gryffindor')}>
                            <img src='/grifinoria.png' alt='image_grifinoria' />
                        </Link>
                    </div>
                    <div>
                        <Link to={adicionarQuery('slytherin')}>
                            <img src='sonserina.png' alt='image_sonserina' />
                        </Link>
                    </div>
                    <div>
                        <Link to={adicionarQuery('hufflepuff')}>
                            <img src='lufa-lufa.png' alt='image_lufa' />
                        </Link>
                    </div>
                    <div>
                        <Link to={adicionarQuery('ravenclaw')}>
                            <img src='corvinal.png' alt='image_cornival' />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BackHome;