import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, resetDice, finishApp} from './../reducers/actions';

import QuizHeader from './QuizHeader.jsx';
import Board from './Board.jsx';
import Dice from './Dice.jsx';
import Scoreboard from './Scoreboard.jsx';
import MCQuestionTrivial from './MCQuestionTrivial.jsx';

export default class Trivial extends React.Component {
  constructor(props){
    super(props);
    let trivial = this.props.trivial;
    //let questions = trivial.questions;
    this.state = {
      trivial:trivial,
      current_question_index:1,
      boxes: [
        ['1','3','2','4','3','1','4','3','2'],
        ['2','o','o','o','2','o','o','o','4'],
        ['3','o','o','o','1','o','o','o','3'],
        ['4','o','o','o','4','o','o','o','1'],
        ['2','1','4','3','0','1','2','3','4'],
        ['3','o','o','o','2','o','o','o','2'],
        ['1','o','o','o','3','o','o','o','1'],
        ['2','o','o','o','4','o','o','o','4'],
        ['4','1','2','3','1','2','4','1','3'],
      ],
    };

  }
  onNextQuestion(){
    let isLastQuestion = (this.state.current_question_index === this.state.trivial.questions.length);
    if (isLastQuestion === false){
      this.setState({current_question_index:(this.state.current_question_index + 1)});
    }
  }
  onResetTrivial(){
    this.setState({current_question_index:1});
    //this.props.dispatch(resetDice());
  }
  render(){
    let currentQuestion = this.state.trivial.questions[this.state.current_question_index - 1];
    let isLastQuestion = (this.state.current_question_index === this.state.trivial.questions.length);
    let onNextQuestion = this.onNextQuestion.bind(this);
    let onResetTrivial = this.onResetTrivial.bind(this);
    let currentQuestionRender = "";

    if(currentQuestion.type !== "multiple_choice"){
      console.log(currentQuestion.choices.length)
      currentQuestionRender = "Tipo de pregunta no soportada: solo se soportan las preguntas del tipo 'multiple_choice'";
    }else{
      let counter = 0;
      for (let i=0; i<currentQuestion.choices.length; i++){
        console.log("La respuesta a la eleccion"+i+"es"+currentQuestion.choices[i].answer)
        if(currentQuestion.choices[i].answer === true){
          counter++
        }
      }
      console.log("El valor del contador es "+counter)
      if (counter != 1){
        currentQuestionRender = "Tipo de pregunta no soportada: las preguntas deben tener una única respuesta"
      } else {
      currentQuestionRender = (<MCQuestionTrivial question={currentQuestion} dispatch={this.props.dispatch} I18n={this.props.I18n} onNextQuestion={onNextQuestion} onResetTrivial={onResetTrivial} isLastQuestion={isLastQuestion}/>);
      }
    }
    return(
      <div className="trivial">
        <Scoreboard dispatch={this.props.dispatch} lives={this.props.lives} crowns={this.props.crowns} game_status={this.props.game_status}/>
        <Board dispatch={this.props.dispatch} boxes={this.state.boxes} player={this.props.player} movement={this.props.movement} dice={this.props.dice} game_status={this.props.game_status}/>
        <Dice dispatch={this.props.dispatch} dice={this.props.dice} game_status={this.props.game_status}/>
        {currentQuestionRender}
      </div>
    );
  }

}
