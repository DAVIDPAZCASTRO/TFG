import React from 'react';

import {setGameStatus} from './../reducers/actions';
import {GLOBAL_CONFIG} from '../config/config.js';


export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
          <div className="center_screen home_screen">
            <h1 className="home_title">TRIVIAL</h1>
          </div>
          <div className="center_screen textHome">
            <p className="center_screen">¿Te atreves a jugar una partida al Trivial?</p> <li>Hay cuatro categorías distintas: <a className="historia">{(GLOBAL_CONFIG.categories[0].name).toUpperCase()}</a>, <a className="cine">{(GLOBAL_CONFIG.categories[1].name).toUpperCase()}</a>, <a className="deportes">{(GLOBAL_CONFIG.categories[3].name).toUpperCase()}</a> y <a className="ciencia">{(GLOBAL_CONFIG.categories[2].name).toUpperCase()}</a>.</li><li> Consigue la corona de cada una de las categorías para ganar.</li><li>Tienes 5 vidas. Cada vez que falles perderás una. Si te quedas sin vidas, pierdes.</li>
          </div>
          <div className="buttonHome"><button onClick={() => {this.props.dispatch(setGameStatus("B"))}}>JUGAR</button></div>
      </div>
    );
  }

}
