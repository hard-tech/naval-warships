import React, { Component } from 'react'

import '../css/ScoreBoard.css'

export default class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td className='' >Bonjour, je suis votre première cellule</td>
            <td>je suis votre deuxième cellule</td>
            <td>je suis votre troisième cellule</td>
            <td>je suis votre quatrième cellule</td>
          </tr>
        </table>
        <h1>let's go!</h1>
      </div>
    )
  }
}
