import React from 'react';

export default class Scoreboard extends React.Component {

  constructor(props){
    super(props);
  }

  countCrownsInPossession(){
    let count = 0;
    if(!this.props.crowns.crown_history.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_movies.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_science.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_sports.onBoard){
      count++;
    }
    return count;
  }

  render(){
    let info = "";
    let crownsNumber = this.countCrownsInPossession();
    console.log(crownsNumber)
    return(
      <div>
        <div>Coronas conseguidas: {crownsNumber}</div>
        <div>Vidas restantes: {this.props.lives}</div>
      </div>
    );
  }
}
