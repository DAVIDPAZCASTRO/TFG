import React from 'react';

export default class Scoreboard extends React.Component {

  constructor(props){
    super(props);
  }

  countCrowns(){
    this.props.countCrowns();
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
    return hearts;
  }

  crownsRender(){
    let crowns = [];
    let numberCrowns = this.countCrowns.bind(this);
    console.log("Coronas en posesion "+ numberCrowns)
    for (let i = 0; i< numberCrowns; i++) {
      crowns.push(
        <div className="crowns">
          <img src="assets/images/crown.png"/>
        </div>
      );
    }
    return crowns;
  }

  render(){
    let info = "";


    // var i;
    // for(i = 0; i < ; i++){
    //   heart += " <img src="assets/images/heart_red.png"/>"
    //
    // }
    return(
      <div className="scoreboard">
        <div>Coronas conseguidas: {this.crownsRender()}</div>
        <div className="heartImages">Vidas: {this.heartsRender()}</div>
      </div>
    );
  }
}
