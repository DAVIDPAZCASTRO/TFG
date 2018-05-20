import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';

import Board from './Board.jsx';
import Dice from './Dice.jsx';
import MCQuestionTrivial from './MCQuestionTrivial.jsx';

export default class Trivial extends React.Component {

  render(){
    <div className="quiz">
      <QuizHeader I18n={this.props.I18n} quiz={this.state.quiz} currentQuestionIndex={this.state.current_question_index}/>
      <Board dispatch={this.props.dispatch} boxes={this.state.boxes} player={this.props.player} movement={this.props.movement} dice={this.props.dice} game_status={this.props.game_status}/>
      <Dice dispatch={this.props.dispatch} dice={this.props.dice} game_status={this.props.game_status}/>
      
    </div>
  }

}
