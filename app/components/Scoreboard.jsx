import React from 'react';

export default class Scoreboard extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <div>Coronas conseguidas: {this.props.crowns}</div>
        <div>Vidas restantes: {this.props.lives}</div>
      </div>
    );
  }
}
