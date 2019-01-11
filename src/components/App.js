import React from 'react';
import Barra from './Barra';
import Elemento from './Elemento';

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