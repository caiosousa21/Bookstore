import React, { Component } from 'react';
import Titulo from './Titulo'
import Livro from './Livro'

class Categoria extends Component {
    buscarLivro = (nome) =>{
        let url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list='+nome;
        function Get(urlLista) {
            var Httpreq = new XMLHttpRequest();
            Httpreq.open('GET', urlLista, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
        let ListaLivros = JSON.parse(Get(url));
        
        let Listas =[];
        for (let i = 0; i < 15; i++) {
            Listas[i]= {
                titulo:ListaLivros.results[i].book_details[0].title, 
                autor:ListaLivros.results[i].book_details[0].author,
                editora:ListaLivros.results[i].book_details[0].publisher, 
                data:ListaLivros.results[i].published_date
            };
        }
        return(Listas)
    }
    
    carregarLivro = () => {
        let lista = this.buscarLivro(this.props.nome);
        let livro = [];
        for (let i = 0; i < 15; i++) {
            livro.push(<Livro key={'livro'+i} categoria={this.props.nome} livro={lista[i]} clickAdicionar={this.props.clickAdicionar}/>)
        }
        return livro
    }  

    render() {
        return (
            <div >
                <Titulo categoria={this.props.categoria}/>
                <hr />
                <div className='Categoria'>
                    {this.carregarLivro()}
                </div>
            </div>
        )
    }
}

export default Categoria;