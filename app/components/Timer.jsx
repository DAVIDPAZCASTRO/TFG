import React from 'react';

import {setTimeLeft, isTimer} from './../reducers/actions';

export default class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timer:{
        time:30,
        isTimer:false,
      },
    }
  }

  myTimer() {
    if(this.state.timer.time>0){
      console.log(this.state)
      let newStateTime = Object.assign({}, this.state);
      newStateTime.time = this.state.timer.time - 1;
      console.log("newStateTime = " + newStateTime.time)
      this.setState({timer:(newStateTime)});
      console.log(this.state.timer)

    } else {
      //clearInterval(varTimer);

      let newStateIsTimer = Object.assign({}, this.state);
      newStateIsTimer.isTimer = false;
      console.log("newStateIsTimer = " + newStateIsTimer)
      this.setState({timer:(newStateIsTimer)});
    }
  }

  onClickStartTimer(){

    if(!this.state.timer.is_timer){
      var myVar = setInterval(this.myTimer(), 1000);

      let newStateIsTimer = Object.assign({}, this.state);
      newStateIsTimer.isTimer = true;
      console.log("newStateIsTimer = " + newStateIsTimer)
      this.setState({timer:(newStateIsTimer)});
    }
  }

  onClickResetTimer(){

    let newStateTime = Object.assign({}, this.state);
    newStateTime.time = 30;
    console.log("newStateTime = " + newStateTime)
    this.setState({timer:(newStateTime)});

    let newStateIsTimer = Object.assign({}, this.state);
    newStateIsTimer.isTimer = false;
    this.setState({timer:(newStateIsTimer)});
  }

  render(){
    console.log(this.state.timer.time)
    return(
      <div className="timer">
        <button onClick={this.onClickStartTimer.bind(this)}>Empezar timer</button>
        <button onClick={this.onClickResetTimer.bind(this)}>Resetear Timer</button>
        <div className="time">
          {this.state.timer.time}
        </div>
      </div>
    );
  }
}
