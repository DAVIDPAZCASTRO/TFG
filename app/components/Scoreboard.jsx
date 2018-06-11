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

  heartsRender(){
    let hearts = [];

    for (let i = 0; i< this.props.lives; i++) {
      hearts.push(
        <div className="hearts">
          <img src="assets/images/heart_red.png"/>
        </div>
      );
    }
    return hearts
  }

  render(){
    let info = "";


    // var i;
    // for(i = 0; i < ; i++){
    //   heart += " <img src="assets/images/heart_red.png"/>"
    //
    // }
    let crownsNumber = this.countCrownsInPossession();
    return(
      <div>
        <div>Coronas conseguidas: {crownsNumber}</div>
        <div className="heartImages">Vidas: {this.heartsRender()}</div>
      </div>
    );
  }
}
