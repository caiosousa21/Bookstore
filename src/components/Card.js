import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='Capa'><p className='PCapa'>Capa</p></div>
                <p className='TituloLivro'></p>
                <p className='Autor'></p>
                <p className='Editora'></p>
                <p className='Data'></p>
            </div>
        )
    }
}
export default Card;