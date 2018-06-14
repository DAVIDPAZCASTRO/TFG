import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';

import {setJsonMovies, setJsonSports, setJsonHistory, setJsonScience} from './../reducers/actions';

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

    // console.dir(promisePQ)
    // const { foo, bar } = promisePQ.then(result => result.data);
    // console.log(foo);
    // console.log(bar);
    // this.props.dispatch(setJsonHistory(PQ.parseHistory()));
    // console.log(this.props.jsons.jsonHistory)
  }
  componentDidMount(){
    let promise = PQ.parseHistory();
    console.log(promise)

    // let object = promise.then(function(result){
    //   this.props.dispatch(setJsonHistory(result));
    // });
    //console.log(object)
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
    //console.log(this.props.game_status);
    appHeader = (
      <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} countCrowns={this.countCrownsInPossession.bind(this)}/>
    );
    if(((this.props.game_status !==  "E") && (this.props.game_status !==  "F"))){

      if(this.props.wait_for_user_profile !== true){
        appContent = (

          //<Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} dice={this.props.dice} player={this.props.player} movement={this.props.movement} quiz={SAMPLES.quiz_example} game_status={this.props.game_status} config={GLOBAL_CONFIG} I18n={I18n}/>
          <Trivial dispatch={this.props.dispatch} dice={this.props.dice} lives={this.props.lives} crowns={this.props.crowns} player={this.props.player} movement={this.props.movement} trivial={SAMPLES.quiz_example} game_status={this.props.game_status} config={GLOBAL_CONFIG} I18n={I18n} user_profile={this.props.user_profile} tracking={this.props.tracking}/>

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
