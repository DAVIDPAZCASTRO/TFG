import React from 'react';

import {INITIAL_STATE} from '../constants/constants';

export default class Scoreboard extends React.Component {

  constructor(props){
    super(props);
  }

  // Maximum number of hearts = 7
  heartsRender(){
    let hearts = [];
    let initialLives = INITIAL_STATE.lives;
    let numberLives = this.props.lives;
    for(let i = 0; i < initialLives; i++){
      if(i < numberLives){
        hearts.push(
          <div key={i} className="hearts">
            <img src="assets/images/heart_red.png"/>
          </div>
        );
      } else {
        hearts.push(
          <div key={i} className="hearts"/>
        );
      }
    }
    return hearts;
  }

  crownsRender(){
    let crowns = [];
    let numberCrowns = this.props.countCrowns();
    // console.log("Coronas en posesion "+ numberCrowns)
    for(let i = 0; i < numberCrowns; i++){
      crowns.push(
        <div key={i} className="crowns">
          <img src="assets/images/crown.png"/>
        </div>
      );
    }
    for(let i = numberCrowns; i < 4; i++){
      crowns.push(
        <div key={i} className="hearts"/>
      );
    }
    return crowns;
  }

  render(){
    let info = "";

    return (
      <div className="scoreboard">
        <div className="scoreboardlives">
          <p>VIDAS</p>
          <div className="heartsrow">{this.heartsRender()}</div>
        </div>
        <div className="scoreboardcrowns">
          <p>CORONAS</p>
          <div className="crownsrow">{this.crownsRender()}</div>
        </div>
      </div>
    );
  }
}