import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './Barra';
import Elemento from './Elemento';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    let lista = [];
    lista = this.buscarLista();
    this.state = {
      itemsCarrinho: [],
      listaListas: [lista[0].a, lista[1].a, lista[2].a, lista[3].a],
      listaLivros: [lista[0].b, lista[1].b, lista[2].b, lista[3].b],
    }
  }

  // Tirar dúvida depois
  // componentWillMount() {
  //   const EstadoLocal = localStorage.get('rootState');
  //   if(EstadoLocal){
  //     this.setState({
  //       listaListas: EstadoLocal
  //     })
  //   }
  //   else{}
  // }

  // componentWillUnmount(){
  //   localStorage.set('rootState',this.state.listaListas)
  // }


  //click adicionar ao carrinho
  clickAdicionar = (item) => {
    this.setState({
      itemsCarrinho: this.state.itemsCarrinho.concat(item)
    });
  }

  clickAdicionarLivro = (livro, index) => {
    let arrayb = this.state.listaLivros.map(
      (listaLivros, i) => {
        if (i === index){
          return listaLivros.concat(livro)
        }else{
          return listaLivros
        }
      }
    );
  
    this.setState({
        listaLivros:arrayb,
          
        
      },console.log(this.state.listaLivros))
    // let arrayb = this.state.listaListas.map((listaListas) => listaListas.b);
    // arrayb = arrayb[index].concat(livro);
    // this.setState({
    //   listaListas:{
    //     ...this.state.listaListas,
    //     b:arrayb
    //   }
    // },()=>console.log(this.state.listaListas))
  }



  clickExcluir = (i) => {
    let arrayItems = this.state.itemsCarrinho.slice(0, this.state.itemsCarrinho.length);
    if (i !== -1) {
      arrayItems.splice(i, 1);
    }
    this.setState({
      itemsCarrinho: arrayItems
    });
  }

  buscarLista = () => {
    // if(!this.EstadoLocal){
    let url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=';
    function Get(urlLista) {
      var Httpreq = new XMLHttpRequest();
      Httpreq.open('GET', urlLista, false);
      Httpreq.send(null);
      return Httpreq.responseText;
    }
    let ListaListas = JSON.parse(Get(url));
    let Listas = [];
    for (let i = 0; i < 4; i++) {
      let url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=' + ListaListas.results[i].list_name_encoded;
      function Get(urlLista) {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open('GET', urlLista, false);
        Httpreq.send(null);
        return Httpreq.responseText;
      }
      let ListaLivros = JSON.parse(Get(url));
      let ListaLivrosa = [];
      for (let i = 0; i < ListaLivros.results.length; i++) {
        ListaLivrosa[i] = {
          titulo: ListaLivros.results[i].book_details[0].title,
          autor: ListaLivros.results[i].book_details[0].author,
          editora: ListaLivros.results[i].book_details[0].publisher,
          data: ListaLivros.results[i].published_date
        };
      }
      Listas[i] = { a: ListaListas.results[i].list_name, b: ListaLivrosa };
    }
    return (Listas)
    // }
  }

  render() {
    return (
      <div className="App">
        <Barra interior={this.state.itemsCarrinho} clickExcluir={this.clickExcluir} />
        <Elemento clickAdicionar={this.clickAdicionar} listaListas={this.state.listaListas} listaLivros={this.state.listaLivros} clickAdicionarLivro={this.clickAdicionarLivro} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

