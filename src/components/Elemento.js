import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Creators as BuscarActions } from '../store/actions/buscar'

import Categoria from './Categoria'
import { resolve } from 'path';

class Elemento extends Component {
    componentDidMount() {
        this.props.buscarListaListas();
    }

    componentDidUpdate() {
        if (!this.props.carregandoListas && this.props.carregandoLivros) {
            const listaListas = this.props.listaListas.map(item => (item))
            this.telaInicial(listaListas);
        }
    }

    telaInicial = async (listaListas) => {
        this.props.buscarListaLivros(listaListas[0].nomeB, listaListas[1].nomeB, listaListas[2].nomeB, listaListas[3].nomeB)
    }

    render() {
        return (
            <div className='Elemento'>
                {
                    this.props.telaInicial && this.props.listaLivros.map(lista => (<p>{lista}</p>))


                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carregandoListas: state.buscar.carregandoListas,
    carregandoLivros: state.buscar.carregandoLivros,

    listaListas: state.buscar.listaListas,
    listaLivros: state.buscar.listaLivros,
})

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Elemento);