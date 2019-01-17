import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Creators as ListaActions} from '../store/actions/lista'


class FormInserir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            autor: '',
            editora: '',
            data: '',
            livro: {}
        }
    }

    tituloChange = (e) => {
        this.setState({
            titulo: e.target.value
        })
    }
    autorChange = (e) => {
        this.setState({
            autor: e.target.value
        })
    }
    editoraChange = (e) => {
        this.setState({
            editora: e.target.value
        })
    }
    dataChange = (e) => {
        this.setState({
            data: e.target.value
        })
    }

    selectLista = () =>{
       return this.props.lista[this.props.id].concat(this.state.livro)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            livro:{
                titulo:this.state.titulo,
                autor:this.state.autor,
                editora:this.state.editora,
                data:this.state.data,
            }
        },()=>this.props.inserirLivro(this.selectLista(), this.props.id))
    }
//this.props.InserirLivro(this.state.livro, ));
    render() {
        return (
            <form className='FormInserir' onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' className='InserirTitulo' onChange={e=>this.tituloChange(e)}></input>
                    <input type='text' className='InserirAutor' onChange={e=>this.autorChange(e)}></input>
                    <input type='text' className='InserirEditora' onChange={e=>this.editoraChange(e)}></input>
                    <input type='Date' className='InserirData' onChange={e=>this.inserirChange(e)}></input>
                </div>
                <input type='submit'></input>
            </form>
        )
    }
}
const mapStateToProps = state => ({
    lista: state.lista.listaLivros,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormInserir);