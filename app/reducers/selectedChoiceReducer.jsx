function selectedChoiceReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_SELECTED_CHOICE':
    newState = action.choice;
    return newState;
  case 'IMPORT_STATE':
    return action.state.selected_choice;
  default:
    return state;
  }
}
export default selectedChoiceReducer;