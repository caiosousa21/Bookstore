import React, { Component } from 'react';

class FormInserir extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         titulo: '',
    //         autor: '',
    //         editora: '',
    //         data: '',
    //         livro: {}
    //     }
    // }

    // tituloChange = (e) => {
    //     this.setState({
    //         titulo: e.target.value
    //     })
    // }
    // autorChange = (e) => {
    //     this.setState({
    //         autor: e.target.value
    //     })
    // }
    // editoraChange = (e) => {
    //     this.setState({
    //         editora: e.target.value
    //     })
    // }
    // dataChange = (e) => {
    //     this.setState({
    //         data: e.target.value
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.setState({
    //         livro:{
    //             titulo:this.state.titulo,
    //             autor:this.state.autor,
    //             editora:this.state.editora,
    //             data:this.state.data,
    //         }
    //     },()=>this.props.clickAdicionarLivro(this.state.livro, this.props.indexCategoria));
    // }

    render() {
        return (
            <form className='FormInserir'>
                <div>
                    <input type='text' className='InserirTitulo' ></input>
                    <input type='text' className='InserirAutor' ></input>
                    <input type='text' className='InserirEditora'></input>
                    <input type='Date' className='InserirData' ></input>
                </div>
                <input type='submit'></input>
            </form>
        )
    }
}
export default FormInserir;