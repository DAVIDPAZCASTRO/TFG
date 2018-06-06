import React from 'react';

export default class MCQuestionTrivialChoice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="questionC1">
          <input type="radio" name="trivial_choices" checked={this.props.checked} onChange={() => this.props.handleChange(this.props.choice_id)} disabled={this.props.answered}/>
        </div>
        <div className="questionC2">
          <p>{this.props.choice.value}</p>
        </div>
      </div>
    );
  }
}
