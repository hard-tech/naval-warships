import React, { Component, useState } from "react";
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
import Bateaux1S2 from "../Images/EnsembleDesBateaux/bateaux-1_Size-2.png";
import Bateaux1S3 from "../Images/EnsembleDesBateaux/bateaux-1_Size-3.png";
import Bateaux1S4 from "../Images/EnsembleDesBateaux/bateaux-1_Size-4.png";
import Bateaux1S5 from "../Images/EnsembleDesBateaux/bateaux-1_Size-5.png";
import Bateaux2S3 from "../Images/EnsembleDesBateaux/bateaux-2_Size-3.png";
import Bateaux2S4 from "../Images/EnsembleDesBateaux/bateaux-2_Size-4.png";

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
  xA = 0,xB = 0,yA = 0,yB = 0,
  shipStart, shipEnd;

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

  function SetShips(ShipsX, Seiz) {
      while(!(1 <= xA && xA <= 10 && 1 <= xB && xB <= 10 && 1 <= yA && yA <= 10 && 1 <= yB && yB <= 10)){
        shipStart = prompt(
          `Tapper le point (entre A&J et entre 1&10) de commencement de votre bateaux N°${ShipNumber} de taille ${Seiz}`
        );
        shipEnd = prompt(
          `Tapper le point (entre A&J et entre 1&10) où Fini votre bateaux N°${ShipNumber} de taille ${Seiz} (Vertical et Horizontal seulement)`
        );
  
        
        xA = convertLettreToChiffre(extractLettre(shipStart));
        yA = extractChiffre(shipStart);
        xB = convertLettreToChiffre(extractLettre(shipEnd));
        yB = extractChiffre(shipEnd);
  
        console.log(`${xA}, ${yA}, ${xB}, ${yB}`);
        
      }

      // Récuper XA et XB du ship en cour.

      PrintShips(xA, yA, xB, yB, ShipsX, Seiz);

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
        })
        .catch((error) => {
          console.log(error);
        });

        // remise à 0 des Cordonée du bateaux //
        xA = 0;xB = 0;yA = 0;yB = 0
  }

  function Flag() {
    return (
      <table id="finished" className="my-3">
        <tbody>
          <tr>
            <td
                id="1A"
              onClick={() => Game('A',1)}
              className="p-4 border-4 border-light"
            >
              <div id="1A"></div>
            </td>
            <td
              id="1B"
              onClick={() => Game('B',1)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="1B"></div>
            </td>
            <td
              id="1C"
              onClick={() => Game('C',1)}
              className="p-4 border-4 border-light"
            >
              <div id="1C"></div>
            </td>
            <td
              id="1D"
              onClick={() => Game('D',1)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="1D"></div>
            </td>
            <td
              id="1E"
              onClick={() => Game('E',1)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="1E"></div>
            </td>
            <td
              id="1F"
              onClick={() => Game('F',1)}
              className="p-4 border-4 border-light"
            >
              <div id="1F"></div>
            </td>
            <td
              id="1G"
              onClick={() => Game('G',1)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="1G"></div>
            </td>
            <td
              id="1H"
              onClick={() => Game('H',1)}
              className="p-4 border-4 border-light"
            >
              <div id="1H"></div>
            </td>
            <td
              id="1I"
              onClick={() => Game('I',1)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="1I"></div>
            </td>
            <td
              id="1J"
              onClick={() => Game('J',1)}
              className="p-4 border-4 border-light"
            >
            <div id="1J"></div>
            </td>
          </tr>
          <tr>
            <td
              id="2A"
              onClick={() => Game('A',2)}
              className="p-4 border-4 border-light"
            >
              <div id="Case1_1" className={Class_Case1_1}></div>
            </td>
            <td
              id="2B"
              onClick={() => Game('B',2)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="2B"></div>
            </td>
            <td
              id="2C"
              onClick={() => Game('C',2)}
              className="p-4 border-4 border-light"
            >
              <div id="2C"></div>
            </td>
            <td
              id="2D"
              onClick={() => Game('D',2)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="2D"></div>
            </td>
            <td
              id="2E"
              onClick={() => Game('E',2)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="2E"></div>
            </td>
            <td
              id="2F"
              onClick={() => Game('F',2)}
              className="p-4 border-4 border-light"
            >
              <div id="2F"></div>
            </td>
            <td
              id="2G"
              onClick={() => Game('G',2)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="2G"></div>
            </td>
            <td
              id="2H"
              onClick={() => Game('H',2)}
              className="p-4 border-4 border-light"
            >
              <div id="2H"></div>
            </td>
            <td
              id="2I"
              onClick={() => Game('I',2)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="2I"></div>
            </td>
            <td
              id="2J"
              onClick={() => Game('J',2)}
              className="p-4 border-4 border-light"
            >
                <div id="2J"></div>
            </td>
          </tr>
          <tr>
            <td
              id="3A"
              onClick={() => Game('A',3)}
              className="p-4 border-4 border-light"
            >
              <div id="3A"></div>
            </td>
            <td
              id="3B"
              onClick={() => Game('B',3)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="3B"></div>
            </td>
            <td
              id="3C"
              onClick={() => Game('C',3)}
              className="p-4 border-4 border-light"
            >
             <div id="3C"></div>
            </td>
            <td
              id="3D"
              onClick={() => Game('D',3)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="3D"></div>
            </td>
            <td
              id="3E"
              onClick={() => Game('E',3)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="3E"></div>
            </td>
            <td
              id="3F"
              onClick={() => Game('F',3)}
              className="p-4 border-4 border-light"
            >
              <div id="3F"></div>
            </td>
            <td
              id="3G"
              onClick={() => Game('G',3)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="3G"></div>
            </td>
            <td
              id="3H"
              onClick={() => Game('H',3)}
              className="p-4 border-4 border-light"
            >
              <div id="3H"></div>
            </td>
            <td
              id="3I"
              onClick={() => Game('I',3)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="3I"></div>
            </td>
            <td
              id="3J"
              onClick={() => Game('J',3)}
              className="p-4 border-4 border-light"
            >
                <div id="3J"></div>
            </td>
          </tr>
          <tr>
            <td
              id="4A"
              onClick={() => Game('A',4)}
              className="p-4 border-4 border-light"
            >
              <div id="4A"></div>
            </td>
            <td
              id= "4B"
              onClick={() => Game('B',4)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="4B"></div>
            </td>
            <td
              id="4C"
              onClick={() => Game('C',4)}
              className="p-4 border-4 border-light"
            >
              <div id="4C"></div>
            </td>
            <td
              id="4D"
              onClick={() => Game('D',4)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="4D"></div>
            </td>
            <td
              id="4E"
              onClick={() => Game('E',4)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="4E"></div>
            </td>
            <td
              id="4F"
              onClick={() => Game('F',4)}
              className="p-4 border-4 border-light"
            >
              <div id="4F"></div>
            </td>
            <td
              id="4G"
              onClick={() => Game('G',4)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="4G"></div>
            </td>
            <td
              id="4H"
              onClick={() => Game('H',4)}
              className="p-4 border-4 border-light"
            >
              <div id="4H"></div>
            </td>
            <td
              id="4I"
              onClick={() => Game('I',4)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="4I"></div>
            </td>
            <td
              id="4J"
              onClick={() => Game('J',4)}
              className="p-4 border-4 border-light"
            >
                <div id="4J"></div>
            </td>
          </tr>
          <tr>
            <td
              id="5A"
              onClick={() => Game('A',5)}
              className="p-4 border-4 border-light"
            >
              <div id="5A"></div>
            </td>
            <td
              id="5B"
              onClick={() => Game('B',5)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="5B"></div>
            </td>
            <td
              id="5C"
              onClick={() => Game('C',5)}
              className="p-4 border-4 border-light"
            >
              <div id="5C"></div>
            </td>
            <td
              id="5D"
              onClick={() => Game('D',5)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="5D"></div>
            </td>
            <td
              id="5E"
              onClick={() => Game('E',5)}
              className="p-4 border-4 border-light border-top border-bottom"
            >
              <div id="5E"></div>
            </td>
            <td
              id="5F"
              onClick={() => Game('F',5)}
              className="p-4 border-4 border-light"
            >
              <div id="5F"></div>
            </td>
            <td
              id="5G"
              onClick={() => Game('G',5)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="5G"></div>
            </td>
            <td
              id="5H"
              onClick={() => Game('H',5)}
              className="p-4 border-4 border-light"
            >
              <div id="5H"></div>
            </td>
            <td
              id="5I"
              onClick={() => Game('I',5)}
              className="p-4 border-4 border-light border-end border-start"
            >
              <div id="5I"></div>
            </td>
            <td
              id="5J"
              onClick={() => Game('J',5)}
              className="p-4 border-4 border-light"
            >
                <div id="5J"></div>
            </td>
          </tr>
        </tbody>
      </table>
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
            <div className="d-flex flex-warp blocBoat">
              <div id="titleBoat">
                <h3 className="text-dark ">Placez vos bateaux</h3>
                <section id="boxBoat">
                  <img
                    src={Bateaux1S2}
                    onClick={() => SetShips("Ship1S2", 2)}
                    alt="#"
                  />
                  <img
                    src={Bateaux1S3}
                    onClick={() => SetShips("Ship1S2", 3)}
                    alt="#"
                  />
                                    <img
                    src={Bateaux1S4}
                    onClick={() => SetShips("Ship1S4", 4)}
                    alt="#"
                  />
                                    <img
                    src={Bateaux1S5}
                    onClick={() => SetShips("Ship1S5", 5)}
                    alt="#"
                  />
                                    <img
                    src={Bateaux2S3}
                    onClick={() => SetShips("Ship2S3", 3)}
                    alt="#"
                  />
                                    <img
                    src={Bateaux2S4}
                    onClick={() => SetShips("Ship2S4", 4)}
                    alt="#"
                  />
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
