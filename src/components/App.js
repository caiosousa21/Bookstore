import React from 'react';
import Barra from './Barra';
import Elemento from './Elemento';

import { Provider } from 'react-redux'
import { store, persistor } from '../store'

// import { PersistGate } from 'redux-persist/integration/react'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <div className="App">
            <Barra />
            <Elemento />
          </div>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}
export default App;