import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk, setLives, setCrownHistory, setCrownMovies, setCrownScience, setCrownSports} from './../reducers/actions';

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
      //console.log("CHOICE_ID = " +this.state.selected_choice_id)
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
    let objectiveHistory = this.props.objectiveHistory;
    let objectiveMovies = this.props.objectiveMovies;
    let objectiveSports = this.props.objectiveSports;
    let objectiveScience = this.props.objectiveScience;
    if(this.state.selected_choice_id !== -1){
      let selectedChoice = this.props.question.choices[this.state.selected_choice_id];
      correctAnswer = (selectedChoice.answer === true);
    }else{
      //Blank answer, do nothing
    }

    this.setState({answered:true});
    if(correctAnswer){
      if(this.props.crowns.crown_history.position[0] === this.props.player_position[0] && this.props.crowns.crown_history.position[1] === this.props.player_position[1] && this.props.crowns.crown_history.onBoard === true){
        this.props.dispatch(setCrownHistory(false));
        this.props.dispatch(objectiveAccomplished(objectiveHistory.id, objectiveHistory.score));

        alert("¡Enhorabuena!¡Has conseguido la corona de HISTORIA!");
      }
      if(this.props.crowns.crown_movies.position[0] === this.props.player_position[0] && this.props.crowns.crown_movies.position[1] === this.props.player_position[1] && this.props.crowns.crown_movies.onBoard === true){
        this.props.dispatch(setCrownMovies(false));
        this.props.dispatch(objectiveAccomplished(objectiveMovies.id, objectiveMovies.score));

        alert("¡Enhorabuena!¡Has conseguido la corona de CINE!");
      }
      if(this.props.crowns.crown_science.position[0] === this.props.player_position[0] && this.props.crowns.crown_science.position[1] === this.props.player_position[1] && this.props.crowns.crown_science.onBoard === true){
        this.props.dispatch(setCrownScience(false));
        this.props.dispatch(objectiveAccomplished(objectiveScience.id, objectiveScience.score));

        alert("¡Enhorabuena!¡Has conseguido la corona de CIENCIA!");
      }
      if(this.props.crowns.crown_sports.position[0] === this.props.player_position[0] && this.props.crowns.crown_sports.position[1] === this.props.player_position[1] && this.props.crowns.crown_sports.onBoard === true){
        this.props.dispatch(setCrownSports(false));
        this.props.dispatch(objectiveAccomplished(objectiveSports.id, objectiveSports.score));

        alert("¡Enhorabuena!¡Has conseguido la corona de DEPORTE!");
      }
    } else if(this.state.selected_choice_id === -1){
      this.props.dispatch(setLives(this.props.lives -1));
      alert("No has fijado una respuesta, pierdes una vida");
    } else {
      this.props.dispatch(setLives(this.props.lives -1));
      alert("Oh, has fallado la pregunta, pierdes una vida");
    }
  }

  onNextQuestion(){
    this.props.onNextQuestion();
  }



  render(){
    let choices = [];
    let clickedAnswer = (this.state.selected_choice_id !== -1)
    for(let i = 0; i < this.props.question.choices.length; i++){
      choices.push(<MCQuestionTrivialChoice key={"MyQuestion_" + "question_choice_" + i} choice={this.props.question.choices[i]} choice_id={i} selectedChoiceId={this.state.selected_choice_id}  clickedAnswer={clickedAnswer} handleChange={this.handleChoiceChange.bind(this)} answered={this.state.answered}/>);
    }
    return(
      <div className="question center_screen">
        <h1>{this.props.question.value}</h1>
        {choices}
        <QuestionTrivialButtons dispatch={this.props.dispatch} I18n={this.props.I18n} onAnswerQuestion={this.onAnswerQuestion.bind(this)} onNextQuestion={this.onNextQuestion.bind(this)} answered={this.state.answered} countCrowns={this.props.countCrowns} lives={this.props.lives}/>
      </div>
    );
  }


}
