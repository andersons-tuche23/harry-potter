import React from 'react';
import './BackHome.css'


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
                    <button>veja todos<br />os personagens</button>
                </div>

                <section className='simbolo'>
                    <div  className='imagem-simbolo'>
                        <img src='/simbolo.png' alt='image_simbolo' />
                    </div>
                    <div className='texto-navegue'>
                        <p>Navegue pelas Casas</p>
                    </div>
                    <div className='imagem-linha'>
                        <img src='/topo.png' alt='image_linha' />
                    </div>
                </section>

                <section className='image-cards'>
                    <div>
                        <img src='/grifinoria.png' alt='image_grifinoria'/>
                    </div>
                    <div>
                        <img src='sonserina.png' alt='image_sonserina'/>
                    </div>
                    <div>
                        <img src='lufa-lufa.png' alt='image_lufa'/>
                    </div>
                    <div>
                        <img src='corvinal.png' alt='image_cornival'/>
                    </div>
                </section>
            </div>

        </>

    )
}

export default BackHome;