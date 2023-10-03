import React, { Component } from 'react';

import '../css/ScoreBoard.css';

import monImage from '../Images/bateauPizza.gif'

export default class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Score board</h1>
            <table>
              <thead>
                <tr>
                  <th colspan="3">résumé de la partie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>liste des joueur</td>
                  <td>joueur1</td>
                  <td>joueur2</td>
                </tr>
                <tr>
                  <td>vainqueur</td>
                  {/*on cherche le vainqueur de la partie*/}
                  <td>joueur 1 gagne ?</td>
                  <td>joueur 2 gagne ?</td>
                </tr>
                <tr>
                  <td>nombre de tire touché</td>
                  {/*on cherche le nombre de tir touché*/}
                  <td>nombre de tire touché joueur1</td>
                  <td>nombre de tire touché joueur2</td>
                </tr>
                <tr>
                  {/* // on cherche la précison de chaque joueur */}
                  <td>précision des joueur</td>
                  <td>précision joueur1</td>
                  <td>précision joueur2</td>
                </tr>
              </tbody>
            </table>
            <h2>bravo à tous les 2, vous avez fait une super partie.</h2>
            <img src={monImage}/>
            <h2>Cependant, nous sommes désolé de vous annoncer que les bateaux du perdant sont comme ceux ci </h2>
            <h2>Au plaisir de vous revoir </h2>
        </center>
      </div>
    )
  }
}
