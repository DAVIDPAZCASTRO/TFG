import React from 'react';

export default class Scoreboard extends React.Component {

  constructor(props){
    super(props);
  }


  heartsRender(){
    let hearts = [];

    for (let i = 0; i< this.props.lives; i++) {
      hearts.push(
        <div key={i} className="hearts">
          <img src="assets/images/heart_red.png"/>
        </div>
      );
    }
    return hearts;
  }

  crownsRender(){
    let crowns = [];
    let numberCrowns = this.props.countCrowns();
    console.log("Coronas en posesion "+ numberCrowns)
    for (let i = 0; i< numberCrowns; i++) {
      crowns.push(
        <div key={i} className="crowns">
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
        <div className="heartImages">Vidas: {this.heartsRender()}</div>
        <div>Coronas conseguidas: {this.crownsRender()}</div>
      </div>
    );
  }
}
