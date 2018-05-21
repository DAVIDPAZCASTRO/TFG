import React from 'react';

import {setGameStatus} from './../reducers/actions';


export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home_screen">
          <h1 id="home_title">TRIVIAL</h1>
          <a>¿Te atreves a jugar una partida al Trivial? Hay cuatro categorías distintas: historia, cine, deportes y ciencia. Consigue las 4 coronas de cada categoría situadas en las esquinas para ganar.</a>
          <div><button onClick={() => {this.props.dispatch(setGameStatus("B"))}}>JUGAR</button></div>
      </div>
    );
  }

}
