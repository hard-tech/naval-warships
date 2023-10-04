import React, { Component, useState } from "react";
import Fonction_bateau from "../components/Fonction_bateaux";
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
import Bateaux1S2 from "../Images/EnsembleDesBateaux/bateaux-1_Size-2.png";
import Bateaux1S3 from "../Images/EnsembleDesBateaux/bateaux-1_Size-3.png";
import Bateaux1S4 from "../Images/EnsembleDesBateaux/bateaux-1_Size-4.png";
import Bateaux1S5 from "../Images/EnsembleDesBateaux/bateaux-1_Size-5.png";
import Bateaux2S3 from "../Images/EnsembleDesBateaux/bateaux-2_Size-3.png";
import Bateaux2S4 from "../Images/EnsembleDesBateaux/bateaux-2_Size-4.png";

import FlagIcon from "../Images/icon/Icon_Flag.png";

const playCode = localStorage.playCode;
const playerName = localStorage.playerName;
const playerNum = localStorage.playerNum;

var PinedX, PinedY;

function Game() {


  // const [tableData, setTableData] = useState(
  //   Array.from({ length: 10 }, () => Array(10).fill(""))
  // );

  // // Utilisez l'état pour tablePin
  // const [tablePin, setTablePin] = useState([]);

  // function PinThis(x, y) {
  //   // Mettez à jour la copie du tableau en fonction des coordonnées x et y
  //   const coordinate = `${x}-${y}`;

  //   if (tablePin.includes(coordinate)) {
  //     alert(`Les coordonnées du drapeau pour x:${x} et y:${y} existent déjà.`);
  //   } else {
  //     // Utilisez setTablePin pour mettre à jour le tableau d'états
  //     setTablePin((prevTablePin) => [...prevTablePin, coordinate]);
  //   }

  //   // ... (le reste de votre code)
  // }

  // // ... (le reste de votre code)


  const [tableData, setTableData] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(""))
  );
  var tablePin = [];

  function PinThis(x, y) {
    // Mettez à jour la copie du tableau en fonction des coordonnées x et y
    PinedX = x;
    PinedY = y;

    const isCoordinateExist = (x, y) => {
      return tablePin.includes(`${x}-${y}`);
    };

    if (isCoordinateExist(x, y)) {
      alert(`Les coordonnées la flag d'x:${x} et d'y:${y} existent déjà.`);
    } else {
      tablePin.push(`${x}-${y}`);
    }

    // alert(`Pin on X${PinedX+1} & Y${PinedY+1}`)
    console.log(tablePin);

    tableData.forEach((pinFlagIsIn) => {});
  }

  function SetShips(ShipsX) {
    alert("Voudevez selectioner l'endroit où le bateaux sera placer.");

    var xA = 4;
    var yA = 2;
    var xB = 8;
    var yB = 2;

    set(
      ref(
        db,
        `Games/CodeToPlay_${playCode}/CoordinatedShips/ShipsPlayer${playerNum}/${ShipsX}`
      ),
      {
        xA: xA,
        yA: yA,
        xB: xB,
        yB: yB,
      }
    )
      .then(() => {
        console.log("Succses Send ;)");
        alert("Succses Send ;)");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Flag() {
    return (
      <div>
        <img src={FlagIcon} alt="" />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <main>
        <section>
          <div className="d-flex align-items-center flex-column w40">
            <div className="d-flex flex-warp blocBoat">
              <div id="titleBoat">
                <h3 className="text-dark ">Placez vos bateaux</h3>
                <Fonction_bateau></Fonction_bateau>
                <section id="boxBoat">
                  <img
                    src={Bateaux1S2}
                    onClick={() => SetShips("Ship1S2")}
                    alt="#"
                  />
                  <img src={Bateaux1S3} alt="#" />
                  <img src={Bateaux1S4} alt="#" />
                  <img src={Bateaux1S5} alt="#" />
                  <img src={Bateaux2S3} alt="#" />
                  <img src={Bateaux2S4} alt="#" />
                </section>
              </div>
              <div id="center">
                <h2>Ma carte</h2>
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
                    <tr>
                      <td>A</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>E</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>F</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>G</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>H</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>I</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>J</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <button className="btnReady">Prêt</button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center flex-column w40">
            <h2>Sonard</h2>
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
                            PinThis(rowIndex, colIndex);
                          }
                        }}
                      >
                        {/* Utilisez une condition pour afficher <Flag /> si la classe est '1-1' */}
                        {cell === "" && (
                          <div className={`${rowIndex}-${colIndex}`}>
                            {tablePin.includes(`${rowIndex}-${colIndex}`) && (
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
            <div>
              <button className="btnReady">Prêt</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Game;