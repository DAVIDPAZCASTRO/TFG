import React from 'react';

import {setTimeLeft, isTimer} from './../reducers/actions';

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      seconds: 25,
      class_name: "time"
    };
    this.timer = 0;

  }

  componentDidMount() {
    this.startTimer();
  }

  finishTimeout(){
    if(this.state.seconds != 0){
      this.setState({class_name: "time"});
    }

  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown.bind(this), 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let color;
    if(seconds >= 15){
      color = "time long_time";
    } else if(seconds >= 5) {
      color = "time medium_time";
    } else if(seconds >= 0){
      color = "time short_time";
    } else {
      color = "time";
    }

    this.setState({
      seconds: seconds,
      class_name: color,
    });

    let to = setTimeout(this.finishTimeout.bind(this), 700);

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {

    return(
      <div className={this.state.class_name}>
        <div>{this.state.seconds}</div>
      </div>
    );
  }
}
