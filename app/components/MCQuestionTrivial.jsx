import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk, setLives, setCrownYellow, setCrownBlue, setCrownGreen, setCrownRed, setAnswered, setSelectedChoice, setObjectivesPointer} from './../reducers/actions';
import {GLOBAL_CONFIG} from '../config/config.js';

import Timer from './Timer.jsx';
import MCQuestionTrivialChoice from './MCQuestionTrivialChoice.jsx';
import QuestionTrivialButtons from './QuestionTrivialButtons.jsx';

export default class MCQuestionTrivial extends React.Component {

  constructor(props){
    super(props);
    // this.props.dispatch(setSelectedChoice(-1));
    this.props.dispatch(setAnswered(!this.props.timer.isTimer));
  }

  componentWillUpdate(prevProps, prevState){
    if(prevProps.question !== this.props.question){
      // this.setState({selected_choice_id:-1});
      // this.props.dispatch(setSelectedChoice(-1));
      this.props.dispatch(setAnswered(false));
    }
  }

  handleChoiceChange(choice_id){
    if(this.props.answered === true){
      return;
    }
    if(choice_id !== this.props.selected_choice){
      // this.setState({selected_choice_id:choice_id});
      this.props.dispatch(setSelectedChoice(choice_id));
      // console.log(choice_id);
    }
  }

  showAlert(msg){
    setTimeout(function(){
      alert(msg);
    }, 200);
  }

  onAnswerQuestion(){
    let correctAnswer = false;
    let objectivesArray = this.props.objectivesArray;
    let textAlert = "";
    if(this.props.selected_choice !== -1){
      let selectedChoice = this.props.question.choices[this.props.selected_choice];
      correctAnswer = (selectedChoice.answer === true);
    } else {
      // Blank answer, do nothing
    }
    if(this.props.timer.seconds === 0){
      textAlert = "Se ha acabado el tiempo. ";
    }
    this.props.dispatch(setAnswered(true));
    if(correctAnswer){
      if(this.props.crowns.crown_yellow.position[0] === this.props.player_position[0] && this.props.crowns.crown_yellow.position[1] === this.props.player_position[1] && this.props.crowns.crown_yellow.onBoard === true){
        // this.props.dispatch(setCrownYellow(false));
        // this.props.dispatch(objectiveAccomplished(objectiveHistory.id, objectiveHistory.score));

        // Modificamos los objetivos para que se completen totalmente si conseguimos la siguiente corona (antes de modificar el número de coronas que poseemos).
        for(let x = 0; x < 5; x++){
          // console.log("El número de coronas es de " + this.props.countCrowns());
          // console.log(objectivesArray[this.props.countCrowns()][x]);
          this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][x].id, objectivesArray[this.props.countCrowns()][x].score));
        }
        this.props.dispatch(setCrownYellow(false));
        // console.log("El número de coronas es de " + this.props.countCrowns());
        this.props.dispatch(setObjectivesPointer([this.props.countCrowns(), 0]));

