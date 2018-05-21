import React from 'react';
import {rollDice, resetDice, setGameStatus} from './../reducers/actions';

export default class Dice extends React.Component {

  constructor(props){
    super(props);
  }

  onClickDie(){
    this.onRollDice();
    this.props.dispatch(setGameStatus("C"));
  }

  onRollDice(){
    let number = Math.floor(Math.random()*6)+1;
    console.log(number);
    this.props.dispatch(rollDice(number));
  }

  render(){
    let die = "";
    if (this.props.game_status === "B"){
      die = (
        <button onClick={this.onClickDie.bind(this)}>Tirar el dado</button>
      );
    }
    return(
      <div>
        {die}
        <div>Valor del dado: {this.props.dice.number}</div>
      </div>
    );
  }

}
