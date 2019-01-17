import React, { Component } from 'react';
import FormInserir from './FormInserir'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Creators as InserirActions} from '../store/actions/inserir'

class Titulo extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.mudarVisibilidade();
    }

    render() {
        return (
            <div className='Titulo'>
                <h2 className='HeaderTitulo'>{this.props.title}</h2>
                <div className='InserirDiv'>
                    <button className='Inserir' onClick={this.handleClick}>
                        Inserir Livro
                    </button>
                    {
                        this.props.visivel && 
                        <FormInserir id={this.props.id}/>
                    }
                </div>
                <button className='Buscar'>Buscar Livro</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    visivel: state.inserir.visivel,
})

const mapDispatchToProps = dispatch => bindActionCreators(InserirActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Titulo);