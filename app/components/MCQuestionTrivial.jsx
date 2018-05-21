import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk} from './../reducers/actions';

import MCQuestionTrivialChoice from './MCQuestionTrivialChoice.jsx';
import QuestionButtons from './QuestionButtons.jsx';

export default class MCQuestion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_choice_id: 0,
      answered:false,
    };
  }

  handleChoiceChange(choice){
    if(choices.id !== this.state.selected_choice_id){
      this.setState({selected_choice_id:choice});
    }
  }

  onAnswerQuestion(){
    let nChoices = this.props.question.choices.length;

    for(let i = 0; i< nChoices; i++){

    }
  }


}
