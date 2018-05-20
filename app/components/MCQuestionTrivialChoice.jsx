import React from 'react';

export default class MCQuestionChoice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="questionC1">
          <input type="checkbox" checked={this.props.checked} onChange={() => this.props.handleChange(this.props.choice)} disabled={showCorrection}/>
        </div>
        <div className="questionC2">
          <p>{this.props.choice.value}</p>
        </div>
      </div>
    );
  }
}
