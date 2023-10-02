import React, { Component } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
          <center>
            <h1>Bataille Naval</h1>
            <button>Start</button>
          </center>
        <Footer />
      </div>
    )
  }
}
