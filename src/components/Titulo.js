import React, { Component } from 'react';
import FormInserir from './FormInserir'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as VisibilidadeActions } from '../store/actions/visibilidade'
import InputBuscar from './InputBuscar'

class Titulo extends Component {
    clickInserir = (e) => {
        e.preventDefault();
        this.props.mudarVisibilidadeInserir();
    }

    clickBuscar = (e) => {
        e.preventDefault();
        this.props.mudarVisibilidadeBusca();
    }

    render() {
        return (
            <div className='Titulo'>
                <h2 className='HeaderTitulo'>{this.props.title}</h2>
                <div className='InserirDiv'>
                    <button className='Inserir' onClick={this.clickInserir}>
                        Inserir Livro
                    </button>
                    {
                        this.props.inserir_visivel &&
                        <FormInserir id={this.props.id} />
                    }
                </div>
                <div className='BuscarDiv'>
                    <button className='Buscar' onClick={this.clickBuscar}>Buscar Livro</button>
                    {
                        this.props.busca_visivel &&
                        <InputBuscar />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inserir_visivel: state.visibilidade.inserir_visivel,
    busca_visivel: state.visibilidade.busca_visivel,
})

const mapDispatchToProps = dispatch => bindActionCreators(VisibilidadeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Titulo);