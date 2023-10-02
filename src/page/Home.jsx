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
            <h1>Bataille Naval</h1>
            <button>Start Game</button>
            <p>La bataille navale, appelée aussi touché-coulé, est un jeu de société dans lequel deux joueurs doivent placer des « navires » sur une grille tenue secrète et tenter de « toucher » les navires adverses. Le gagnant est celui qui parvient à couler (c'est-à-dire toucher toutes les cases) tous les navires de l'adversaire avant que tous les siens ne le soient. <br/>Le principe du jeu de bataille navale semble trouver son origine dans le jeu français L'Attaque1 lors de la Première Guerre mondiale. On a aussi trouvé des liens de parenté avec le jeu de E. I. Horseman en 1890 (Baslinda2) et on dit que des officiers russes y auraient joué antérieurement à la première guerre3. La première version commerciale du jeu fut publiée en 1931 par la Starex Novelty Co. sous le nom de Salvo4. Ce jeu est devenu populaire lors de son apparition en 1943 dans les publications américaines de divertissement de la Milton Bradley Company qui l'exploita sous la forme papier jusqu'en 1967, où elle sortit un jeu de plateau5, puis en réalisa une version électronique en 1977.</p>
          </center>
        <Footer />
      </div>
    )
  }
}
