import React from 'react';

export default class QuestionTrivialButtons extends React.Component {
  constructor(props){
    super(props);
  }

  onClickAnswer(){
    this.props.onAnswerQuestion();
  }

  onClickContinue(){
    console.log("ENTRAAAA")
    this.props.onNextQuestion();
  }

  render(){
    let disable_answer = (this.props.answered);
    let disable_resetQuestion = (!this.props.answered || this.props.quizCompleted);
    let disable_continue = (!this.props.answered);
    let resetQuiz = "";
    if((this.props.allow_finish) && (disable_next === false)){
      resetQuiz = (<button className="resetQuiz" onClick={this.props.onResetQuiz}>{this.props.I18n.getTrans("i.reset_quiz")}</button>);
    }
    return (
      <div className="questionTrivialButtonsWrapper">
        <button className="answerQuestion" onClick={this.onClickAnswer.bind(this)} disabled={disable_answer}>{this.props.I18n.getTrans("i.answer")}</button>
        <button className="continueTrivial" onClick={this.onClickContinue.bind(this)} disabled={disable_continue}>{this.props.I18n.getTrans("i.next")}</button>
        {resetQuiz}
      </div>
    );
  }
}
