import React, { Component } from 'react';
import {Creators as BuscarActions} from '../store/actions/buscar'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Botoes extends Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.adicionarItem(this.props.livro.titulo)
    }
    render() {


        return (
            <div className='Botoes'>
                <button className='BtnDescr'>Descr</button>
                <button className='BtnAdd' onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch);

export default connect(null, mapDispatchToProps)(Botoes);