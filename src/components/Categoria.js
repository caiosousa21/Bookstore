import React, { Component } from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

class Categoria extends Component {  
    render() {
        return (
            <div >
                <Titulo/>
                <hr />
                <div className='Categoria'>
                </div>
            </div>
        )
    }
}

export default Categoria;