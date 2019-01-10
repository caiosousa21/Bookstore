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
                  
                    />);
            }
        } else {
            for (let i = 0; i < 4; i++) {
                categ.push(
                    <Categoria
                   
                    />);
            }
        }
        return categ
    }

    render() {
        return (
            <div className='Elemento'>
               
            </div>
        )
    }
}

export default Elemento;