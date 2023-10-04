import React, { Component } from "react";

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
          Hey, <b>{playerName}</b> we foud your opponent, it's <b>{Opponent}</b>{" "}
          .
        </h3>
      </div>
    );
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
  }
  function StatusOpponent() {
    return(
      <div className="">

      </div>
    )
}

