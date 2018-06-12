import React from 'react';
import {setPosition, setPossibleMovements, setGameStatus} from './../reducers/actions';


export default class Box extends React.Component {
  constructor(props){
    super(props);
  }
  onClickBox(){
    if((this.props.game_status=== "C") && (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex]))){
      this.onSetPosition();
      this.onSetPossibleMovements(this.props.pm);
      if(this.props.rowIndex === 4 && this.props.columnIndex === 4){
        //Cae en la casilla central, los lados se vuelven a lanzar
        this.props.dispatch(setGameStatus("B"));
      } else {
        this.props.dispatch(setGameStatus("D"));
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
    for (x=0;x<array.length;x++){
      if((array[x][0] === box[0]) && (array[x][1] === box[1])){
        return true
      }
    }
    return false
  }

  render(){
    let category = "category category";
    let text = "";

    if(this.props.box === "0" || this.props.box === "1" || this.props.box === "2" || this.props.box === "3" ||this.props.box === "4"){
      category += this.props.box;
    }else{
      category += "_blank";
    }
    if((this.props.player.playerIn === true) && (this.props.player.position[0] === this.props.rowIndex) && (this.props.player.position[1] === this.props.columnIndex)){
      text = (
        <img className="playerImage" src="assets/images/player.png"/>
      );
      console.log(this.props.pm)
    } else if ((this.props.game_status === "C") && (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex]))) {
      console.log("En la casilla ["+this.props.rowIndex+","+this.props.columnIndex+"] debería poner MOVE")
      category += " clickable";
      text = (
        <img className="playerImage" src="assets/images/movements.png"/>
      );
    } else if(((this.props.rowIndex === this.props.crowns.crown_history.position[0]) && (this.props.columnIndex === this.props.crowns.crown_history.position[1]) && (this.props.crowns.crown_history.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_movies.position[0]) && (this.props.columnIndex === this.props.crowns.crown_movies.position[1]) && (this.props.crowns.crown_movies.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_science.position[0]) && (this.props.columnIndex === this.props.crowns.crown_science.position[1]) && (this.props.crowns.crown_science.onBoard === true)) || ((this.props.rowIndex === this.props.crowns.crown_sports.position[0]) && (this.props.columnIndex === this.props.crowns.crown_sports.position[1]) && (this.props.crowns.crown_sports.onBoard === true))) {
      text = (
        <img className="playerImage" src="assets/images/crown.png"/>
      );
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
