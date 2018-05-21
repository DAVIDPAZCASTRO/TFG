import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk} from './../reducers/actions';

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
      if((this.state.) && (choice.answer === true) && (choice)){

      }
    }
  }


}
