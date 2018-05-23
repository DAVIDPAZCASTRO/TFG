import React from 'react';

export default class MCQuestionTrivialChoice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="questionC1">
          <input type="checkbox" checked={this.props.clickedAnswer} onChange={() => this.props.handleChange(this.props.choice)}/>
        </div>
        <div className="questionC2">
          <p>{this.props.choice.value}</p>
        </div>
      </div>
    );
  }
}
