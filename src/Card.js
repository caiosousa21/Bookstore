import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='Capa'>capa</div>
                <p className='TituloLivro'>LIVRO</p>
                <p className='Autor'>autor</p>
                <p className='Editora'>editora</p>
                <p className='Data'>data</p>
            </div>
        )
    }
}
export default Card;