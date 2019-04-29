import React, { Component } from 'react';
import Image from '../src/Components/Image';
import { Router, Link } from "@reach/router";
import ImageDetails from './Components/ImageDetails';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Unsplash based on location</Link>
        </header>
        <Router>
          <Image path="/" />
          <ImageDetails path="/details/:id" />
        </Router>
      </div>
    )
  }
}

export default App;
