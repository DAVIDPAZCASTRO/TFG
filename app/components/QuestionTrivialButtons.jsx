import React from 'react';

import {setGameStatus, isTimer} from './../reducers/actions';

export default class QuestionTrivialButtons extends React.Component {
  constructor(props){
    super(props);
  }

  onClickAnswer(){
    this.props.dispatch(isTimer(false));
    this.props.onAnswerQuestion();
  }

  onClickContinue(){
    // Hacer que el juego termine si se ha contestado todo bien o si se acaban las vidas
    if(this.props.lives === 0){
      alert("Has perdido todas las vidas, se acabó el juego");
      this.props.dispatch(setGameStatus("E"));
    } else if(this.props.countCrowns() === 4){
      alert("¡Has ganado!¡Has conseguido todas las coronas!");
      this.props.dispatch(setGameStatus("F"));
    } else {
      this.props.onNextQuestion();
      this.props.dispatch(setGameStatus("B"));
    }
  }

  render(){
    // console.log("las coronas que tenemos son: "+this.props.countCrowns())
    let disable_answer = (this.props.answered);
    let disable_continue = (!this.props.answered);

    return (
      <div className="center_screen questionButtonsWrapper">
        <button className="answerQuestion" onClick={this.onClickAnswer.bind(this)} disabled={disable_answer}>{this.props.I18n.getTrans("i.answer")}</button>
        <button className="continueTrivial" onClick={this.onClickContinue.bind(this)} disabled={disable_continue}>{this.props.I18n.getTrans("i.continue")}</button>
      </div>
    );
  }
}