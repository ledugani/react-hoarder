import React, { Component } from 'react';

import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
import Items from '../components/Items/Items';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllTheStuff />
        <Items />
        <Login />
        <MyStuff />
        <Navbar />
        <Register />
      </div>
    );
  }
}

export default App;
