import React from 'react';

import {setGameStatus} from './../reducers/actions';

export default class RestoreStateMenu extends React.Component {

  constructor(props){
    super(props);
  }

  handleContinue(){
    this.props.restoreState();
  }

  handleNewStart(){
    this.props.dispatch(setGameStatus("A"));
  }

  render(){
    return (
        <div className="center_screen">
            <div className="restartTitle">Hay una partida anterior guardada, ¿quieres continuarla?</div>
            <div className="center_screen center_text">
                <button className="resumeButton" onClick={this.handleContinue.bind(this)}>REANUDAR</button>
                <button className="newStartButton" onClick={this.handleNewStart.bind(this)}>EMPEZAR DE NUEVO</button>
            </div>
        </div>
    );
  }
}