import React, { Component, useState, useEffect } from "react";
import AudioPlayer from 'react-audio-player';
import "../css/Game.css";
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

import Musique from "../music/JackSparrow.mp3";

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
  shipEnd;

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

    if (tablePin.includes(coordinate)) {
      // si il y a déjà un drapaux l'enlever du tablaux
      setTablePin((prevTablePin) =>
        prevTablePin.filter((coord) => coord !== coordinate)
      );
    } else {
      // Utilisez setTablePin pour mettre à jour le tableau d'états
      setTablePin((prevTablePin) => [...prevTablePin, coordinate]);
    }

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

  return (
    <div>
    <div>
        <AudioPlayer 
          src={Musique}
          autoPlay
          loop
          controls
        />
        Musique d'ambience
    </div>
      <Nav />
      <main>
        <section>
          <div className="d-flex align-items-center flex-column w40">
            <h2>Taper sur les 100 cases avant votre Adversaire !</h2>
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
