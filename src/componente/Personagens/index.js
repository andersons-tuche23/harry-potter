import './Personagens.css';
import { Link } from 'react-router-dom';
import TextoNavegue from '../TextoNavegue';
import PersonagensList from '../../PersonagensList';


function Personagens() {

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
                        <TextoNavegue texto='Personagens' />
                    </div>
                </div>
                <div>
                    <PersonagensList />
                </div>
            </section>

        </>

    )
}

export default Personagens;