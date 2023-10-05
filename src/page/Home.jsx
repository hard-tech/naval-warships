import React, { Component } from "react";

import "../css/Home.css";

import FormConnect from '../components/FormConnect';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
          <h1>Règles</h1>
          <p id="textRules">Etre le premier a remplir les 100 cases avec des drapaux rien de plus simple</p>
          <FormConnect />
        <Footer />
      </div>
    );
  }
}
