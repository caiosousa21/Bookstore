import React, { Component } from 'react';
import FormInserir from './FormInserir'

class Titulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            btnExpandido: false
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isHidden: !this.state.isHidden,
            btnExpandido: !this.state.btnExpandido
        })
    }

    render() {
        return (
            <div className='Titulo'>
                <h2 className='HeaderTitulo'>{this.props.categoria}</h2>
                <div className='InserirDiv'>
                    <button className='Inserir'>
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