import React from 'react';
import {setPosition, setPossibleMovements, setGameStatus, isTimer} from './../reducers/actions';

export default class Box extends React.Component {
  constructor(props){
    super(props);
  }
  onClickBox(){
    if((this.props.game_status === "C") && (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex]))){
      this.onSetPosition();
      this.onSetPossibleMovements(this.props.pm);
      if(this.props.rowIndex === 4 && this.props.columnIndex === 4){
        // Cae en la casilla central, los lados se vuelven a lanzar
        this.props.dispatch(setGameStatus("B"));
      } else {
        this.props.dispatch(setGameStatus("D"));
        this.props.dispatch(isTimer(true));
      }
    }
  }

  onSetPosition(){
    this.props.dispatch(setPosition(this.props.rowIndex, this.props.columnIndex));
  }

  onSetPossibleMovements(array){
    this.props.dispatch(setPossibleMovements(array));
  }

  isBoxInArray(array, box){
    let x;
    for(x = 0; x < array.length; x++){
      if((array[x][0] === box[0]) && (array[x][1] === box[1])){
        return true;
      }
    }
    return false;
  }

  render(){
    let category = "category category";
    let text = "";

    if(this.props.box === "0" || this.props.box === "1" || this.props.box === "2" || this.props.box === "3" || this.props.box === "4"){
      category += this.props.box;
    } else {
      category = "category_blank";
    }
    if((this.props.player_position[0] === this.props.rowIndex) && (this.props.player_position[1] === this.props.columnIndex)){
      text = (
        <img className="playerImage" src="assets/images/player.png"/>
      );
      // console.log(this.props.pm)
    } else if((this.props.game_status === "C") && (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex]))){
      // console.log("En la casilla ["+this.props.rowIndex+","+this.props.columnIndex+"] debería poner MOVE")
      category += " clickable";
      text = (
        <img className="playerImage" src="assets/images/movements.png"/>
      );
    } else if(((this.props.rowIndex === this.props.crowns.crown_yellow.position[0]) && (this.props.columnIndex === this.props.crowns.crown_yellow.position[1]) && (this.props.crowns.crown_yellow.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_blue.position[0]) && (this.props.columnIndex === this.props.crowns.crown_blue.position[1]) && (this.props.crowns.crown_blue.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_green.position[0]) && (this.props.columnIndex === this.props.crowns.crown_green.position[1]) && (this.props.crowns.crown_green.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_red.position[0]) && (this.props.columnIndex === this.props.crowns.crown_red.position[1]) && (this.props.crowns.crown_red.onBoard === true))){
      text = (
        <img className="playerImage" src="assets/images/crown.png"/>
      );
    } else {
      text = this.props.box;
    }
    return (
        <div className={category} onClick={this.onClickBox.bind(this)}>
          {text}
        </div>
    );
  }
}