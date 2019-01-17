import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Creators as ListaActions } from '../store/actions/lista'

import Categoria from './Categoria'
import { resolve } from 'path';

class Elemento extends Component {
    componentDidMount() {
        this.props.buscarListaListas();
    }

    componentDidUpdate() {
        if (!this.props.carregandoListas && this.props.carregandoLivros && !this.props.tela) {
            const listaListas = this.props.listaListas.map(item => (item))
            this.telaInicial(listaListas);
            this.props.telaIniciada()
        }
    }

    telaInicial = async (listaListas) => {
        this.props.buscarListaLivros(listaListas[0].nomeB, listaListas[1].nomeB, listaListas[2].nomeB, listaListas[3].nomeB)
    }

    render() {
        return (
            <div className='Elemento'>
                {
                    !this.props.carregandoListas && 
                    !this.props.carregandoLivros &&
                    this.props.listaLivros.map(livros => <Categoria livros={livros} key={this.props.listaLivros.indexOf(livros)} title={this.props.listaListas[this.props.listaLivros.indexOf(livros)].nomeL} id={this.props.listaLivros.indexOf(livros)}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carregandoListas: state.lista.carregandoListas,
    carregandoLivros: state.lista.carregandoLivros,
    tela: state.lista.tela,
    listaListas: state.lista.listaListas,
    listaLivros: state.lista.listaLivros,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Elemento);