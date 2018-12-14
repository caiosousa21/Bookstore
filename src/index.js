import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './Barra';
import Elemento from './Elemento';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      itemsCarrinho: [],
    }
  }

  clickAdicionar=(item)=>{
    this.setState({
      itemsCarrinho: this.state.itemsCarrinho.concat(item)
    });
  }

  clickExcluir=(i)=>{
    let arrayItems = this.state.itemsCarrinho.slice(0,this.state.itemsCarrinho.length);
    if(i!==-1){
      arrayItems.splice(i,1);
    }
    this.setState({
      itemsCarrinho:arrayItems
    });
  }

  render() {
    return (
      <div className="App">
        <Barra interior={this.state.itemsCarrinho} clickExcluir={this.clickExcluir}/>
        <Elemento clickAdicionar={this.clickAdicionar}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

