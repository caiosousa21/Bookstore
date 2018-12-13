import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './Barra';
import Elemento from './Elemento';
import './index.css'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Barra />
          <Elemento/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

