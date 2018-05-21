import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {setLives, objectiveAccomplishedThunk} from './../reducers/actions';

import MCQuestionTrivialChoice from './MCQuestionTrivialChoice.jsx';
import QuestionButtons from './QuestionButtons.jsx';

export default class MCQuestionTrivial extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_choice_id: -1,
      answered:false,
    };
  }

  handleChoiceChange(choice){
    if(choice.id !== this.state.selected_choice_id){
      this.setState({selected_choice_id:choice});
    }
  }

  onAnswerQuestion(){
    let nChoices = this.props.question.choices.length;
    let correctAnswer = false;

    for(let i = 0; i< nChoices; i++){
      let choice = this.props.question.choices[i];
      if((choice.answer === true) && (choice.id === this.state.selected_choice_id)){
        correctAnswer = true;
      }
    }
    if(!correctAnswer){
      this.props.dispatch(setLives(this.props.lives - 1));
    }
    this.setState({answered:true});
  }

  render(){
    let choices = [];
    let clickedAnswer = (this.state.selected_choice_id !== -1)
    for(let i = 0; i < this.props.question.choices.length; i++){
      choices.push(<MCQuestionTrivialChoice key={"MyQuestion_" + "question_choice_" + i} choice={this.props.question.choices[i]}  clickedAnswer={clickedAnswer} handleChange={this.handleChoiceChange.bind(this)} questionAnswered={this.state.answered}/>);
    }
    return(
      <div>
        <h1>{this.props.question.value}</h1>
        {choices}
      </div>
    );
  }


}
