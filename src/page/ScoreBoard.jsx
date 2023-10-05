import React, { useState } from "react";
import { db } from "../config/config";
import FormConnect from "../components/FormConnect";
import {
  ref,
  set,
  onValue,
  get,
  child,
  update,
  push,
  remove,
  refFromURL,
  increment,
} from "firebase/database";

import "../css/ScoreBoard.css";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function ScoreBoard(){
    const playCode = localStorage.playCode;

    // var Player1, Player2, CounterJ1, CounterJ2;
    const [Player1, setPlayer1] = useState('');
    const [Player2, setPlayer2] = useState('');
    const [CounterJ1, setCounterJ1] = useState('');
    const [CounterJ2, setCounterJ2] = useState('');

    get(ref(db, `Games/CodeToPlay_${playCode}/GameInfo/`)).then((snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();

        setPlayer1(data.playersNames.player1);
        setPlayer2(data.playersNames.player2);

        setCounterJ1(data.Counter.J1);
        setCounterJ2(data.Counter.J2);
      }
    });

    return (
      <div>
        <Nav />
        <center>
          <h1>Score board</h1>
          <table className="bg-white text-dark border border-dark border-3" width={800}>
            <thead className="thead">
              <tr>
                <th colspan="2">Résumé de la partie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td">{Player1}</td>
                <td className="td">{Player2}</td>
              </tr>
              <tr>
                {/*on cherche le vainqueur de la partie*/}
                <td className="td">{CounterJ1} drapeaux planter sur 20</td>
                <td className="td">{CounterJ2} drapeaux planter sur 20</td>
              </tr>
            </tbody>
          </table>
          <h2 className="p-5 my-5">{(CounterJ1 === 20) ? `Bravo ${Player1} tu à planter les 20 drapeaux avant ${Player2} !` : `Bravo ${Player2} tu à planter les 20 drapeaux avant ${Player1} !`}</h2>
        </center>
        <Footer />
      </div>
    );
}

export default ScoreBoard;