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
    let hearts = "";
    var i;
    for(i = 0; i < this.props.lives; i++){
      hearts += (
        <img src="assets/images/heart_red.png"/>
      );
    }
    let crownsNumber = this.countCrownsInPossession();
    console.log(hearts)
    return(
      <div>
        <div>Coronas conseguidas: {crownsNumber}</div>
        <div>{hearts}</div>
      </div>
    );
  }
}
