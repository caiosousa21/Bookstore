import React, { Component } from 'react';

class ItemCarrinho extends Component {
    render() {
        return (
            <div className='ItemCarrinho'>
                <p className='PItem'>{this.props.item}</p>
                <button className='ExcluirItem' onClick={()=>{this.props.clickExcluir(this.props.index)}}></button>
                <hr></hr>
            </div>
        )
    }
}
export default ItemCarrinho;


