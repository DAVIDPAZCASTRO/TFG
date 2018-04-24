import React from 'react';

import './../assets/scss/board.scss';

import Box from './Box.jsx';

export default class Board extends React.Component {


  var getBoxesForDistance = function(box, previousBox=undefined, d){


    if([0,4,8].indexOf(box[0])){
      return "ERROR"
    }
    var boxes = [];


  	if(d > 0) {

      let upBox = [box[0]-1,box[1]];
      let downBox = [box[0]+1,box[1]];
      let leftBox = [box[0],box[1]-1];
      let rightBox = [box[0],box[1]+1];


  		//check if upsquare exists ([0,4,8].indexOf(square[0])!=-1 //si true => square[0] vale 0,4 u 8)
  		//Check if upsquare is different than previousSquare
      if((previousBox[0]!=box[0])&&(previousBox[1]!=box[1])){
        //Up
        if(([0,4,8].indexOf(upBox[0])!=-1)){
    			boxes += getBoxesForDistance(upBox,box,d-1)
    		}

        //Down
        if([0,4,8].indexOf(downBox[0])!=-1){
    			boxes += getBoxesForDistance(downBox,box,d-1)
    		}

    		//Left
        if([0,4,8].indexOf(leftBox[0])!=-1){
    			boxes += getBoxesForDistance(leftBox,box,d-1)
    		}

    		//Right
        if([0,4,8].indexOf(rightBox[0])!=-1){
    			boxes += getBoxesForDistance(rightBox,box,d-1)
    		}
      }
  		//Filter array

  		return boxes;
  	} else {
  		//d===0
  		return [box];
  	}
  }

  render(){
    let x=this.getBoxesForDistance([0,0],{},3);
    console.log(x)
    let board = this.props.boxes.map((rowBoxes, rowIndex) => {
      let row = rowBoxes.map((box, columnIndex) => {
        let key = "" + rowIndex + columnIndex;
        return(
          <Box dispatch={this.props.dispatch} box={box} key={key} rowIndex={rowIndex} columnIndex={columnIndex} player={this.props.player}/>
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
