import React from 'react';

import {setSeconds, isTimer} from './../reducers/actions';

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      class_name: "time"
    };
    this.timer = 0;

  }

  componentDidMount() {
    this.props.dispatch(isTimer(true));
    console.log("Constructor timer");
    console.log(this.props.timer)

    this.startTimer();
  }
  componentWillUnmount(){
    if(this.timer !== 0){
      clearInterval(this.timer);
      this.timer = 0;
      this.props.dispatch(setSeconds(20));
    }
  }

  finishTimeout(){
    if(this.props.timer.seconds != 0){
      this.setState({class_name: "time"});
    }

  }

  startTimer() {
    console.log("ENTRA EN STARTTIMER")
    console.log(this.props.timer)
    if (this.timer === 0 && this.props.timer.seconds > 0) {
      this.timer = setInterval(this.countDown.bind(this), 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    console.log("ENTRAMOS EN COUNTDOWN")
    console.log(this.props.timer.seconds)
    let seconds = this.props.timer.seconds - 1;
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
    this.props.dispatch(setSeconds(seconds));
    this.setState({
      class_name: color,
    });

    let to = setTimeout(this.finishTimeout.bind(this), 700);

    if(this.props.timer.isTimer === false){
      clearInterval(this.timer);
    }
    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    console.log(this.props.timer)
    return(
      <div className={this.state.class_name}>
        <div>{this.props.timer.seconds}</div>
      </div>
    );
  }
}


// export default class Timer extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {
//       seconds: 25,
//       class_name: "time"
//     };
//     this.timer = 0;
//
//   }
//
//   componentDidMount() {
//     this.startTimer();
//   }
//
//   finishTimeout(){
//     if(this.state.seconds != 0){
//       this.setState({class_name: "time"});
//     }
//
//   }
//
//   startTimer() {
//     if (this.timer == 0 && this.state.seconds > 0) {
//       this.timer = setInterval(this.countDown.bind(this), 1000);
//     }
//   }
//
//   countDown() {
//     // Remove one second, set state so a re-render happens.
//     let seconds = this.state.seconds - 1;
//     let color;
//     if(seconds >= 15){
//       color = "time long_time";
//     } else if(seconds >= 5) {
//       color = "time medium_time";
//     } else if(seconds >= 0){
//       color = "time short_time";
//     } else {
//       color = "time";
//     }
//
//     this.setState({
//       seconds: seconds,
//       class_name: color,
//     });
//
//     let to = setTimeout(this.finishTimeout.bind(this), 700);
//
//     // Check if we're at zero.
//     if (seconds == 0) {
//       clearInterval(this.timer);
//     }
//   }
//
//   render() {
//
//     return(
//       <div className={this.state.class_name}>
//         <div>{this.state.seconds}</div>
//       </div>
//     );
//   }
// }
