import React from 'react';
import './../assets/scss/trivial.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, resetObjectives} from './../reducers/actions';
import {GLOBAL_CONFIG} from '../config/config.js';

import Board from './Board.jsx';
import Legend from './Legend.jsx';
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
      history_question_index:0,
      science_question_index:0,
      sports_question_index:0,
      movies_question_index:0,
      boxes:[
        ['1', '3', '2', '4', '3', '1', '4', '3', '2'],
        ['2', 'o', 'o', 'o', '2', 'o', 'o', 'o', '4'],
        ['3', 'o', 'o', 'o', '1', 'o', 'o', 'o', '3'],
        ['4', 'o', 'o', 'o', '4', 'o', 'o', 'o', '1'],
        ['2', '1', '4', '3', '0', '1', '2', '3', '4'],
        ['3', 'o', 'o', 'o', '2', 'o', 'o', 'o', '2'],
        ['1', 'o', 'o', 'o', '3', 'o', 'o', 'o', '1'],
        ['2', 'o', 'o', 'o', '4', 'o', 'o', 'o', '4'],
        ['4', '1', '2', '3', '1', '2', '4', '1', '3'],
      ],
    };
    this.state.trivial.questions = Utils.shuffleArray(trivial.questions);
    // this.state.questions.jsonHistory.questions = Utils.shuffleArray(questions.jsonHistory.questions);
    // this.state.questions.jsonSports.questions = Utils.shuffleArray(questions.jsonSports.questions);
    // this.state.questions.jsonScience.questions = Utils.shuffleArray(questions.jsonScience.questions);
    // this.state.questions.jsonMovies.questions = Utils.shuffleArray(questions.jsonMovies.questions);

  }
  componentDidMount(){
    // let quest = Object.assign({}, this.state.questions);
    // quest.jsonHistory.questions = Utils.shuffleArray(quest.jsonHistory.questions);
    // quest.jsonSports.questions = Utils.shuffleArray(quest.jsonSports.questions);
    // quest.jsonScience.questions = Utils.shuffleArray(quest.jsonScience.questions);
    // quest.jsonMovies.questions = Utils.shuffleArray(quest.jsonMovies.questions);
    // this.setState({questions:quest});

    let objectives = [];
    // let objective1 = "Corona de " + (GLOBAL_CONFIG.categories[0].name).toUpperCase();
    // let objective2 = "Corona de " + (GLOBAL_CONFIG.categories[1].name).toUpperCase();
    // let objective3 = "Corona de " + (GLOBAL_CONFIG.categories[2].name).toUpperCase();
    // let objective4 = "Corona de " + (GLOBAL_CONFIG.categories[3].name).toUpperCase();

    let objective11 = "Pregunta 11";
    let objective12 = "Pregunta 12";
    let objective13 = "Pregunta 13";
    let objective14 = "Pregunta 14";
    let objective1corona = "Pregunta 15";
    let objective21 = "Pregunta 21";
    let objective22 = "Pregunta 22";
    let objective23 = "Pregunta 23";
    let objective24 = "Pregunta 24";
    let objective2corona = "Pregunta 25";
    let objective31 = "Pregunta 31";
    let objective32 = "Pregunta 32";
    let objective33 = "Pregunta 33";
    let objective34 = "Pregunta 34";
    let objective3corona = "Pregunta 35";
    let objective41 = "Pregunta 41";
    let objective42 = "Pregunta 42";
    let objective43 = "Pregunta 43";
    let objective44 = "Pregunta 44";
    let objective4corona = "Pregunta 45";

    // objectives.push(new Utils.Objective({id:(objective1), progress_measure:(1 / 4), score:(1 / 4)}));
    // objectives.push(new Utils.Objective({id:(objective2), progress_measure:(1 / 4), score:(1 / 4)}));
    // objectives.push(new Utils.Objective({id:(objective3), progress_measure:(1 / 4), score:(1 / 4)}));
    // objectives.push(new Utils.Objective({id:(objective4), progress_measure:(1 / 4), score:(1 / 4)}));

    objectives.push(new Utils.Objective({id:(objective11), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective12), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective13), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective14), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective1corona), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective21), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective22), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective23), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective24), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective2corona), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective31), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective32), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective33), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective34), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective3corona), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective41), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective42), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective43), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective44), progress_measure:(1 / 20), score:(1 / 20)}));
    objectives.push(new Utils.Objective({id:(objective4corona), progress_measure:(1 / 20), score:(1 / 20)}));

    if(Object.keys(this.props.tracking.objectives).length === 0 && this.props.tracking.objectives.constructor === Object){
      this.props.dispatch(addObjectives(objectives));
    }

  }

  onNextQuestion(){
    // se desplaza el array de la categoría en la que se encuentra el jugador, el resto de arrays no se mueven
    let player_position_category = this.state.boxes[this.props.player_position[0]][this.props.player_position[1]];
    // console.log("categoría numero " + player_position_category);
    switch (player_position_category){
    case "1":
      // cine
      let isLastQuestionMovies = (this.state.movies_question_index === this.state.questions.jsonMovies.questions.length - 1);
      if(isLastQuestionMovies === false){
        this.setState({movies_question_index:(this.state.movies_question_index + 1)});
      } else {
        this.setState({movies_question_index:0});
      }
      break;
    case "2":
      // deporte
      let isLastQuestionSports = (this.state.sports_question_index === this.state.questions.jsonSports.questions.length - 1);
      if(isLastQuestionSports === false){
        this.setState({sports_question_index:(this.state.sports_question_index + 1)});
      } else {
        this.setState({sports_question_index:0});
      }
      break;
    case "3":
      // historia
      let isLastQuestionHistory = (this.state.history_question_index === this.state.questions.jsonHistory.questions.length - 1);
      if(isLastQuestionHistory === false){
        this.setState({history_question_index:(this.state.history_question_index + 1)});
      } else {
        this.setState({history_question_index:0});
      }
      break;
    case "4":
      // ciencia
      let isLastQuestionScience = (this.state.science_question_index === this.state.questions.jsonScience.questions.length - 1);
      if(isLastQuestionScience === false){
        this.setState({science_question_index:(this.state.science_question_index + 1)});
      } else {
        this.setState({science_question_index:0});
      }
      break;
    default:
      let isLastQuestion = (this.state.current_question_index === this.state.trivial.questions.length);
      if(isLastQuestion === false){
        this.setState({current_question_index:(this.state.current_question_index + 1)});
      } else {
        this.setState({current_question_index:1});
      }
      break;
    }
  }

  onResetTrivial(){
    this.setState({current_question_index:1});
    this.props.dispatch(resetObjectives());
  }

  render(){
    console.log(this.props.tracking);
    let player_position_category = this.state.boxes[this.props.player_position[0]][this.props.player_position[1]];
    let currentQuestion = "";
    let questionCategoryText = "";
    // console.log(player_position_category)
    // console.log(this.props.timer.seconds);
    switch (player_position_category){
    case "1":
      // cine
      // console.log("entra en cine")
      currentQuestion = this.state.questions.jsonMovies.questions[this.state.movies_question_index];
      questionCategoryText = (
        <div className="questioncategorytext center_screen">
          PREGUNTA DE <a className="cine">{(GLOBAL_CONFIG.categories[1].name).toUpperCase()}</a>
        </div>
      );
      break;
    case "2":
      // deporte
      // console.log("entra en deporte")
      currentQuestion = this.state.questions.jsonSports.questions[this.state.sports_question_index];
      questionCategoryText = (
        <div className="questioncategorytext center_screen">
          PREGUNTA DE <a className="deportes">{(GLOBAL_CONFIG.categories[3].name).toUpperCase()}</a>
        </div>
      );
      break;
    case "3":
      // historia
      // console.log("entra en historia")
      currentQuestion = this.state.questions.jsonHistory.questions[this.state.history_question_index];
      questionCategoryText = (
        <div className="questioncategorytext center_screen">
          PREGUNTA DE <a className="historia">{(GLOBAL_CONFIG.categories[0].name).toUpperCase()}</a>
        </div>
      );
      break;
    case "4":
      // ciencia
      // console.log("entra en ciencia")
      currentQuestion = this.state.questions.jsonScience.questions[this.state.science_question_index];
      questionCategoryText = (
        <div className="questioncategorytext center_screen">
          PREGUNTA DE <a className="ciencia">{(GLOBAL_CONFIG.categories[2].name).toUpperCase()}</a>
        </div>
      );
      break;
    default:
      currentQuestion = this.state.trivial.questions[this.state.current_question_index - 1];
      break;
    }

    let objectiveHistory;
    let objectiveMovies;
    let objectiveSports;
    let objectiveScience;

    // objectiveHistory = this.props.tracking.objectives["Corona de " + (GLOBAL_CONFIG.categories[0].name).toUpperCase()];
    // objectiveMovies = this.props.tracking.objectives["Corona de " + (GLOBAL_CONFIG.categories[1].name).toUpperCase()];
    // objectiveSports = this.props.tracking.objectives["Corona de " + (GLOBAL_CONFIG.categories[3].name).toUpperCase()];
    // objectiveScience = this.props.tracking.objectives["Corona de " + (GLOBAL_CONFIG.categories[2].name).toUpperCase()];

    let objectivesArray = [];
    for(let i = 1; i < 5; i++){
      let array1 = [];
      for(let j = 1; j < 6; j++){
        // console.log("Pregunta " + i + j);
        array1.push(this.props.tracking.objectives["Pregunta " + i + j]);
      }
      objectivesArray.push(array1);
    }

    let onNextQuestion = this.onNextQuestion.bind(this);
    let onResetTrivial = this.onResetTrivial.bind(this);
    let currentQuestionRender = "";

    if(currentQuestion.type !== "multiple_choice"){
      // console.log(currentQuestion.choices.length)
      currentQuestionRender = "Tipo de pregunta no soportada: solo se soportan las preguntas del tipo 'multiple_choice'";
    } else {
      let counter = 0;
      for(let i = 0; i < currentQuestion.choices.length; i++){
        // console.log("La respuesta a la eleccion "+i+" es "+currentQuestion.choices[i].answer)
        if(currentQuestion.choices[i].answer === true){
          counter++;
        }
      }
      // console.log("El valor del contador es "+counter)
      if(counter !== 1){
        currentQuestionRender = "Tipo de pregunta no soportada: las preguntas deben tener una única respuesta";
      } else if(this.props.game_status === "D"){
        currentQuestionRender = (
          <div>
            {questionCategoryText}
            <MCQuestionTrivial question={currentQuestion} dispatch={this.props.dispatch} I18n={this.props.I18n} timer={this.props.timer} answered={this.props.answered} objectivesArray={objectivesArray} objectiveHistory={objectiveHistory} objectiveMovies={objectiveMovies} objectiveSports={objectiveSports} objectiveScience={objectiveScience} onNextQuestion={onNextQuestion} selected_choice={this.props.selected_choice} onResetTrivial={onResetTrivial} lives={this.props.lives} crowns={this.props.crowns} countCrowns={this.props.countCrowns} player_position={this.props.player_position} objectives_pointer={this.props.objectives_pointer}/>
          </div>
        );
      }
    }

    return (
      <div className="trivial">
        <div className="scoreboardpluslegend1">
          <div className="scoreboardpluslegend2">
            <Scoreboard dispatch={this.props.dispatch} lives={this.props.lives} crowns={this.props.crowns} game_status={this.props.game_status} countCrowns={this.props.countCrowns}/>
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