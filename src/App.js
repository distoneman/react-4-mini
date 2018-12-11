import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    let words = 'words from app'
    return (
      <div className="App">
        <div>
          <Link to="/route1">Route 1</Link>
          <Link to="/route2">Route 2</Link>
          <Link to={`/route3/ ${words}`}>Route 3</Link>
        </div>
        {routes}   {/* use the routes from routes.js */}
      </div>
    );
  }
}

export default App;