        this.showAlert(textAlert + "¡Enhorabuena! ¡Has conseguido la corona de " + (GLOBAL_CONFIG.categories[0].name).toUpperCase() + "!");
      } else if(this.props.crowns.crown_blue.position[0] === this.props.player_position[0] && this.props.crowns.crown_blue.position[1] === this.props.player_position[1] && this.props.crowns.crown_blue.onBoard === true){
        // this.props.dispatch(setCrownBlue(false));
        // this.props.dispatch(objectiveAccomplished(objectiveMovies.id, objectiveMovies.score));

        // Modificamos los objetivos para que se completen totalmente si conseguimos la siguiente corona (antes de modificar el número de coronas que poseemos).
        for(let x = 0; x < 5; x++){
          // console.log("El número de coronas es de " + this.props.countCrowns());
          // console.log(objectivesArray[this.props.countCrowns()][x]);
          this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][x].id, objectivesArray[this.props.countCrowns()][x].score));
        }
        this.props.dispatch(setCrownBlue(false));
        // console.log("El número de coronas es de " + this.props.countCrowns());
        this.props.dispatch(setObjectivesPointer([this.props.countCrowns(), 0]));

        this.showAlert(textAlert + "¡Enhorabuena! ¡Has conseguido la corona de " + (GLOBAL_CONFIG.categories[1].name).toUpperCase() + "!");
      } else if(this.props.crowns.crown_green.position[0] === this.props.player_position[0] && this.props.crowns.crown_green.position[1] === this.props.player_position[1] && this.props.crowns.crown_green.onBoard === true){
        // this.props.dispatch(setCrownGreen(false));
        // this.props.dispatch(objectiveAccomplished(objectiveScience.id, objectiveScience.score));

        // Modificamos los objetivos para que se completen totalmente si conseguimos la siguiente corona (antes de modificar el número de coronas que poseemos).
        for(let x = 0; x < 5; x++){
          // console.log("El número de coronas es de " + this.props.countCrowns());
          // console.log(objectivesArray[this.props.countCrowns()][x]);
          this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][x].id, objectivesArray[this.props.countCrowns()][x].score));
        }
        this.props.dispatch(setCrownGreen(false));
        // console.log("El número de coronas es de " + this.props.countCrowns());
        this.props.dispatch(setObjectivesPointer([this.props.countCrowns(), 0]));

        this.showAlert(textAlert + "¡Enhorabuena! ¡Has conseguido la corona de " + (GLOBAL_CONFIG.categories[2].name).toUpperCase() + "!");
      } else if(this.props.crowns.crown_red.position[0] === this.props.player_position[0] && this.props.crowns.crown_red.position[1] === this.props.player_position[1] && this.props.crowns.crown_red.onBoard === true){
        // this.props.dispatch(setCrownRed(false));
        // this.props.dispatch(objectiveAccomplished(objectiveSports.id, objectiveSports.score));

        // Modificamos los objetivos para que se completen totalmente si conseguimos la siguiente corona (antes de modificar el número de coronas que poseemos).
        for(let x = 0; x < 5; x++){
          // console.log("El número de coronas es de " + this.props.countCrowns());
          // console.log(objectivesArray[this.props.countCrowns()][x]);
          this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][x].id, objectivesArray[this.props.countCrowns()][x].score));
        }
        this.props.dispatch(setCrownRed(false));
        // console.log("El número de coronas es de " + this.props.countCrowns());
        this.props.dispatch(setObjectivesPointer([this.props.countCrowns(), 0]));

        this.showAlert(textAlert + "¡Enhorabuena! ¡Has conseguido la corona de " + (GLOBAL_CONFIG.categories[3].name).toUpperCase() + "!");
      } else if(this.props.objectives_pointer[1] < 4){
        this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][this.props.objectives_pointer[1]].id, objectivesArray[this.props.countCrowns()][this.props.objectives_pointer[1]].score));
        this.props.dispatch(setObjectivesPointer([this.props.objectives_pointer[0], this.props.objectives_pointer[1] + 1]));
      }
    } else if(this.props.selected_choice === -1){
      this.props.dispatch(setLives(this.props.lives - 1));
      if(this.props.objectives_pointer[1] < 4){
        this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][this.props.objectives_pointer[1]].id, 0));
        this.props.dispatch(setObjectivesPointer([this.props.objectives_pointer[0], this.props.objectives_pointer[1] + 1]));
      }
      this.showAlert(textAlert + "No has fijado una respuesta, pierdes una vida");
    } else {
      this.props.dispatch(setLives(this.props.lives - 1));
      if(this.props.objectives_pointer[1] < 4){
        this.props.dispatch(objectiveAccomplished(objectivesArray[this.props.countCrowns()][this.props.objectives_pointer[1]].id, 0));
        this.props.dispatch(setObjectivesPointer([this.props.objectives_pointer[0], this.props.objectives_pointer[1] + 1]));
      }
      this.showAlert(textAlert + "Has fallado la pregunta, pierdes una vida");
    }
  }

  onNextQuestion(){
    this.props.onNextQuestion();
  }

  render(){
    // console.log(this.props.objectivesArray);
    // console.log(this.props.objectives_pointer);
    // console.log("Selected_choice = " + this.props.selected_choice)
    let choices = [];
    let clickedAnswer = (this.props.selected_choice !== -1);
    for(let i = 0; i < this.props.question.choices.length; i++){
      choices.push(<MCQuestionTrivialChoice key={"MyQuestion_" + "question_choice_" + i} checked={this.props.selected_choice === i} choice={this.props.question.choices[i]} choice_id={i} selectedChoiceId={this.props.selected_choice} clickedAnswer={clickedAnswer} handleChange={this.handleChoiceChange.bind(this)} answered={this.props.answered}/>);
    }
    return (
      <div className="question center_screen">
        <div className="questionplustimer">
          <div className="questiontext">
            <h1>{this.props.question.value}</h1>
          </div>
          <div className="timer">
            <Timer timer={this.props.timer} dispatch={this.props.dispatch} onAnswerQuestion={this.onAnswerQuestion.bind(this)}/>
          </div>
        </div>
        {choices}
        <QuestionTrivialButtons dispatch={this.props.dispatch} I18n={this.props.I18n} onAnswerQuestion={this.onAnswerQuestion.bind(this)} onNextQuestion={this.onNextQuestion.bind(this)} answered={this.props.answered} countCrowns={this.props.countCrowns} lives={this.props.lives}/>
      </div>
    );
  }
}