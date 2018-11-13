import React from 'react';

export default class RestoreStateMenu extends React.Component {
  render(){
    return(
        <div>
            <div>Hay una partida anterior guardada, ¿quieres continuarla?</div>
            <button  onClick={this.props.restoreState(true)}>Reanudar</button>
            <button  onClick={this.props.restoreState(false)}>Empezar de nuevo</button>
        </div>
    );
  }
}