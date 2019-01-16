import React, { Component } from 'react';
import {Creators as BuscarActions} from '../store/actions/buscar'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Botoes extends Component {
    clickAdicionar = (e) => {
        e.preventDefault()
        const item={a:this.props.livro.titulo}
        this.props.adicionarItem(item.a)
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

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch);

export default connect(null, mapDispatchToProps)(Botoes);