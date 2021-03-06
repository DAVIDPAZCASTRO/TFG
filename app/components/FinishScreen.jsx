import React from 'react';
import './../assets/scss/finish_screen.scss';
import {GLOBAL_CONFIG} from '../config/config.js';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _getFinishScreenTitle(progress_measure, score){
    let finishTitleText;
    let hasProgressMeasure = (typeof progress_measure === "number");
    let hasScore = (typeof score === "number");
    if(hasProgressMeasure && hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_full", {progress_measure:(progress_measure * 100).toFixed(0), score:(score * 100).toFixed(0)});
    } else if(hasProgressMeasure){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_wpm", {progress_measure:(progress_measure * 100).toFixed(1)});
    } else if(hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_ws", {score:(score * 100).toFixed(1)});
    }
    if(typeof finishTitleText === "undefined"){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_simple");
    }
    return finishTitleText;
  }

  writeCrowns(){
    let auxtxt1 = "";
    let auxtxt2 = "";
    let auxtxt3 = "";
    let auxtxt4 = "";
    auxtxt1 = (!this.props.crowns.crown_blue.onBoard) ? " obtenida" : " no obtenida";
    auxtxt2 = (!this.props.crowns.crown_red.onBoard) ? " obtenida" : " no obtenida";
    auxtxt3 = (!this.props.crowns.crown_yellow.onBoard) ? " obtenida" : " no obtenida";
    auxtxt4 = (!this.props.crowns.crown_green.onBoard) ? " obtenida" : " no obtenida";
    let txt = (
      <div className=" results">
        <p>Corona de <a className="cine blue">{(GLOBAL_CONFIG.categories[1].name).toUpperCase()}</a>{auxtxt1}</p>
        <p>Corona de <a className="deportes red">{(GLOBAL_CONFIG.categories[3].name).toUpperCase()}</a>{auxtxt2}</p>
        <p>Corona de <a className="historia yellow">{(GLOBAL_CONFIG.categories[0].name).toUpperCase()}</a>{auxtxt3}</p>
        <p>Corona de <a className="ciencia green">{(GLOBAL_CONFIG.categories[2].name).toUpperCase()}</a>{auxtxt4}</p>
      </div>
    );
    return txt;

  }

  render(){
    let text = "";
    let textCrowns = "";
    // console.log(this.props.game_status)
    if(this.props.game_status === "E"){
      text = "Has perdido, has fallado demasiadas preguntas. ¡Intentalo de nuevo!";
      if(this.props.countCrowns() < 0){

      }
    } else if(this.props.game_status === "F"){
      text = "¡Enhorabuena!¡Has ganado!";
    }
    textCrowns = this.writeCrowns();
    let finishTitleText = this._getFinishScreenTitle(this.props.tracking.progress_measure, this.props.tracking.score);
    return (
      <div className="finish_screen">
        <h1>{text}</h1>
        {textCrowns}

        <p id="finish_title">{finishTitleText}</p>
      </div>
    );
  }
}
