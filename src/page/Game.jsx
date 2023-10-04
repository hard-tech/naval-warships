import React, { Component, useState } from "react";
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

import PrintShips from "../function/PrintShips";

const playCode = localStorage.playCode;
const playerName = localStorage.playerName;
const playerNum = localStorage.playerNum;

var PinedX,
  PinedY,
  SetShipsOn,
  ShipNumber = 1;

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

  function convertLettreToChiffre(lettre) {
    // Vérifiez si la lettre est valide (A à J)
    if (/^[A-J]$/.test(lettre)) {
      // Convertissez la lettre en chiffre (1 à 10)
      const chiffre = lettre.charCodeAt(0) - "A".charCodeAt(0) + 1;
      return chiffre;
    } else {
      // Gérez le cas où la lettre n'est pas valide
      console.error("Lettre non valide");
      return null;
    }
  }

  // Fonction pour extraire la lettre de la chaîne //
  function extractLettre(coord) {
    // Utilisez une expression régulière pour extraire la première lettre de la chaîne
    const lettreMatch = coord.match(/[A-Za-z]/);

    if (lettreMatch) {
      return lettreMatch[0].toUpperCase(); // Convertissez la lettre en majuscule
    } else {
      console.error("Lettre non trouvée dans la coordonnée.");
      return null;
    }
  }
  // Fonction pour extraire les chiffres de la chaîne//
  function extractChiffre(coord) {
    // Utilisez une expression régulière pour extraire les chiffres de la chaîne
    const chiffreMatch = coord.match(/\d+/);

    if (chiffreMatch) {
      return Number(chiffreMatch[0]);
    } else {
      console.error("Chiffres non trouvés dans la coordonnée.");
      return null;
    }
  }

  // Fonction pour extraire la lettre de la chaîne
  function extractLettre(coord) {
    const lettreMatch = coord.match(/[A-Za-z]/);

    if (lettreMatch) {
      return lettreMatch[0].toUpperCase();
    } else {
      console.error("Lettre non trouvée dans la coordonnée.");
      return null;
    }
  }

  function SetShips(ShipsX) {
    if (true) {
      var shipStart = prompt(
        `Tapper le point de commencement de votre bateaux N°${ShipNumber}`
      );
      var shipEnd = prompt(
        `Tapper le point où Fini votre bateaux N°${ShipNumber} (Vertical et Horizontal seulement)`
      );

      ShipNumber++;

      var xA = convertLettreToChiffre(extractLettre(shipStart));
      var yA = extractChiffre(shipStart);
      var xB = convertLettreToChiffre(extractLettre(shipEnd));
      var yB = extractChiffre(shipEnd);
      alert(`${xA}, ${xB}, ${yA}, ${yB}`);

      // Récuper XA et XB du ship en cour.

      // PrintShips(xA, yA, xB, yB, ShipsX);

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
    } else {
      alert("Ce bateaux est déjà placer !");
    }
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
      <Nav />
      <main>
        <section>
          <div className="d-flex align-items-center flex-column w40">
            <div className="d-flex flex-warp blocBoat">
              <div id="titleBoat">
                <h3 className="text-dark ">Placez vos bateaux</h3>
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
                    {tableData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td>{String.fromCharCode(65 + rowIndex)}</td>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex}>
                            {/* {cell === "" && (
                              <div className={`${colIndex}-${rowIndex}`}>
                                {tablePin.includes(`${colIndex}-${rowIndex}`) && (
                                  <Flag />
                                )}
                              </div>
                            )} */}
                          </td>
                        ))}
                      </tr>
                    ))}
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
