import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './Barra';
import Elemento from './Elemento';
import './index.css'
import {buscarLista} from './buscarLista'

class App extends React.Component {
  constructor(props) {
    super(props);
    let lista = [];
    lista = buscarLista();
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

