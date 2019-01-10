import React, { Component } from 'react';
import ItemCarrinho from './ItemCarrinho';

class Carrinho extends Component {
    carregarItem = () => {
        let item = [];
        for (let i = 0; i < this.props.interior.length; i++) {
            item.push(<ItemCarrinho key={'item'+i} />);
        }
        return item;
    }

    render() {
        return (
            <div className='Carrinho'>
               
            </div>
        )
    }
}

export default Carrinho;