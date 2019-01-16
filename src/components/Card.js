import React from 'react';

const Card = props => (
            <div className='Card'>
                <div className='Capa'><p className='PCapa'>Capa</p></div>
                <p className='TituloLivro'>{props.titulo}</p>
                <p className='Autor'>{props.autor}</p>
                <p className='Editora'>{props.editora}</p>
                <p className='Data'>{props.data}</p>
            </div>
        )
    
export default Card;