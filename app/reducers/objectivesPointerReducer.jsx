function objectivesPointerReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_OBJECTIVES_POINTER':
    newState = action.objectives_pointer;
    return newState;
  case 'IMPORT_STATE':
    return action.state.objectives_pointer;
  default:
    return state;
  }
}
export default objectivesPointerReducer;