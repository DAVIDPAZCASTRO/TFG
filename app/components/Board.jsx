import React from 'react';

import Box from './Box.jsx';

export default class Board extends React.Component {

  render(){
    let board = this.props.boxes.map((rowBoxes, rowIndex) => {
      let row = rowBoxes.map((box, columnIndex) => {
        let key = "" + rowIndex + columnIndex;
        return(
          <Box box={box} key={key} rowIndex={rowIndex} columnIndex={columnIndex}/>
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
