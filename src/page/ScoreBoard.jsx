import React, { Component } from 'react';

import '../css/ScoreBoard.css';

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
        </center>
      </div>
    )
  }
}
