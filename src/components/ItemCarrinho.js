import React, { Component } from 'react';

class ItemCarrinho extends Component {
    render() {
        return (
            <div className='ItemCarrinho'>
                <p className='PItem'>{this.props.item}</p>
                {console.log(this.props)}
                <button className='ExcluirItem' ></button>
                <hr></hr>
            </div>
        )
    }
}
export default ItemCarrinho;