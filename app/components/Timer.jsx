import React from 'react';

import {setSeconds, isTimer} from './../reducers/actions';

import {INITIAL_STATE} from '../constants/constants';

export default class Timer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      class_name:"time",
    };
    this.timer = 0;
    this.finishQuestion = false;
    this.startTimer();
  }

  componentDidMount(){
    // console.log(this.props.timer)
    // this.startTimer();
  }

  componentWillUnmount(){
    // console.log("entra en willunmount")
    this.props.dispatch(isTimer(false));
    this.props.dispatch(setSeconds(INITIAL_STATE.timer.seconds));

  }

  finishTimeout(){
    if((this.props.timer.seconds !== 0) && (this.props.timer.isTimer)){
      this.setState({class_name:"time"});
    }
    if((this.props.timer.seconds === 0) && (!this.finishQuestion)){
      this.props.onAnswerQuestion();
      this.finishQuestion = true;
    }

  }

  startTimer(){
    // console.log("ENTRA EN STARTTIMER")
    // console.log(this.props.timer)
    if(this.props.timer.seconds > 0){
      this.timer = setInterval(this.countDown.bind(this), 1000);
    }

  }

  countDown(){
    // Remove one second, set state so a re-render happens.
    // console.log("ENTRAMOS EN COUNTDOWN")
    // console.log(this.props.timer.seconds)
    if(this.props.timer.isTimer === true){
      // console.log("isTimer es True")
      let seconds = this.props.timer.seconds - 1;
      // console.log("Seconds es " +  seconds);
      let color;
      if(seconds >= 15){
        color = "time long_time";
      } else if(seconds >= 5){
        color = "time medium_time";
      } else if(seconds >= 0){
        color = "time short_time";
      } else {
        color = "time";
      }
      this.props.dispatch(setSeconds(seconds));
      this.setState({
        class_name:color,
      });

      setTimeout(function(){
        if(seconds > 0){
          this.setState({class_name:"time"});
        }
      }.bind(this), 700);

      if(seconds === 0){
        clearInterval(this.timer);
        this.timer = 0;
        this.finishQuestion = true;
        this.props.dispatch(isTimer(false));
        this.props.onAnswerQuestion();
      }
    } else {

      // console.log("isTimer es False")
      clearInterval(this.timer);
      this.timer = 0;
    }
    // console.log("SALIMOS DE COUNTDOWN")
  }

  render(){
    // console.log(this.props.timer)

    return (
      <div className={this.state.class_name}>
        <div>{this.props.timer.seconds}</div>
      </div>
    );
  }
}