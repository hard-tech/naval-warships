import React, { useEffect, useState, Component } from "react";  
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

function StatusOpponent(){

const playCode = localStorage.playCode;
const playerName = localStorage.playerName;
const playerNum = localStorage.playerNum;

// const [playCode, setPlayCode] = useState("");
// const [playerName, setplayerName] = useState("");
// const [playerNum, setplayerNum] = useState(1);
var [StatusText, setStatusText] = useState();
var [GameStart, setGameStart] = useState(false);
var [GameFinishP1, setGameFinishP1] = useState(false);
var [GameFinishP2, setGameFinishP2] = useState(false);
var [ShowTurn, setShowTurn] = useState({ name: "", number: 0 });

var Turn, MyTurn;


  function TakeTurnToPlay(){
    const Path = ref(db, `Games/CodeToPlay_${playCode}/GameInfo/turnIsTo`);
    onValue(Path, (snapshot) => {
      // Code exécuter à chaque changement de `Games/CodeToPlay_${playCode}/GameInfo/turnIsTo` //
      if (snapshot.exists()) {
        var dataTurn = snapshot.val();
        Turn = [dataTurn.name, dataTurn.number];
        setShowTurn({ name: dataTurn.name, number: dataTurn.number });

        // Teste si le tour sur la BDD correspond à Numéraux du joueur //
        if (Turn[1] === playerNum) {
          // Si oui C'est Bien son tour //
          MyTurn = true;
        } else {
          // Si Non Ce n'est pas encore sont Tour //
          MyTurn = false;
        }
      }
    });
  }

  function TurnToPlay(){
    // Affiche à qui c'est de jouer //
    return (
      <h2 id="info" className="my-3 mt-5">
        It is turn to
        <b>
          <span id="turn">
            {" "}
            {ShowTurn.name}
          </span>
        </b>
      </h2>
    );
  }
  
  return(
    <div className="">
    </div>
  )
}

export default StatusOpponent;