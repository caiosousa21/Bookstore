import React, { Component } from 'react';
import Card from './Card'
import Botoes from './Botoes'

class Livro extends Component{
    render(){
        return(
            <div className='Livro'>
            <Card livro={this.props.livro}/>
            <Botoes livro={this.props.livro} clickAdicionar={this.props.clickAdicionar}/>
            </div>
        )
    }
}
export default Livro;