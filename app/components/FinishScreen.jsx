import React from 'react';
import './../assets/scss/finish_screen.scss';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _getFinishScreenTitle(progress_measure, score){
    let finishTitleText;
    let hasProgressMeasure = (typeof progress_measure === "number");
    let hasScore = (typeof score === "number");
    if(hasProgressMeasure && hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_full", {progress_measure:(progress_measure * 100), score:(score * 100)});
    } else if(hasProgressMeasure){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_wpm", {progress_measure:(progress_measure * 100)});
    } else if(hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_ws", {score:(score * 100)});
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
      auxtxt1 = (!this.props.crowns.crown_movies.onBoard) ? " obtenida" : " no obtenida";
      auxtxt2 = (!this.props.crowns.crown_sports.onBoard) ? " obtenida" : " no obtenida";
      auxtxt3 = (!this.props.crowns.crown_history.onBoard) ? " obtenida" : " no obtenida";
      auxtxt4 = (!this.props.crowns.crown_science.onBoard) ? " obtenida" : " no obtenida";
      let txt = (
        <div className=" results">
          <p>Corona de <a className="cine">CINE</a>{auxtxt1}</p>
          <p>Corona de <a className="deportes">DEPORTE</a>{auxtxt2}</p>
          <p>Corona de <a className="historia">HISTORIA</a>{auxtxt3}</p>
          <p>Corona de <a className="ciencia">CIENCIA</a>{auxtxt4}</p>

        </div>
      );
      return txt;

  }

  render(){
    let text = "";
    let textCrowns = ""
    //console.log(this.props.game_status)
    if(this.props.game_status === "E"){
      text = "Has perdido, has fallado demasiadas preguntas. ¡Intentalo de nuevo!";
      if(this.props.countCrowns()<0){

      }
    }else if(this.props.game_status === "F"){
      text = "¡Enhorabuena!¡Has ganado!";
    }
    textCrowns=this.writeCrowns();
    let finishTitleText = this._getFinishScreenTitle(this.props.tracking.progress_measure, this.props.tracking.score);
    return (
      <div className="finish_screen">
        <h1>{text}</h1>
        {textCrowns}

        <p  id="finish_title">{finishTitleText}</p>
      </div>
    );
  }
}
