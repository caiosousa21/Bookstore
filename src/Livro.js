import React, { Component } from 'react';
import Card from './Card'
import Botoes from './Botoes'

class Livro extends Component{
    render(){
        return(
            <div className='Livro'>
            <Card/>
            <Botoes/>
            </div>
        )
    }
}
export default Livro;