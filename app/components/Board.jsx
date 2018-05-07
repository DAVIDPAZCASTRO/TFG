import React from 'react';

import './../assets/scss/board.scss';

import Box from './Box.jsx';

export default class Board extends React.Component {

  isDifferentBox(box1,box2){
    //console.log("comparamos cajas")
    if(typeof box1 == "undefined"){
      //console.log("box1 es undefined")
    }
    if(typeof box2 == "undefined"){
      //console.log("box2 es undefined")
    }
    if((typeof box1 !== "undefined") && (typeof box2 !== "undefined")){
      //console.log("las dos cajas son distintas a undefined")
      if((box1[0]!=box2[0])||(box1[1]!=box2[1])){
        //console.log("las cajas son diferentes")
        return true
      }
    }
    //console.log("las cajas son iguales o una de ellas es undefined, pasamos a otra cosa")
    return false
  }

  isInBoard(box){
    if(box[0]>8||box[0]<0||box[1]>8||box[1]<0){
      //console.log("La caja ["+box+"] no valida, se sale del tablero")
      //console.log("---------------------------")
      return false
    } else if (([0,4,8].indexOf(box[0])!=-1)||([0,4,8].indexOf(box[1])!=-1)) {
      //console.log("Caja ["+box+"] valida")
      return true
    } else {
      //console.log("La caja ["+box+"] no es válida")
      //console.log("---------------------------")
      return false
    }
  }

  getBoxesForDistance(box, previousBox=undefined, d){

    //console.log("comienza el método, faltan " + d +" iteraciones")
    var boxes = [];
    //console.log("estamos en "+box)
    //console.log("La caja anterior era ["+previousBox+"]")

    if(d > 0) {

      let upBox = [box[0]-1,box[1]];
      let downBox = [box[0]+1,box[1]];
      let leftBox = [box[0],box[1]-1];
      let rightBox = [box[0],box[1]+1];
      //console.log("arriba = ["+upBox+"]")
      //console.log("abajo = ["+downBox+"]")
      //console.log("izquierda = ["+leftBox+"]")
      //console.log("derecha = ["+rightBox+"]")

      //check if upsquare exists ([0,4,8].indexOf(square[0])!=-1 //si true => square[0] vale 0,4 u 8)
      //Check if upsquare is different than previousBox

      if((typeof previousBox == "undefined")||(this.isDifferentBox(previousBox,box))){
        //console.log("La caja es diferente a la anterior")
        //Up
        if(this.isInBoard(upBox)&&((typeof previousBox == "undefined")||(this.isDifferentBox(upBox,previousBox)))){
          //console.log("vamos pa arriba " + upBox)
          let aux = this.getBoxesForDistance(upBox,box,d-1);
          aux.forEach(function(element) {
              boxes.push(element);
          });
          //boxes.push(this.getBoxesForDistance(upBox,box,d-1))
          //console.log(boxes)
        }

        //Down
        if(this.isInBoard(downBox)&&((typeof previousBox == "undefined")||(this.isDifferentBox(downBox,previousBox)))){
          //console.log("vamos pa abajo "+ downBox)
          let aux = this.getBoxesForDistance(downBox,box,d-1);
          aux.forEach(function(element) {
              boxes.push(element);
          });
          //boxes.push(this.getBoxesForDistance(downBox,box,d-1))
          //console.log(boxes)
        }

        //Left
        if(this.isInBoard(leftBox)&&((typeof previousBox == "undefined")||(this.isDifferentBox(leftBox,previousBox)))){
          //console.log("vamos pa la izquierda "+ leftBox)
          let aux = this.getBoxesForDistance(leftBox,box,d-1);
          aux.forEach(function(element) {
              boxes.push(element);
          });
          //boxes.push(this.getBoxesForDistance(leftBox,box,d-1))
          //console.log(boxes)
        }

        //Right
        if(this.isInBoard(rightBox)&&((typeof previousBox == "undefined")||(this.isDifferentBox(rightBox,previousBox)))){
          //console.log("vamos pa la derecha "+ rightBox)
          let aux = this.getBoxesForDistance(rightBox,box,d-1);
          aux.forEach(function(element) {
              boxes.push(element);
          });
          //boxes.push(this.getBoxesForDistance(rightBox,box,d-1))
          //console.log(boxes)
        }
      }

      return boxes;
    } else {
      //d===0
      return [box];
    }
  }

  render(){
    let pm = this.getBoxesForDistance(this.props.player.position, undefined, this.props.dice)
    console.log(pm)
    let board = this.props.boxes.map((rowBoxes, rowIndex) => {
      let row = rowBoxes.map((box, columnIndex) => {
        let key = "" + rowIndex + columnIndex;
        return(
          <Box dispatch={this.props.dispatch} box={box} key={key} rowIndex={rowIndex} columnIndex={columnIndex} player={this.props.player} movement={this.props.movement} dice={this.props.dice} pm={pm}/>
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
