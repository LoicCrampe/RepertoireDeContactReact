import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Liste from './components/Liste';
import Contenu from './components/Contenu';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Liste />
        </div>
        <Contenu />
      </div>
    );
  }
}

export default App;
