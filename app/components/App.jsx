import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';

import {setJsonMovies, setJsonSports, setJsonHistory, setJsonScience, xmlsParsed} from './../reducers/actions';

import * as PQ from '../config/parseQuestions.js';
import * as SAMPLES from '../config/samples.js';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import HomeScreen from './HomeScreen.jsx';
import Quiz from './Quiz.jsx';
import Trivial from './Trivial.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
  }

  componentDidMount(){
    this.parseMoodleXMLFile('assets/xmls/questionsXMLsports.xml', "sports");
    this.parseMoodleXMLFile('assets/xmls/questionsXMLhistory.xml', "history");
    this.parseMoodleXMLFile('assets/xmls/questionsXMLmovies.xml', "movies");
    this.parseMoodleXMLFile('assets/xmls/questionsXMLscience.xml', "science");

    console.log("pasa")

    this.props.dispatch(xmlsParsed());
  }

  parseMoodleXMLFile(url, category){
   //Load Moodle XML file
   if(category === "sports"){
     console.log("ola k ase")
   }
    fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(myXML) {
      var parseString = require('xml2js').parseString;
      parseString(myXML, function (err, myJSON) {
          //console.log("XML in JSON")

          //Generar nuevo objeto JSON a partir del recibido
          let newjson = Object.assign({}, myJSON);
          var myJSON =  this.constructMyJSON(newjson, category); //construyo mi json correcto

          switch(category) {
            case "history":
              this.props.dispatch(setJsonHistory(myJSON));
              break;
            case "sports":
              this.props.dispatch(setJsonSports(myJSON));
              break;
            case "movies":
              this.props.dispatch(setJsonMovies(myJSON));
              break;
            case "science":
              this.props.dispatch(setJsonScience(myJSON));
              break;
            default:
              break;
          }

          //resolve(constructMyJSON(newjson));

          //Guardar el objeto JSON generado en el estado utilizando Redux
      }.bind(this));
    }.bind(this));
  }

  constructMyJSON(categoryJSON, c){
    var auxJSON = {
      "title":"Preguntas de " + c,
      "questions":[],
    };
    let questions = categoryJSON.quiz.question;

    //console.log(questions.length)
    let arrayQuestions = [];

    let q = {
      "type":"multiple_choice",
      "value":"",
      "choices":[],
    }

    for(let i=1; i<questions.length; i++){
      let arrayChoices = [];
      let choices = questions[i].answer;
      let choi = {
        "id":"",
        "value":"",
        "answer":"",
      }
      q.type = "multiple_choice";
      q.value = questions[i].questiontext[0].text[0];
      for(let j=0; j<choices.length; j++){
        choi.id = j+1;
        choi.value = choices[j].text[0];
        //console.log(choices[j].$.fraction)
        if(choices[j].$.fraction === "100"){
          choi.answer = true;
        } else{
          choi.answer = false;
        }
        let newChoi = Object.assign({}, choi);
        arrayChoices.push(newChoi)
      }
      //console.log("CHOICES")
      //console.dir(arrayChoices)
      q.choices = arrayChoices;
      let newQ = Object.assign({}, q);
      arrayQuestions.push(newQ)
    }

    auxJSON.questions = arrayQuestions;
    //console.dir(auxJSON)
    return auxJSON;
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

  render(){
    let appHeader = "";
    let appContent = "";
    let all = "";
    console.log(this.props.jsons.jsonSports);
    console.log(this.props.jsons.jsonHistory);
    console.log(this.props.jsons.jsonMovies);
    console.log(this.props.jsons.jsonScience);

    //console.log(SAMPLES.quiz_example);
    appHeader = (
      <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} countCrowns={this.countCrownsInPossession.bind(this)}/>
    );
    if(((this.props.game_status !==  "E") && (this.props.game_status !==  "F"))){

      if(this.props.wait_for_user_profile !== true){
        appContent = (

          <Trivial dispatch={this.props.dispatch} dice={this.props.dice} lives={this.props.lives} crowns={this.props.crowns} player_position={this.props.player_position} possible_movements={this.props.possible_movements} trivial={SAMPLES.quiz_example} questions={this.props.jsons} game_status={this.props.game_status} config={GLOBAL_CONFIG} I18n={I18n} user_profile={this.props.user_profile} tracking={this.props.tracking}/>

        );
      }
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} crowns={this.props.crowns} game_status={this.props.game_status} countCrowns={this.countCrownsInPossession.bind(this)} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }

    if(this.props.game_status === "A"){
      all = (
        <HomeScreen dispatch={this.props.dispatch}/>
      );
    }
    else {
      all = (
        <div>
          {appHeader}
          <hr/>
          {appContent}
        </div>
      );
    }

    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {all}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
