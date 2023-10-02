import React, { Component } from 'react';

import '../css/Home.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
          <center>
            <h2>Bataille Naval</h2>
            <center>L'histoire de la bataille naval</center>
            <p>La bataille navale, appelée aussi touché-coulé, est un jeu de société dans lequel deux joueurs doivent placer des « navires » sur une grille tenue secrète et tenter de « toucher » les navires adverses. Le gagnant est celui qui parvient à couler (c'est-à-dire toucher toutes les cases) tous les navires de l'adversaire avant que tous les siens ne le soient. <br/>Le principe du jeu de bataille navale semble trouver son origine dans le jeu français L'Attaque lors de la Première Guerre mondiale. On a aussi trouvé des liens de parenté avec le jeu de E. I. Horseman en 1890 (Baslinda) et on dit que des officiers russes y auraient joué antérieurement à la première guerre. La première version commerciale du jeu fut publiée en 1931 par la Starex Novelty Co. sous le nom de Salvo. Ce jeu est devenu populaire lors de son apparition en 1943 dans les publications américaines de divertissement de la Milton Bradley Company qui l'exploita sous la forme papier jusqu'en 1967, où elle sortit un jeu de plateau, puis en réalisa une version électronique en 1977.</p>
            <h2>Règles</h2>
            <p>La bataille navale oppose deux joueurs. Chaque joueur dispose de deux grilles carrées de côté 10, dont les lignes sont numérotées de 1 à 10 et les colonnes de A à J, ainsi que d'une flotte composée de quelques bateaux d'une à cinq cases de long. <br/>L'une des grilles représente la zone contenant sa propre flotte. Au début du jeu, chaque joueur place ses bateaux sur sa grille, en s'assurant que deux bateaux ne sont pas adjacents. L'autre représente la zone adverse, où il cherchera à couler les bateaux de son adversaire.<br/>Chaque joueur, à son tour, annonce une case (par exemple « B6 »), et son adversaire lui répond si le tir tombe à l'eau ou au contraire s'il touche un bateau. Dans ce dernier cas, il annonce « touché » s'il reste des cases intactes au bateau ciblé, et « touché-coulé » si non.<br/>Diverses variantes existent, par exemple le fait de tirer les coups par salves et de ne donner que le résultat global de la salve.</p>
            <h1><button>Start Game</button></h1>
          </center>
        <Footer />
      </div>
    )
  }
}
