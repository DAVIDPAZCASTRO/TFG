function questionIndexReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_QUESTION_INDEX_YELLOW':
    newState.questionIndexYellow = action.json;
    return newState;
  case 'SET_QUESTION_INDEX_BLUE':
    newState.questionIndexBlue = action.json;
    return newState;
  case 'SET_QUESTION_INDEX_RED':
    newState.questionIndexRed = action.json;
    return newState;
  case 'SET_QUESTION_INDEX_GREEN':
    newState.questionIndexGreen = action.json;
    return newState;
  case 'IMPORT_STATE':
    return action.state.questionIndex;
  default:
    return state;
  }
}
export default Reducer;
