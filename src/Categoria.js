import React, { Component } from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

class Categoria extends Component {
    carregarLivro = () => {
            let lista = this.props.listaLivros;
            let livro = [];
            for (let i = 0; i < 15; i++) {
                livro.push(<Livro key={'livro'+i}  livro={lista[i]} clickAdicionar={this.props.clickAdicionar}/>)
            }
            return livro
        }
       
    

    render() {
        return (
            <div >
                <Titulo categoria={this.props.categoria} />
                <hr />
                <div className='Categoria'>
                    {this.carregarLivro()}
                </div>
            </div>
        )
    }
}

export default Categoria;