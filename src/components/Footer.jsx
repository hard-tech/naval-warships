import React, { Component } from 'react'
import AudioPlayer from 'react-audio-player';
import "../css/Game.css";
import Musique from "../music/JackSparrow.mp3";
const audioStyle = {
  display: 'none', // Masque le lecteur audio
};
export default class Footer extends Component {
  render() {
    return (
      <div>
      <audio autoPlay loop style={audioStyle}>
        <source src={Musique} type="audio/mpeg" />
      </audio>
      {/* Le reste de votre contenu HTML/JSX */}
    </div>
    )
  }
}