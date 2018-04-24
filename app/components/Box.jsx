import React from 'react';
import {setPosition} from './../reducers/actions';


export default class Box extends React.Component {
  onSetPosition(){
    let p = this.props.player;
    p.playerIn = true;
    p.position = [this.props.rowIndex, this.props.columnIndex];
    this.props.dispatch(setPosition(p));
    console.log(this.props.player)
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
    } else {
      text = this.props.box;
    }
    return(
        <button className={category} onClick={this.onSetPosition.bind(this)}>
          {text}
        </button>
    );
  }
}
