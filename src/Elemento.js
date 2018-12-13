import React, { Component } from 'react';
import Categoria from './Categoria'

class Elemento extends Component {

    criarCategoria = () => {
        let cater = [];
        for (let i = 0; i < 4; i++) {
            cater.push(<Categoria key={'categoria'+i}/>)
        }
        return cater
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