import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
// import Items from '../components/Items/Items';
// import Login from '../components/Login/Login';
// import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Register} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
