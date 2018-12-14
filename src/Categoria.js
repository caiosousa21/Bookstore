import React, { Component } from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

class Categoria extends Component {
    carregarLivro = () => {
        let livro = [];
        for (let i = 0; i < 15; i++) {
            livro.push(<Livro key={'livro'+i} categoria={this.props.categoria} clickAdicionar={this.props.clickAdicionar}/>)
        }
        return livro
    }

    render() {
        return (
            <div >
                <Titulo categoria={this.props.categoria}/>
                <hr />
                <div className='Categoria'>
                    {this.carregarLivro()}
                </div>
            </div>
        )
    }
}

export default Categoria;