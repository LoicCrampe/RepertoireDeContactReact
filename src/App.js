import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/interface/Header';
import Liste from './components/contact/Liste';
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import APropos from './components/pages/APropos';

class App extends Component {

  render () {
    return (
      <Provider>
          <Router>
            <div className="App">
              <Header />
              <div className="container">
                <Route exact path="/" component={Liste} />
                <Route exact path="/ajouter" component={AddContact} />
                <Route exact path="/liste" component={Liste} />
                <Route exact path="/apropos" component={APropos} />
              </div>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
