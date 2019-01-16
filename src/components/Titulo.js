import React, { Component } from 'react';
import FormInserir from './FormInserir'

class Titulo extends Component {
    constructor(props) {
        super(props);

    }
    handleClick = (e) => {
        e.preventDefault();
  
    }

    render() {
        return (
            <div className='Titulo'>
                <h2 className='HeaderTitulo'>{this.props.title}</h2>
                <div className='InserirDiv'>
                    <button className='Inserir' onClick={this.handleClick}>
                        Inserir Livro
                    </button>
                    <FormInserir clickAdicionarLivro={this.props.clickAdicionarLivro} categoria={this.props.categoria} indexCategoria={this.props.indexCategoria}/>
                </div>
                <button className='Buscar'>Buscar Livro</button>
            </div>
        )
    }
}
export default Titulo;