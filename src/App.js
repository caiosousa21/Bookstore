import React, { Component } from 'react';
import './App.css'
import Barra from './Barra';
import Elemento from './Elemento';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Barra />
        <Elemento/>
      </div>
    );
  }
}

export default App;
