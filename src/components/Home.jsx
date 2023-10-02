import React, { Component } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
          <h1>Hello world  !!!</h1>
        <Footer />
      </div>
    )
  }
}
