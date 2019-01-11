import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Creators as BuscarActions } from '../store/actions/buscar'

class Elemento extends Component {
    componentDidMount() {
        this.props.buscarListaListas();

    }

    componentDidUpdate() {
        if (!this.props.carregandoListas) {
            const listaListas = this.props.listaListas.map(item => (item))
            for (let i = 0; i < 4; i++) {
                this.props.buscarListaLivros(listaListas[i].nomeB)
                
            }
        }
    }

    render() {
        return (
            <div className='Elemento'>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    carregandoListas: state.buscar.carregandoListas,
    listaListas: state.buscar.listaListas,
    listaLivros: state.buscar.listaLivros,
})

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Elemento);