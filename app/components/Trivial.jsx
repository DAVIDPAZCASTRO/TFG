import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, resetObjectives, resetDice, finishApp} from './../reducers/actions';
import {GLOBAL_CONFIG} from '../config/config.js';

import QuizHeader from './QuizHeader.jsx';
import Board from './Board.jsx';
import Legend from './Legend.jsx';
import Timer from './Timer.jsx';
import Dice from './Dice.jsx';
import Scoreboard from './Scoreboard.jsx';
import MCQuestionTrivial from './MCQuestionTrivial.jsx';


export default class Trivial extends React.Component {
  constructor(props){
    super(props);
    let trivial = this.props.trivial;
    let questions = this.props.questions;
    this.state = {
      trivial:trivial,
      questions:questions,
      current_question_index:1,
      history_question_index:1,
      science_question_index:1,
      sports_question_index:1,
      movies_question_index:1,
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
    this.state.trivial.questions = Utils.shuffleArray(trivial.questions);
    this.state.questions.jsonHistory.questions = Utils.shuffleArray(questions.jsonHistory.questions);
    this.state.questions.jsonSports.questions = Utils.shuffleArray(questions.jsonSports.questions);
    this.state.questions.jsonScience.questions = Utils.shuffleArray(questions.jsonScience.questions);
    this.state.questions.jsonMovies.questions = Utils.shuffleArray(questions.jsonMovies.questions);

  }
  componentDidMount(){


    let objectives = [];

    objectives.push(new Utils.Objective({id:("Corona de " + {(GLOBAL_CONFIG.categories[0].name).toUpperCase()}), progress_measure:(1 / 4), score:(1 / 4)}));
    objectives.push(new Utils.Objective({id:("Corona de " + {(GLOBAL_CONFIG.categories[1].name).toUpperCase()}), progress_measure:(1 / 4), score:(1 / 4)}));
    objectives.push(new Utils.Objective({id:("Corona de " + {(GLOBAL_CONFIG.categories[3].name).toUpperCase()}), progress_measure:(1 / 4), score:(1 / 4)}));
    objectives.push(new Utils.Objective({id:("Corona de " + {(GLOBAL_CONFIG.categories[2].name).toUpperCase()}), progress_measure:(1 / 4), score:(1 / 4)}));

    this.props.dispatch(addObjectives(objectives));
  }

  countCrownsInPossession(){
    let count = 0;
    if(!this.props.crowns.crown_history.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_movies.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_science.onBoard){
      count++;
    }
    if(!this.props.crowns.crown_sports.onBoard){
      count++;
    }
    return count;
  }

  onNextQuestion(){
    //se desplaza el array de la categoría en la que se encuentra el jugador, el resto de arrays no se mueven
    let player_position_category = this.state.boxes[this.props.player_position[0]][this.props.player_position[1]];
    console.log("categoría numero "+player_position_category)
    switch(player_position_category) {
      case "1":
        //cine
        let isLastQuestionMovies = (this.state.movies_question_index === this.state.questions.jsonMovies.questions.length);
        if (isLastQuestionMovies === false){
          this.setState({movies_question_index:(this.state.movies_question_index + 1)});
        } else {
          this.setState({movies_question_index: 1});
        }
        break;
      case "2":
        //deporte
        let isLastQuestionSports = (this.state.sports_question_index === this.state.questions.jsonSports.questions.length);
        if (isLastQuestionSports === false){
          this.setState({sports_question_index:(this.state.sports_question_index + 1)});
        } else {
          this.setState({sports_question_index: 1});
        }
        break;
      case "3":
        //historia
        let isLastQuestionHistory = (this.state.history_question_index === this.state.questions.jsonHistory.questions.length);
        if (isLastQuestionHistory === false){
          this.setState({history_question_index:(this.state.history_question_index + 1)});
        } else {
          this.setState({history_question_index: 1});
        }
        break;
      case "4":
        //ciencia
        let isLastQuestionScience = (this.state.science_question_index === this.state.questions.jsonScience.questions.length);
        if (isLastQuestionScience === false){
          this.setState({science_question_index:(this.state.science_question_index + 1)});
        } else {
          this.setState({science_question_index: 1});
        }
        break;
      default:
        let isLastQuestion = (this.state.current_question_index === this.state.trivial.questions.length);
        if (isLastQuestion === false){
          this.setState({current_question_index:(this.state.current_question_index + 1)});
        } else {
          this.setState({current_question_index: 1});
        }
        break;
    }


  }
  onResetTrivial(){
    this.setState({current_question_index:1});
    this.props.dispatch(resetObjectives());
  }
  render(){

    let player_position_category = this.state.boxes[this.props.player_position[0]][this.props.player_position[1]];
    let currentQuestion = "";
    let questionCategoryText = "";
    console.log(player_position_category)
    switch(player_position_category) {
      case "1":
        //cine
        console.log("entra en cine")
        currentQuestion = this.state.questions.jsonMovies.questions[this.state.movies_question_index - 1];
        questionCategoryText = (
          <div className="questioncategorytext center_screen">
            PREGUNTA DE <a className="cine">{(GLOBAL_CONFIG.categories[1].name).toUpperCase()}</a>
          </div>
        );
        break;
      case "2":
        //deporte
        console.log("entra en deporte")
        currentQuestion = this.state.questions.jsonSports.questions[this.state.sports_question_index - 1];
        questionCategoryText = (
          <div className="questioncategorytext center_screen">
            PREGUNTA DE <a className="deportes">{(GLOBAL_CONFIG.categories[3].name).toUpperCase()}</a>
          </div>
        );
        break;
      case "3":
        //historia
        console.log("entra en historia")
        currentQuestion = this.state.questions.jsonHistory.questions[this.state.history_question_index - 1];
        questionCategoryText = (
          <div className="questioncategorytext center_screen">
            PREGUNTA DE <a className="historia">{(GLOBAL_CONFIG.categories[0].name).toUpperCase()}</a>
          </div>
        );
        break;
      case "4":
        //ciencia
        console.log("entra en ciencia")
        currentQuestion = this.state.questions.jsonScience.questions[this.state.science_question_index - 1];
        questionCategoryText = (
          <div className="questioncategorytext">
            PREGUNTA DE <a className="ciencia">{(GLOBAL_CONFIG.categories[2].name).toUpperCase()}</a>
          </div>
        );
        break;
      default:
        currentQuestion = this.state.trivial.questions[this.state.current_question_index - 1];
        break;
    }



    let objectiveHistory = this.props.tracking.objectives["Corona de " + {(GLOBAL_CONFIG.categories[0].name).toUpperCase()}];
    let objectiveMovies = this.props.tracking.objectives["Corona de " + {(GLOBAL_CONFIG.categories[1].name).toUpperCase()}];
    let objectiveSports = this.props.tracking.objectives["Corona de " + {(GLOBAL_CONFIG.categories[3].name).toUpperCase()}];
    let objectiveScience = this.props.tracking.objectives["Corona de " + {(GLOBAL_CONFIG.categories[2].name).toUpperCase()}];

    let onNextQuestion = this.onNextQuestion.bind(this);
    let onResetTrivial = this.onResetTrivial.bind(this);
    let currentQuestionRender = "";

    if(currentQuestion.type !== "multiple_choice"){
      //console.log(currentQuestion.choices.length)
      currentQuestionRender = "Tipo de pregunta no soportada: solo se soportan las preguntas del tipo 'multiple_choice'";
    }else{
      let counter = 0;
      for (let i=0; i<currentQuestion.choices.length; i++){
        //console.log("La respuesta a la eleccion "+i+" es "+currentQuestion.choices[i].answer)
        if(currentQuestion.choices[i].answer === true){
          counter++
        }
      }
      //console.log("El valor del contador es "+counter)
      if (counter != 1){
        currentQuestionRender = "Tipo de pregunta no soportada: las preguntas deben tener una única respuesta"
      } else if(this.props.game_status === "D") {
      currentQuestionRender = (
        <div>
          {questionCategoryText}
          <Timer timer={this.props.timer} dispatch={this.props.dispatch}/>
          <MCQuestionTrivial question={currentQuestion} dispatch={this.props.dispatch} I18n={this.props.I18n} objectiveHistory={objectiveHistory} objectiveMovies={objectiveMovies} objectiveSports={objectiveSports} objectiveScience={objectiveScience} onNextQuestion={onNextQuestion} onResetTrivial={onResetTrivial} lives={this.props.lives} crowns={this.props.crowns} countCrowns={this.countCrownsInPossession.bind(this)} player_position={this.props.player_position}/>
        </div>
        );
      }
    }

    return(
      <div className="trivial">
        <div className="scoreboardpluslegend1">
          <div className="scoreboardpluslegend2">
            <Scoreboard dispatch={this.props.dispatch} lives={this.props.lives} crowns={this.props.crowns} game_status={this.props.game_status} countCrowns={this.countCrownsInPossession.bind(this)}/>
            <Legend/>
          </div>
        </div>
        <Board dispatch={this.props.dispatch} boxes={this.state.boxes} player_position={this.props.player_position} possible_movements={this.props.possible_movements} dice={this.props.dice} game_status={this.props.game_status} crowns={this.props.crowns}/>
        <Dice dispatch={this.props.dispatch} dice={this.props.dice} game_status={this.props.game_status}/>
        {currentQuestionRender}
      </div>
    );
  }

}
