import React, { Component } from 'react';
import Card from './Card'
import Botoes from './Botoes'

class Livro extends Component{
    constructor(props){
        super(props);
        this.state={
            livro:{
            nome: this.props.categoria+'livro',
            autor: 'autorr',
            editora:'editora',
            data:'24-45-454545'}
        }
    }
    render(){
        
        return(
            <div className='Livro'>
            <Card livro={this.state.livro}/>
            <Botoes livro={this.state.livro} clickAdicionar={this.props.clickAdicionar}/>
            </div>
        )
    }
}
export default Livro;