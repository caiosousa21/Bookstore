import React, { Component } from 'react';
import Carrinho from './Carrinho'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Creators as CarrinhoActions} from '../store/actions/carrinho'

class Barra extends Component {
    handleClick = () => {
       this.props.mudarVisibilidade();
    }

    clickExcluir = (item) =>{
        this.props.excluirItem(this.props.carrinho.indexOf(item))
    }

    render() {
        return (
            <div className='Barra'>
                <p className='PBarra'>Caio Books</p>
                <div className='Canto'>
                    <button className='BtnCarrinho' onClick={() => this.handleClick()}>Carrinho</button>
                    {
                        this.props.visivel && 
                        <Carrinho carrinho={this.props.carrinho} clickExcluir={this.clickExcluir}/>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carrinho: state.carrinho.carrinho,
    visivel: state.carrinho.visivel,
})

const mapDispatchToProps = dispatch => bindActionCreators(CarrinhoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Barra);