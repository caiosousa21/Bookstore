import React, { Component } from 'react';
import Categoria from './Categoria'

class Elemento extends Component {    
    criarCategoria = () => {
        let lista = this.props.listaListas;
        let categ = [];
        for (let i = 0; i < 4; i++) {
            categ.push(<Categoria key={'categoria' + i} categoria={lista[i].a} listaLivros={lista[i].b} clickAdicionar={this.props.clickAdicionar} />);
        }
        return categ
    }

    render() {
        return (
            <div className='Elemento'>
                {this.criarCategoria()}
            </div>
        )
    }
}

export default Elemento;