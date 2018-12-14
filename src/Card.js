import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='Capa'><p className='PCapa'>Capa</p></div>
                <p className='TituloLivro'>{this.props.livro.nome}</p>
                <p className='Autor'>{this.props.livro.autor}</p>
                <p className='Editora'>{this.props.livro.editora}</p>
                <p className='Data'>{this.props.livro.data}</p>
            </div>
        )
    }
}
export default Card;