import React from 'react';
import Barra from './Barra';
import Elemento from './Elemento';
import {buscarLista} from '../utils/buscarLista'

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
  }

  clickExcluir = (i) => {
    let arrayItems = this.state.itemsCarrinho.slice(0, this.state.itemsCarrinho.length);
    arrayItems.splice(i, 1);
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
export default App;