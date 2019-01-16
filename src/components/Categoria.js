import React from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

function Categoria(props) {

    return (
        <div >
            <Titulo title={props.title} />
            <hr />
            {
                props.livros.map(livro => <Livro livro={livro} key={props.livros.indexOf(livro)}/>)
            }
            <div className='Categoria'>
            </div>
        </div>
    )

}

export default Categoria;