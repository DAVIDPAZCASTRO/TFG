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
    array.forEach(function(element) {
      //console.log(element, box)
      if((element[0] === box[0]) && (element[1] === box[1])){
        console.log(true)
        return true
      }
    });
    return false
  }

  render(){
    let category = "category";
    let text = "";
    console.log(this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex]))
    if(this.props.box === "0" || this.props.box === "1" || this.props.box === "2" || this.props.box === "3" ||this.props.box === "4"){
      category += this.props.box;
    }else{
      category += "_blank"
    }
    if((this.props.player.playerIn === true) && (this.props.player.position[0] === this.props.rowIndex) && (this.props.player.position[1] === this.props.columnIndex)){
      text = "player"
    } else if (this.isBoxInArray(this.props.pm, [this.props.rowIndex, this.props.columnIndex])) {
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
