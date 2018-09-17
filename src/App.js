import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Main from './pages/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="content">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
