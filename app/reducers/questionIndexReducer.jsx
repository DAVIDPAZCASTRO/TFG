function questionIndexReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_QUESTION_INDEX_YELLOW':
    newState.questionIndexYellow = action.questionIndex;
    return newState;
  case 'SET_QUESTION_INDEX_BLUE':
    newState.questionIndexBlue = action.questionIndex;
    return newState;
  case 'SET_QUESTION_INDEX_RED':
    newState.questionIndexRed = action.questionIndex;
    return newState;
  case 'SET_QUESTION_INDEX_GREEN':
    newState.questionIndexGreen = action.questionIndex;
    return newState;
  case 'IMPORT_STATE':
    return action.state.question_index;
  default:
    return state;
  }
}
export default questionIndexReducer;
