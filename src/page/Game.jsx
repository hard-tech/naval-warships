import React, { Component } from 'react';

import '../css/Game.css';

import FormConnect from '../components/FormConnect';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function TablePlay() {
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
              <div id=''></div>
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

export default class Game extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h1>Table de Jeux</h1>
                <main>
                    <section>
                        <div className="d-flex align-items-center flex-column w40">
                        
                        <div className='d-flex blocBoat'>
                            <section id="boxBoat">
                                <h3>Placez vos bateaux</h3>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>
                            <div id='center'>
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
                                        <tr>
                                            <td>A</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>B</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>C</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>D</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>E</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>G</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>H</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>I</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>J</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='btnReady'>
                                    Prêt
                                </button>
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
                                <tr>
                                    <td>A</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>E</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>G</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>H</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>J</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className='btnReady'>
                                Prêt
                            </button>
                        </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
