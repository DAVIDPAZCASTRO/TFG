import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {setLives, objectiveAccomplishedThunk} from './../reducers/actions';

import MCQuestionTrivialChoice from './MCQuestionTrivialChoice.jsx';
import QuestionTrivialButtons from './QuestionTrivialButtons.jsx';

export default class MCQuestionTrivial extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_choice_id: -1,
      answered:false,
    };
  }

  componentWillUpdate(prevProps, prevState){
    if(prevProps.question !== this.props.question){
      this.setState({selected_choice_id: -1, answered:false});
      console.log("CHOICE_ID = " +this.state.selected_choice_id)
    }
  }

  handleChoiceChange(choice_id){
    let newSelectedChoiceId = Object.assign([], this.state.selected_choice_id);
    if(choice_id !== this.state.selected_choice_id){
      this.setState({selected_choice_id:choice_id});
    }
  }

  onAnswerQuestion(){
    let correctAnswer = false;
    if(this.state.selected_choice_id !== -1){
      let selectedChoice = this.props.question.choices[this.state.selected_choice_id];
      correctAnswer = (selectedChoice.answer === true);
    }else{
      //Blank answer, do nothing
    }

    this.setState({answered:true});
    if(!correctAnswer){
      this.props.dispatch(setLives(this.props.lives -1));
    }
  }

  onNextQuestion(){
    this.props.onNextQuestion();
  }

  render(){
    let choices = [];
    let clickedAnswer = (this.state.selected_choice_id !== -1)
    for(let i = 0; i < this.props.question.choices.length; i++){
      choices.push(<MCQuestionTrivialChoice key={"MyQuestion_" + "question_choice_" + i} choice={this.props.question.choices[i]} choice_id={i}  clickedAnswer={clickedAnswer} handleChange={this.handleChoiceChange.bind(this)} answered={this.state.answered}/>);
    }
    return(
      <div>
        <h1>{this.props.question.value}</h1>
        {choices}
        <QuestionTrivialButtons dispatch={this.props.dispatch} I18n={this.props.I18n} onAnswerQuestion={this.onAnswerQuestion.bind(this)} onNextQuestion={this.onNextQuestion.bind(this)} answered={this.state.answered} />
      </div>
    );
  }


}
