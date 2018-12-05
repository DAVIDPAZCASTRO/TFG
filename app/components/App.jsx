import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';

import {setJsonBlue, setJsonRed, setJsonYellow, setJsonGreen, xmlsParsed, setGameStatus} from './../reducers/actions';

import * as SAMPLES from '../config/samples.js';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import HomeScreen from './HomeScreen.jsx';
// import Quiz from './Quiz.jsx';
import Trivial from './Trivial.jsx';
import RestoreStateMenu from './RestoreStateMenu.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();

    // No se muestra el menú de restaurar el estado de juego anterior si se dan estas condiciones
    if((typeof localStorage.getItem("state") === undefined) || (JSON.parse(localStorage.getItem("state")).game_status === "0") || (JSON.parse(localStorage.getItem("state")).game_status === "A") || (JSON.parse(localStorage.getItem("state")).game_status === "E") || (JSON.parse(localStorage.getItem("state")).game_status === "F")){
      this.props.dispatch(setGameStatus("A"));
    }
  }

  componentDidMount(){
    // console.log(GLOBAL_CONFIG)
    this.parseMoodleXMLFile(GLOBAL_CONFIG.categories[0].url, GLOBAL_CONFIG.categories[0].name);
    this.parseMoodleXMLFile(GLOBAL_CONFIG.categories[1].url, GLOBAL_CONFIG.categories[1].name);
    this.parseMoodleXMLFile(GLOBAL_CONFIG.categories[2].url, GLOBAL_CONFIG.categories[2].name);
    this.parseMoodleXMLFile(GLOBAL_CONFIG.categories[3].url, GLOBAL_CONFIG.categories[3].name);

    // console.log("pasa");
    // console.log("valor de waitForParseXML = " + this.props.wait_for_parse_xml);
    this.props.dispatch(xmlsParsed());
    // console.log("valor de waitForParseXML = " + this.props.wait_for_parse_xml);

  }

  parseMoodleXMLFile(url, category){
   // Load Moodle XML file

    fetch(url)
    .then(function(response){
      return response.text();
    })
    .then(function(myXML){
      let parseString = require('xml2js').parseString;
      parseString(myXML, function(err, myJSON){
        // console.log("XML in JSON")

        if(err){
          console.log(err);
        }
        // Generar nuevo objeto JSON a partir del recibido
        let newjson = Object.assign({}, myJSON);

        myJSON = this.constructMyJSON(newjson, category);

        switch (category){
        case GLOBAL_CONFIG.categories[0].name:
          this.props.dispatch(setJsonYellow(myJSON));
          break;
        case GLOBAL_CONFIG.categories[1].name:
          this.props.dispatch(setJsonBlue(myJSON));
          break;
        case GLOBAL_CONFIG.categories[2].name:
          this.props.dispatch(setJsonGreen(myJSON));
          break;
        case GLOBAL_CONFIG.categories[3].name:
          this.props.dispatch(setJsonRed(myJSON));
          break;
        default:
          break;
        }
          // resolve(constructMyJSON(newjson));
          // Guardar el objeto JSON generado en el estado utilizando Redux
      }.bind(this));
    }.bind(this));
  }

  constructMyJSON(categoryJSON, c){
    let auxJSON = {
      "title":"Preguntas de " + c,
      "questions":[],
    };
    let questions = categoryJSON.quiz.question;

    console.log(questions);
    let arrayQuestions = [];

    let q = {
      "type":"multiple_choice",
      "value":"",
      "choices":[],
    };

    for(let i = 1; i < questions.length; i++){
      let arrayChoices = [];
      let choices = questions[i].answer;
      let choi = {
        "id":"",
        "value":"",
        "answer":"",
      };
      q.type = "multiple_choice";
      q.value = this.processString(questions[i].questiontext[0].text[0]);
      for(let j = 0; j < choices.length; j++){
        choi.id = j + 1;
        choi.value = this.processString(choices[j].text[0]);
        // console.log(choices[j].$.fraction)
        if(choices[j].$.fraction === "100"){
          choi.answer = true;
        } else {
          choi.answer = false;
        }
        let newChoi = Object.assign({}, choi);
        arrayChoices.push(newChoi);
      }
      // console.log("CHOICES")
      // console.dir(arrayChoices)
      q.choices = arrayChoices;
      let newQ = Object.assign({}, q);
      arrayQuestions.push(newQ);
    }

    auxJSON.questions = arrayQuestions;
    // console.dir(auxJSON)
    return auxJSON;
  }

  processString(str){
    console.log("entra aquiiiii");
    if(str.indexOf("<![CDATA") === 0){
      let regex = str.match(/<!\[CDATA\[([\w¿?<>\/\sáéíóúÁÉÍÓÚ]+)]]>/i);
      console.log("entraaaaaaaaaaaaa");
      if((regex !== null) && (typeof regex[1] === 'string')){
        console.log("entra aquiiiii tambien");
        let htmlString = regex[1];
        let parser = new DOMParser();
        let stringParseada = parser.parseFromString(htmlString, "text/xml").children[0].innerHTML;
        return stringParseada;
      }
    }
    let parser = new DOMParser();
    let stringParseada = parser.parseFromString(str, "text/xml").children[0].innerHTML;
    return stringParseada;
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
    // console.log("valor de waitForParseXML = " + this.props.wait_for_parse_xml);

    // console.log(this.props.jsons.jsonYellow);
    // console.log(this.props.jsons.jsonBlue);
    // console.log(this.props.jsons.jsonGreen);
    // console.log(this.props.jsons.jsonRed);

    // console.log(SAMPLES.quiz_example);
    appHeader = (
      <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} countCrowns={this.countCrownsInPossession.bind(this)}/>
    );
    if(((this.props.game_status !== "E") && (this.props.game_status !== "F"))){

      if(this.props.wait_for_user_profile !== true){
        appContent = (

          <Trivial dispatch={this.props.dispatch} dice={this.props.dice} lives={this.props.lives} crowns={this.props.crowns} player_position={this.props.player_position} possible_movements={this.props.possible_movements} trivial={SAMPLES.quiz_example} timer={this.props.timer} selected_choice={this.props.selected_choice} questions={this.props.jsons} answered={this.props.answered} countCrowns={this.countCrownsInPossession.bind(this)} game_status={this.props.game_status} config={GLOBAL_CONFIG} I18n={I18n} user_profile={this.props.user_profile} tracking={this.props.tracking} objectives_pointer={this.props.objectives_pointer}/>

        );
      }
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} crowns={this.props.crowns} game_status={this.props.game_status} countCrowns={this.countCrownsInPossession.bind(this)} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }
    if(this.props.game_status === "0"){
      all = (
        <RestoreStateMenu dispatch={this.props.dispatch}/>
      );
    } else if(this.props.game_status === "A"){
      all = (
        <HomeScreen wait_for_parse_xml={this.props.wait_for_parse_xml} dispatch={this.props.dispatch}/>
      );
    } else {
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