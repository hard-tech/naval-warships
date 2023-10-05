import React, { Component } from "react";

import "../css/Home.css";
import IconSite from "../Images/icon/Icon_Flag.png";

import FormConnect from '../components/FormConnect';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <img src={IconSite} alt="Ico" id="iconSite"/>
          <h4>Règles : être le premier a remplir les 100 cases avec des drapeaux rien de plus simple</h4>
          <FormConnect />
        <Footer />
      </div>
    );
  }
}
