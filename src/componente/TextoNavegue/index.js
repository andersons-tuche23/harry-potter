import React from 'react';
import './TextoNavegue.css'


function TextoNavegue(props) {


  return (
    <section className='simbolo'>
    <div className='imagem-simbolo'>
        <img src='/simbolo.png' alt='image_simbolo' />
    </div>
    <div className='texto-navegue' >
        <p>{props.texto}</p>
    </div>
    <div className='imagem-linha'>
        <img src='/topo.png' alt='image_linha' />
    </div>

</section>
  )
}

export default TextoNavegue;