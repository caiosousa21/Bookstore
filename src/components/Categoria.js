import React from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

function Categoria(props) {

    return (
        <div >
            <Titulo title={props.title} id={props.id}/>
            <hr /><div className='Categoria'>
                {
                    props.livros.map(livro => <Livro livro={livro} key={props.livros.indexOf(livro)} />)
                }

            </div>
        </div>
    )

}

export default Categoria;