import React, { Component, useState, useEffect } from "react";
import AudioPlayer from "react-audio-player";
import "../css/Game.css";
import IconSite from "../Images/icon/Icon_Flag.png";
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

import { db } from "../config/config";
import FormConnect from "../components/FormConnect";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import Ship1S2 from "../Images/EnsembleDesBateaux/bateaux-1_Size-2.png";
import Ship1S3 from "../Images/EnsembleDesBateaux/bateaux-1_Size-3.png";
import Ship1S4 from "../Images/EnsembleDesBateaux/bateaux-1_Size-4.png";
import Ship1S5 from "../Images/EnsembleDesBateaux/bateaux-1_Size-5.png";
import Ship2S3 from "../Images/EnsembleDesBateaux/bateaux-2_Size-3.png";
import Ship2S4 from "../Images/EnsembleDesBateaux/bateaux-2_Size-4.png";

import FlagIcon from "../Images/icon/Icon_Flag.png";

import PrintShips from "../function/PrintShips";

const playCode = localStorage.playCode;
const playerName = localStorage.playerName;
const playerNum = localStorage.playerNum;

var PinedX,
  PinedY,
  SetShipsOn,
  ShipNumber = 1,
  xA = 0,
  xB = 0,
  yA = 0,
  yB = 0,
  shipStart,
  shipEnd,
  Afficher = false;

function Game() {
  const [tableData, setTableData] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(""))
  );
  const [tablePin, setTablePin] = useState([]);

  function PinThis(x, y) {
    // Mettez à jour la copie du tableau en fonction des coordonnées x et y
    PinedX = x;
    PinedY = y;

    const coordinate = `${x}-${y}`;

    get(
      ref(db, `Games/CodeToPlay_${playCode}/GameInfo/GameStatus/GameFinish`)
    ).then((snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        if (!data) {
          if (tablePin.includes(coordinate)) {
            // si il y a déjà un drapaux l'enlever du tablaux
            setTablePin((prevTablePin) =>
              prevTablePin.filter((coord) => coord !== coordinate)
            );

            // Update Value incrémental //
            let updates = {};
            updates[
              `Games/CodeToPlay_${playCode}/GameInfo/Counter/J${playerNum}`
            ] = increment(-1);
            update(ref(db), updates);
          } else {
            // Utilisez setTablePin pour mettre à jour le tableau d'états
            setTablePin((prevTablePin) => [...prevTablePin, coordinate]);

            // Update Value décrémental //
            const updates = {};
            updates[
              `Games/CodeToPlay_${playCode}/GameInfo/Counter/J${playerNum}`
            ] = increment(1);
            update(ref(db), updates);
          }
        } else {
          alert("C'est déjà fini :) ");
        }
      }
    });

    // alert(`Pin on X${PinedX+1} & Y${PinedY+1}`)
    console.log(tablePin);

    tableData.forEach((pinFlagIsIn) => {});
  }

  function Flag() {
    return (
      <div>
        <img src={FlagIcon} alt="" width={20} />
      </div>
    );
  }

  let Path = ref(db, `Games/CodeToPlay_${playCode}/GameInfo/Counter/`);
  onValue(Path, (snapshot) => {
    // Code éxecuter des deux coté lors d'une connection entre deux joueur :) //
    console.log("Done 1");
    if (snapshot.exists()) {
      let data = snapshot.val();
      // console.log(data.J1);
      // console.log(playerNum);
      if (playerNum === "1" && data.J1 === 20) {
        // console.log("Donne 3")
        // Update les data Victoire //
        const updates = {};
        updates[
          `Games/CodeToPlay_${playCode}/GameInfo/GameStatus/GameFinish`
        ] = true;
        updates[`Games/CodeToPlay_${playCode}/GameInfo/GameStatus/WinnerIs`] =
          playerName;
        update(ref(db), updates);
      }
      if (playerNum === "2" && data.J2 === 20) {
        // console.log("Done 3")
        // Update les data Victoire //
        const updates = {};
        updates[
          `Games/CodeToPlay_${playCode}/GameInfo/GameStatus/GameFinish`
        ] = true;
        updates[`Games/CodeToPlay_${playCode}/GameInfo/GameStatus/WinnerIs`] =
          playerName;
        update(ref(db), updates);
      }
    }
  });

  Path = ref(db, `Games/CodeToPlay_${playCode}/GameInfo/GameStatus/GameFinish`);
  onValue(Path, (snapshot) => {
    if (snapshot.exists()) {
      let data = snapshot.val();
      if (data) {
        if (!Afficher) {
          alert("Fin de la partie ! GG");
          Afficher = true;
        }
        setTimeout(() => {
          document.location.href = "/ScoreBoard";
        }, 3000);
      }
    }
  });

  return (
    <div>
      <Nav />
      <main>
        <section>
          <div className="d-flex align-items-center flex-column w40">
            <h2>
              <span>
                {" "}
                <img src={IconSite} alt="Ico" id="flagIcon" />
              </span>
              Taper sur 20 cases avant votre Adversaire !
            </h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{String.fromCharCode(65 + rowIndex)}</td>
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        onClick={() => {
                          // Vérifiez si la cellule est vide avant d'appeler la fonction PinThis
                          if (cell === "") {
                            PinThis(colIndex, rowIndex);
                          }
                        }}
                      >
                        {/* Utilisez une condition pour afficher <Flag /> si la classe est '1-1' */}
                        {cell === "" && (
                          <div className={`${colIndex}-${rowIndex}`}>
                            {tablePin.includes(`${colIndex}-${rowIndex}`) && (
                              <Flag />
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Game;
