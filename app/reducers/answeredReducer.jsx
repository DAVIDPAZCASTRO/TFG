function answeredReducer(state = {}, action){
  let newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_ANSWERED':
    newState = action.answered;
    return newState;
  case 'IMPORT_STATE':
    return action.state.answered;
  default:
    return state;
  }
}
export default answeredReducer;