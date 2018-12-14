import React, { Component } from 'react';

class Titulo extends Component {
    render() {
        return (
            <h2 className='Titulo'>
                {this.props.categoria}
                <button className='Inserir'>Inserir Livro</button>
                <button className='Buscar'>Buscar Livro</button>
            </h2>
        )
    }
}
export default Titulo;