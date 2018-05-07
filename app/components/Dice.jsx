import React from 'react';
import {rollDice, resetDice} from './../reducers/actions';

export default class Dice extends React.Component {
  constructor(props){
    super(props);
  }
  onRollDice(){
    let number = Math.floor(Math.random()*6)+1;
    console.log(number);
    this.props.dispatch(rollDice(number));
  }

  render(){

    return(
      <div>
        <button onClick={this.onRollDice.bind(this)}>Tirar el dado</button>
        Valor del dado: {this.props.dice.number}
      </div>
    );
  }



}
