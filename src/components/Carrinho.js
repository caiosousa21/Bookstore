import React, { Component } from 'react';
import ItemCarrinho from './ItemCarrinho';

class Carrinho extends Component {
    carregarItem = () => {
        let item = [];
        for (let i = 0; i < this.props.interior.length; i++) {
            item.push(<ItemCarrinho key={'item'+i} item={this.props.interior[i]} clickExcluir={this.props.clickExcluir} index={i}/>);
        }
        return item
    }

    render() {
        return (
            <div className='Carrinho'>
                {this.carregarItem()}
            </div>
        )
    }
}

export default Carrinho;