import React, { Component } from 'react';
import Categoria from './Categoria'

class Elemento extends Component {
    buscarLista = () => {
        let url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=';
        function Get(urlLista) {
            var Httpreq = new XMLHttpRequest();
            Httpreq.open('GET', urlLista, false);
            Httpreq.send(null);
            return Httpreq.responseText;
        }
        let ListaListas = JSON.parse(Get(url));
        
        let Listas =[];
        for (let i = 0; i < 4; i++) {
            Listas[i] = {a:ListaListas.results[i].list_name, b:ListaListas.results[i].list_name_encoded};
        }
        return(Listas)
    }
    
    criarCategoria = () => {
        let lista = this.buscarLista();
        let categ = [];
        for (let i = 0; i < 4; i++) {
            categ.push(<Categoria key={'categoria' + i} categoria={lista[i].a} nome={lista[i].b} clickAdicionar={this.props.clickAdicionar} />);
        }
        return categ
    }

    render() {
        return (
            <div className='Elemento'>
                {this.criarCategoria()}
            </div>
        )
    }
}

export default Elemento;