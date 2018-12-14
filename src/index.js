import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './Barra';
import Elemento from './Elemento';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      itemsCarrinho: ['1', '2', '3', '4','5'],
    }
  }

  clickAdicionar=(item)=>{
    console.log(item)
    this.setState({
      itemsCarrinho: this.state.itemsCarrinho.concat(item)
    });
    console.log(this.state.itemsCarrinho)
  }

  render() {
    return (
      <div className="App">
        <Barra teste={this.state.itemsCarrinho} />
        <Elemento clickAdicionar={this.clickAdicionar}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

