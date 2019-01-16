import React, { Component } from 'react';
import Card from './Card'
import Botoes from './Botoes'

function Livro(props) {
        return(
            <div className='Livro'>
            <Card titulo={props.livro.titulo} autor={props.livro.autor} editora={props.livro.editora} data={props.livro.data}/>
           
            <Botoes livro={ ''} clickAdicionar={''}/>
            </div>
        )
    
}
export default Livro;