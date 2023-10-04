import React, { useEffect, useState, Component } from "react";  
import { Spinner } from "react-bootstrap";
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

import turn from "../function/TurnToPlay";

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

var Opponent, Winner;

function TakeNameOpponent(){
  get(ref(db, `Games/CodeToPlay_${playCode}/GameInfo/playersNames`)).then((snapshot) => {
    if(snapshot.exists()){
      var Data = snapshot.val();
      if (playerNum === 1) {
        Opponent = Data.player2;
      } else {
        Opponent = Data.player1;
      }
    }
  })
}

function InfoText1() {
  // Affiche les instruction que le joueur doit suivre //
  return (
    <div>
      <h3>
        Please <b>{playerName}</b> enter info to connect with your friend.
      </h3>
    </div>
  );
}

function InfoText2() {
  // Affiche les instruction que le joueur doit suivre //
  return (
    <h3 className=" d-flex flex-column align-items-center justify-content-center align-content-center animate__animated animate__rotateIn">
      <span className="pb-3">
        Hi, <b>{playerName}</b> your opponent search you please waite him.
      </span>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </h3>
  );
}

function InfoText3() {
  // Affiche les instruction que le joueur doit suivre //
  return (
    <div>
      <h3 id="InfoText3" className="animate__animated animate__heartBeat">
        Hey, <b>{playerName}</b> we foud your opponent, it's <b>{Opponent}</b> .
      </h3>
    </div>
  );
}

function InfoText5() {
  // Affiche le Vainqueur ! //

  // Récuper le nom du vainqueur
  // get(ref(db, `Games/CodeToPlay_${playCode}/GameInfo/gameState`)).then((snapshot) => {
    
  // })

  // Qui est le vainqueur ! //
  setGameFinishP1(true)
  if(Winner === playerNum){
    return (
      <div>
        <h3 id="InfoText3" className="animate__animated animate__infinite animate__pulse">
          Well done, <b className="InfoWinner Winner">{playerName}</b> you win against <b>{Opponent}</b>.
        </h3>
      </div>
    );
  }
  if(Winner !== playerNum && Winner !== ' no one '){
    return (
      <div>
        <h3 id="InfoText3" className="animate__animated animate__infinite animate__pulse">
          Sorry, <b className="InfoWinner Losser">{playerName}</b> you lost to <b>{Opponent}</b>.
        </h3>
      </div>
    );
  }else{
    return (
      <div>
        <h3 id="InfoText3" className="animate__animated animate__swing">
          GGs, <b>{playerName}</b> and <b>{Opponent}</b> good game but there is a draw !
        </h3>
      </div>
    );
  }


}


function StatusOpponent(StatutNum) {
  // Vérifi le État du Jeux de jeux //
  if (StatutNum === 1) {
    setStatusText(<InfoText1 />);
  }
  // Vérifi le État du Jeux de jeux //
  if (StatutNum === 2) {
    setStatusText(<InfoText2 />);
  }
  // Vérifi le État du Jeux de jeux //
  if (StatutNum === 3) {
    setStatusText(<InfoText3 />);
  }
  if (StatutNum === 4) {
    document
      .querySelector(".InfoCard")
      .classList.add(
        "animate__delay-4s",
        "animate__animated",
        "animate__zoomOutDown"
      );
  }
  // Vérifi le État du Jeux de jeux //
  if (StatutNum === 5) {
    InfoText5()
    setStatusText(<InfoText5 />);      

    document.querySelector(".InfoCard")
    .classList.remove(
      "animate__delay-4s",
      "animate__animated",
      "animate__zoomOutDown"
    );

    document.querySelector(".InfoCard")
    .classList.add(
      "animate__animated",
      "animate__fadeInUp",
      "animate__fast"
    );
  }
}

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
        <div className="InfoCard">
          <InfoCard />
        </div>
    </div>
  )
}

export default StatusOpponent;