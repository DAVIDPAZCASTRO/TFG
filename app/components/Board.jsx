import React from 'react';

import './../assets/scss/board.scss';

import Box from './Box.jsx';

export default class Board extends React.Component {

  onChoosePosition(x,y){
    playerStatus.playerIn = true;
    playerStatus.position = [x,y];
  }
  onResetPosition(){
    playerStatus.playerIn = true;
    playerStatus.position = [4,4];
  }
  render(){
    let playerStatus = this.props.player;
    let board = this.props.boxes.map((rowBoxes, rowIndex) => {
      let row = rowBoxes.map((box, columnIndex) => {
        let key = "" + rowIndex + columnIndex;
        return(
          <Box dispatch={this.props.dispatch} box={box} key={key} rowIndex={rowIndex} columnIndex={columnIndex} player={playerStatus}/>
        );
      });
      return(
        <div key={"row" + rowIndex}>
          {row}
        </div>
      );
    });
    return(
      <div>
        {board}
      </div>
    );
  }
}
