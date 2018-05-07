import React from 'react';
import {setPosition, setPossibleMovements} from './../reducers/actions';


export default class Box extends React.Component {

  onClickBox(){
    this.onSetPosition();
    this.onSetPossibleMovements(this.props.pm);

  }

  onSetPosition(){
    this.props.dispatch(setPosition(this.props.rowIndex, this.props.columnIndex));
  }

  onSetPossibleMovements(array){
    this.props.dispatch(setPossibleMovements(array));
  }

  isBoxInArray(array, box){
    let x;
    for (x=0;x<array.length;x++){
      if((array[x][0] === box[0]) && (array[x][1] === box[1])){
        //console.log(true)
        return true
      }
    }
    return false
  }

  render(){
    let category = "category";
    let text = "";
    if(this.props.box === "0" || this.props.box === "1" || this.props.box === "2" || this.props.box === "3" ||this.props.box === "4"){
      category += this.props.box;
    }else{
      category += "_blank"
    }
    if((this.props.player.playerIn === true) && (this.props.player.position[0] === this.props.rowIndex) && (this.props.player.position[1] === this.props.columnIndex)){
      text = "player"
      console.log(this.props.pm)
    } else if (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex])) {
      console.log("En la casilla ["+this.props.rowIndex+","+this.props.columnIndex+"] debería poner MOVE")
      text = "MOVE"
    } else {
      text = this.props.box;
    }
    return(
        <button className={category} onClick={this.onClickBox.bind(this)}>
          {text}
        </button>
    );
  }
}
