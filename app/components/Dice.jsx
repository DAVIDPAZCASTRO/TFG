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
    let imageDie = "";
    let imageUrlDie = "";


    switch(this.props.dice.number) {
      case 0:
        imageUrlDie = "assets/images/die0.png";
        break;
      case 1:
        imageUrlDie = "assets/images/die1.png";
        break;
      case 2:
        imageUrlDie = "assets/images/die2.png";
        break;
      case 3:
        imageUrlDie = "assets/images/die3.png";
        break;
      case 4:
        imageUrlDie = "assets/images/die4.png";
        break;
      case 5:
        imageUrlDie = "assets/images/die5.png";
        break;
      case 6:
        imageUrlDie = "assets/images/die6.png";
        break;
      default:
        break;
    }

    if(imageUrlDie !== ""){
      imageDie = (
        <div className="imageDie">
          <img src={imageUrlDie}/>
        </div>
      );
    }

    if (this.props.game_status === "B"){
      die = (
        <div>
          <button onClick={this.onClickDie.bind(this)}>Tirar el dado</button>
          <div className="imageDie">
            <img src="assets/images/die0.png"/>
          </div>
        </div>
      );
    }
    if (this.props.game_status === "C") {
      die = (
        <div>
          <div>Valor del dado: {this.props.dice.number}</div>
          {imageDie}
        </div>
      );
    }
    return(
      <div>
        {die}
      </div>
    );
  }

}
