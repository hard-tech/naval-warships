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


  function InfoCard() {
    return (
      <div className="">
        opponent Info :
        <div className=" border border-2 p-4 m-2 rounded border-light">
          {StatusText}
        </div>
      </div>
    );
  }

  return(
    <div className="">
      {InfoCard}
    </div>
  )
}

export default StatusOpponent;