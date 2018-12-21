import React, { Component } from 'react';
import Categoria from './Categoria'

class Elemento extends Component {
    criarCategoria = () => {
        let listaListas = this.props.listaListas;
        let listaLivros = this.props.listaLivros;
        let categ = [];
        if (listaListas.length < 4) {
            for (let i = 0; i < listaListas.length; i++) {
                categ.push(
                    <Categoria
                        key={'categoria' + i}
                        categoria={listaListas[i]}
                        listaLivros={listaLivros[i]}
                        clickAdicionar={this.props.clickAdicionar}
                        clickAdicionarLivro={this.props.clickAdicionarLivro}
                        indexCategoria={i}
                    />);
            }
        } else {
            for (let i = 0; i < 4; i++) {
                categ.push(
                    <Categoria
                        key={'categoria' + i}
                        categoria={listaListas[i]}
                        listaLivros={listaLivros[i]}
                        clickAdicionar={this.props.clickAdicionar}
                        clickAdicionarLivro={this.props.clickAdicionarLivro}
                        indexCategoria={i}
                    />);
            }
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