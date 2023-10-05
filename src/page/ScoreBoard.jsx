import React, { Component } from 'react';

import '../css/ScoreBoard.css';

import FormConnect from '../components/FormConnect';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import monGifPizza from '../Images/Gif/bateauPizza.gif'

export default class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <center>
          <h1>Score board</h1>
            <table className='table'>
              <thead className='thead'>
                <tr>
                  <th colspan="3">résumé de la partie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td'>liste des joueur</td>
                  <td className='td'>joueur1</td>
                  <td className='td'>joueur2</td>
                </tr>
                <tr>
                  {/*on cherche le vainqueur de la partie*/}
                  <td className='td'>{1}</td>
                  <td className='td'>{2}</td>
                </tr>
              </tbody>
            </table>
            <h2>bravo à tous les 2, vous avez fait une super partie.</h2>
        </center>
        <Footer />
      </div>
    )
  }
}
