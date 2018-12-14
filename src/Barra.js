import React, { Component } from 'react';
import Carrinho from './Carrinho'

class Barra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }
    handleClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className='Barra'>
                <p className='PBarra'>Caio Books</p>
                <div className='Canto'>
                    <button className='BtnCarrinho' onClick={() => this.handleClick()}>Carrinho</button>
                    {!this.state.isHidden && <Carrinho interior={this.props.interior} clickExcluir={this.props.clickExcluir}/>}
                </div>
            </div>
        )
    }
}

export default Barra;