import React from 'react';

export default class Timer extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="timer">
        <div className="time">
          25
        </div>
      </div>
    );
  }
}
