import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Liste from './components/Liste';
import { Provider } from './context';

class App extends Component {

  render () {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <Liste />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
