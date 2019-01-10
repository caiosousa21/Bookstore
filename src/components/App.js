import React from 'react';
import Barra from './Barra';
import Elemento from './Elemento';
import { buscarListaListas } from '../utils/buscarListaListas';
import { buscarLista } from '../utils/buscarLista';

import {Provider} from 'react-redux'
import store from '../store'

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Barra />
          <Elemento /> 
      </div>
      </Provider>
    );
  }
}
export default App;