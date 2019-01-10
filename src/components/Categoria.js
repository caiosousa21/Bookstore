import React, { Component } from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

class Categoria extends Component {
    carregarLivro = () => {
            let lista = this.props.listaLivros;
            let livro = [];
            for (let i = 0; i < lista.length; i++) {
                livro.push(<Livro key={'livro'+i} />)
            }
            return livro
        }
       
    

    render() {
        return (
            <div >
                <Titulo/>
                <hr />
                <div className='Categoria'>
                    {this.carregarLivro()}
                </div>
            </div>
        )
    }
}

export default Categoria;