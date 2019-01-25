import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Join from './Join';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/join' component={Join} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default App;
