import React, { Component } from "react";

import "../css/Home.css";

import FormConnect from '../components/FormConnect'

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <center>
          <center>L'histoire de la <a href="https://fr.wikipedia.org/wiki/Bataille_navale_(jeu)" target="blank">Bataille Navale</a></center>
          <p>La bataille navale, appelée aussi touché-coulé, est un jeu de société dans lequel deux joueurs doivent placer des navires sur une grille tenue secrète et tenter de toucher les navires adverses. Le gagnant est celui qui parvient à couler tous les navires de l'adversaire avant que tous les siens ne le soient. <br />
          La première version commerciale du jeu fut publiée en 1931 par la Starex Novelty Co. sous le nom de Salvo. Ce jeu est devenu populaire lors de son apparition en 1943 dans les publications américaines de divertissement de la Milton Bradley Company qui l'exploita sous la forme papier jusqu'en 1967, où elle sortit un jeu de plateau, puis en réalisa une version électronique en 1977.</p>
          <h1>Règles</h1>
          <p>La bataille navale oppose deux joueurs. Chaque joueur dispose de deux grilles carrées de côté 10, dont les lignes sont numérotées de 1 à 10 et les colonnes de A à J, ainsi que d'une flotte composée de quelques bateaux d'une à cinq cases de long. <br />L'une des grilles représente la zone contenant sa propre flotte. Au début du jeu, chaque joueur place ses bateaux sur sa grille. L'autre représente la zone adverse, où il cherchera à couler les bateaux de son adversaire.<br />Chaque joueur, à son tour, annonce une case (par exemple « B6 »), et son adversaire lui répond si le tir tombe à l'eau ou au contraire s'il touche un bateau. Dans ce dernier cas, il annonce « touché » s'il reste des cases intactes au bateau ciblé, et « touché-coulé » si non.</p>
          <FormConnect />
        </center>
        <Footer />
      </div>
    );
  }
}
