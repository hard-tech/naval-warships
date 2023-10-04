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

var InfoIsComplet,
  PlayerFound,
  Turn,
  MyTurn,
  Opponent,
  CaseData,
  Class_Case1_1 = "Case1_1 ",
  Class_Case1_2 = "Case1_2 ",
  Class_Case1_3 = "Case1_3 ",
  Class_Case2_1 = "Case2_1 ",
  Class_Case2_2 = "Case2_2 ",
  Class_Case2_3 = "Case2_3 ",
  Class_Case3_1 = "Case3_1 ",
  Class_Case3_2 = "Case3_2 ",
  Class_Case3_3 = "Case3_3 ",
  NumberOfMovesToPlay = 0,
  Winer = null;

function FormConnect() {
  const [playCode, setPlayCode] = useState("");
  const [playerName, setplayerName] = useState("");
  const [playerNum, setplayerNum] = useState(1);
  var [StatusText, setStatusText] = useState();
  var [GameStart, setGameStart] = useState(false);
  var [GameFinishP1, setGameFinishP1] = useState(false);
  var [GameFinishP2, setGameFinishP2] = useState(false);
  var [ShowTurn, setShowTurn] = useState({ name: "", number: 0 });
  // var [MyTurn, setMyTurn] = useState()
  // var   [TurnTo, setTurnTo] = useState();

  // var GameStart = false;
  // var InfoIsComplet, Opponent, PlayerFound,Turn,MyTurn;

  document.onload = Initial();

  function Initial() {
    // Initialse au chargement du site la Phrase au milieux à l'état 1 donc pas d'info Rentré
    useEffect(() => {
      // StatusOpponent(1);
      setGameFinishP1(true);
      setGameFinishP2(true);
      // console.log(`Gamed Stat is : ${GameStart}`);

      if (localStorage.playCode && localStorage.playerName !== undefined) {
        setPlayCode(localStorage.playCode);
        setplayerName(localStorage.playerName);
        // setplayerNum(localStorage.playerNum)
      } else {
        console.log("You never play ;)");
      }
      // alert("Yeap")
    }, []);
  }

  // const [currentPlayer, setCurrentPlayer] = useState("");
  // const [gameBoard, setGameBoard] = useState(Array(9).fill("free"));
  // const [gamePlayed, setGamePlayed] = useState(0);
  function SubmitForm(e) {
    e.preventDefault();
    TakeInfo(playCode, playerName, playerNum);
  }
  function TakeInfo(playCode, playerName, playerNum) {
    // Renvois Les info de jeux à la fonction FoudOpponent() après les avoir vérifier (Non Vide) //

    if (playCode || playerName || playerNum !== "") {
      if (playCode === "") {
        alert("Please enter a Game Code!");
      }
      if (playerName === "") {
        alert("Please enter a Name!");
      }
      if (playerNum === "") {
        alert("Please enter a Player Number!");
      }
    }
    if (
      playCode !== "" &&
      playerName !== "" &&
      playerNum !== "" &&
      (playerNum === 1) | (playerNum === 2)
    ) {
      console.log(
        `Your Game Code is "${playCode}" and your name is "${playerName}" and your Player Number is "${playerNum}"`
      );
      localStorage["playCode"] = playCode;
      localStorage["playerName"] = playerName;
      // localStorage["playerNum"] = playerNum;
      FoundOpponent([playCode, playerName, playerNum]);
    } else {
      alert(
        "There was a problem lord of desire please check all fields of the form."
      );
    }
  }

  function FoundOpponent(Info) {
    // Récupération des info //
    const TramGameToPlay = Info;
    // localStorage['TramInfoPLay'] = TramGameToPlay;
    // console.log(TramGameToPlay);

    // ## lecture du CTP vérifer si il existe
    get(ref(db, `Games/CodeToPlay_${TramGameToPlay[0]}/`))
      .then((snapshot) => {
        // # Si oui{
        if (snapshot.exists()) {
          // ## vérif si il y a une RequestPlayer ## //
          get(ref(db, `Games/CodeToPlay_${TramGameToPlay[0]}/RequestPlayer`))
            .then((snapshot) => {
              // # Si oui{
              if (snapshot.exists()) {
                const response = snapshot.val();
                if (playerName === response.playerName) {
                  alert("your Name is allrady Used, pleas change it !");
                }
                if (playerNum === response.playerNum) {
                  alert(
                    "your Player Number is allrady Used, pleas change it !"
                  );
                }
                if (
                  playerName !== response.playerName &&
                  playerNum !== response.playerNum
                ) {
                  console.log(`you are J2 and J1 is foud ! `);
                  InfoIsComplet = true;
                  // ### Envoyer une alerte au Requester ### //

                  // ### Update Needplayer to false ### //
                  const updates = {};
                  updates[
                    `Games/CodeToPlay_${TramGameToPlay[0]}/NeedPlayer/`
                  ] = false;
                  update(ref(db), updates);

                  // ### Crée une GameInfo Dans le CTP ### //
                  if (response.playerNum === 1) {
                    set(
                      ref(db, `Games/CodeToPlay_${TramGameToPlay[0]}/GameInfo`),
                      {
                        playersNames: {
                          player1: response.playerName,
                          player2: playerName,
                        },
                        turnIsTo: {
                          name: response.playerName,
                          number: 1,
                        },
                        gameState: {
                          A: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          B: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          C: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          D: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          E: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          F: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          G: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          H: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          I: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          J: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                        },
                        GameStart: true,
                        ValueInfo: {
                          GameFinish: false,
                          NumberOfMovesToPlay: 0,
                        },
                      }
                    );
                  } else {
                    set(
                      // Envois à la BDD les parametre initialisation d'un nouveaux Jeux
                      ref(db, `Games/CodeToPlay_${TramGameToPlay[0]}/GameInfo`),
                      {
                        playersNames: {
                          player1: playerName,
                          player2: response.playerName,
                        },
                        turnIsTo: {
                          name: playerName,
                          number: 1,
                        },
                        gameState: {
                          A: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          B: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          C: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          D: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          E: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          F: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          G: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          H: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          I: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                          J: {
                            0: [0, ""],
                            1: [0, ""],
                            2: [0, ""],
                            3: [0, ""],
                            4: [0, ""],
                            5: [0, ""],
                            6: [0, ""],
                            7: [0, ""],
                            8: [0, ""],
                            9: [0, ""],
                          },
                        },
                        GameStart: true,
                        ValueInfo: {
                          GameFinish: false,
                          NombreTirTouchéJoueur1: 21,
                          NombreTirFaitJoueur1: 0,
                          NombreTirTouchéJoueur2: 21,
                          NombreTirFaitJoueur2: 0       
                        },
                      }
                    );
                  }

                  // ### Supprimer la Request ### //
                  remove(
                    ref(
                      db,
                      `Games/CodeToPlay_${TramGameToPlay[0]}/RequestPlayer`
                    )
                  );

                  // Envoyer les attente d'addvairsaire //
                  WaiteOpponent(playCode);
                }

                // # Si non{
              } else {
                // ### Alerter le joueur qu'une partie est déjà en cours sur le CTP envoyer ### //
                console.log(
                  `a game is already in progress with this Game Code : (${playCode})`
                );
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (
          !snapshot.exists() ||
          (snapshot.val().NeedPlayer === true) & InfoIsComplet
        ) {
          // ### écrire la request et attendre un joueur ### //
          set(ref(db, `Games/CodeToPlay_${TramGameToPlay[0]}`), {
            NeedPlayer: true,
            RequestPlayer: {
              playerName: TramGameToPlay[1],
              playerNum: Number(TramGameToPlay[2]),
            },
          })
            .then(() => {
              WaiteOpponent(playCode);
              console.log("Succses Send ;)");
              // StatusOpponent(2);

              document.querySelector("#Code").disabled = true;
              document.querySelector("#Name").disabled = true;
              document.querySelector("#Num").disabled = true;
              document.querySelector("#ConfBtn").classList.add("disabled");
            })
            .catch((error) => {
              console.log(error);
            });
          console.log("No data available before");
        }
        if (snapshot.exists() && snapshot.val().NeedPlayer === false) {
          alert("This game is complet !");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function WaiteOpponent(playCode) {
    // Attendre un Advairsaire
    const Path = ref(db, `Games/CodeToPlay_${playCode}/GameInfo/playersNames`);
    onValue(Path, (snapshot) => {
      // Code éxecuter des deux coté lors d'une connection entre deux joueur :) //
      if (snapshot.exists()) {
        var Data = snapshot.val();
        if (playerNum === 1) {
          Opponent = Data.player2;
        } else {
          Opponent = Data.player1;
        }

        console.log(
          `Hey ${playerName} we foud your opponent, is -- ${Opponent} -- You can play now !`
        );

        // Fonction D'initialisation du jeux //
        PlayerFound = true;
        setGameStart(true);
        setGameFinishP1(false);
        setGameFinishP2(false);
        // StatusOpponent(3);
        // TakeTurnToPlay();
        // GameState();
        console.log(`Party Launch ! (GameStarted = ${GameStart} )`);

        // Empéche de Modif les info de jeux //
        if (PlayerFound) {
          document.querySelector("#Code").disabled = true;
          document.querySelector("#Name").disabled = true;
          document.querySelector("#Num").disabled = true;
          document.querySelector("#ConfBtn").classList.add("disabled");
          // StatusOpponent(4);
        }
        // ${GameInfo.turnIsTo}
      }
    });
  }

  return (
    <form
      onSubmit={SubmitForm}
      className="d-flex justify-content-center flex-column align-content-center align-items-center"
    >
      <div className="my-4 d-flex flex-wrap justify-content-center">
        <div className="d-flex align-items-center m-4 flex-wrap flex-column justify-content-center">
          <span className="mx-4 my-2">
            Game code is « <b>{playCode}</b> »
          </span>
          <span className="d-flex">
            <div id="t">
              <input
                id="Code"
                className="rounded-2 px-2 border border-2 border-dark"
                type="text"
                placeholder="Enter your game code"
                aria-label="default input example"
                value={playCode}
                onChange={(e) => setPlayCode(e.target.value)}
              />
            </div>
          </span>
        </div>

        <div className="d-flex align-items-center m-4 flex-wrap flex-column justify-content-center">
          <span className="mx-4 my-2">
            Enter your name please <b>{playerName}</b> :
          </span>
          <span className="d-flex">
            <div id="t">
              <input
                id="Name"
                className="rounded-2 px-2 border border-2 border-dark"
                type="text"
                placeholder="Enter your name"
                aria-label="default input example"
                value={playerName}
                onChange={(e) => setplayerName(e.target.value)}
              />
            </div>
          </span>
        </div>
        <div className="d-flex flex-fill justify-content-center align-items-center align-self-center">
          <h4>
            <b>which player are you 1 or 2 ?</b>
          </h4>
          <div className="d-flex align-items-center m-4 flex-wrap flex-column justify-content-center">
            <input
              id="Num"
              className="rounded-2 px-2 border border-2 border-dark"
              type="number"
              value={playerNum}
              onChange={(e) => setplayerNum(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mx-3 my-2" id="ConfBtn">
        <b className="m-1">Confirm</b>
      </button>
    </form>
  );
}

export default FormConnect;