import React from 'react';

export default class MCQuestionTrivialChoice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let questionClassName = "question_choice";

    let showCorrection = (this.props.answered);
    if(this.props.clickedAnswer && !showCorrection && this.props.choice_id === this.props.selectedChoiceId){
      questionClassName += " question_choice_clicked";
    }
    if(showCorrection){
      if(this.props.clickedAnswer && this.props.choice_id === this.props.selectedChoiceId){
        if(this.props.choice.answer === true){
          questionClassName += " question_choice_correct";
        } else {
          questionClassName += " question_choice_incorrect";
        }
      } else if(this.props.choice.answer === true){
        questionClassName += " question_choice_correct";
      }
    }
    return (
      <div className={questionClassName} onClick={() => this.props.handleChange(this.props.choice_id)}>
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