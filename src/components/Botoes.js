import React, { Component } from 'react';
import {Creators as CarrinhoActions} from '../store/actions/carrinho'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Botoes extends Component {
    clickAdicionar = (e) => {
        e.preventDefault()
        this.props.adicionarItem(this.props.livro.titulo)
    }

    render() {
        return (
            <div className='Botoes'>
                <button className='BtnDescr'>Descr</button>
                <button className='BtnAdd' onClick={this.clickAdicionar}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(CarrinhoActions, dispatch);

export default connect(null, mapDispatchToProps)(Botoes);