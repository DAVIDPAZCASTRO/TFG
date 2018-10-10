import React from 'react';

import {setTimeLeft, isTimer} from './../reducers/actions';

export default class Timer extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     timer:{
  //       time:30,
  //       isTimer:false,
  //     },
  //   }
  //   this.timer = 0;
  // }
  //
  // myTimer() {
  //   if(this.state.timer.time>0){
  //     console.log(this.state)
  //     let newStateTimer = Object.assign({}, this.state.timer);
  //     newStateTimer.time = this.state.timer.time - 1;
  //     console.log("newStateTime = " + newStateTimer.time)
  //     this.setState({timer: newStateTimer});
  //     console.log("new = " + this.state.timer.time)
  //
  //   } else {
  //     //clearInterval(this.timer);
  //
  //     let newStateIsTimer = Object.assign({}, this.state.timer);
  //     newStateIsTimer.isTimer = false;
  //     console.log("newStateIsTimer = " + newStateIsTimer.isTimer)
  //     this.setState({timer:(newStateIsTimer)});
  //   }
  // }
  //
  // onClickStartTimer(){
  //
  //   if(!this.state.timer.is_timer){
  //     this.timer = setInterval(this.myTimer(), 1000);
  //
  //     let newStateIsTimer = Object.assign({}, this.state.timer);
  //     newStateIsTimer.isTimer = true;
  //     console.log("newStateIsTimer = " + newStateIsTimer.isTimer)
  //     this.setState({timer:(newStateIsTimer)});
  //     console.log("new = " + this.state.timer.time)
  //   }
  // }
  //
  // onClickResetTimer(){
  //
  //   let newStateTime = Object.assign({}, this.state.timer);
  //   newStateTime.time = 30;
  //   console.log("newStateTime = " + newStateTime)
  //   this.setState({timer:(newStateTime)});
  //
  //   let newStateIsTimer = Object.assign({}, this.state.timer);
  //   newStateIsTimer.isTimer = false;
  //   this.setState({timer:(newStateIsTimer)});
  // }
  //
  // render(){
  //   console.log(this.state.timer.time)
  //
  //   return(
  //     <div className="timer">
  //       <button onClick={this.onClickStartTimer.bind(this)}>Empezar timer</button>
  //       <button onClick={this.onClickResetTimer.bind(this)}>Resetear Timer</button>
  //       <div className="time">
  //         {this.state.timer.time}
  //       </div>
  //     </div>
  //   );
  // }


  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 30,
    };
    this.timer = 0;
  }

  /*
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
  */

  componentDidMount() {
    //let timeLeftVar = this.secondsToTime(this.state.seconds);
    //this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown.bind(this), 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      //time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }



  render() {
    return(
      <div>
        <button onClick={this.startTimer.bind(this)}>Start</button>
        <div>{this.state.seconds}</div>
      </div>
    );
  }
}
