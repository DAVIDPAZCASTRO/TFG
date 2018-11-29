function jsonReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_JSON_YELLOW':
    newState.jsonYellow = action.json;
    return newState;
  case 'SET_JSON_BLUE':
    newState.jsonBlue = action.json;
    return newState;
  case 'SET_JSON_RED':
    newState.jsonRed = action.json;
    return newState;
  case 'SET_JSON_GREEN':
    newState.jsonGreen = action.json;
    return newState;
  case 'IMPORT_STATE':
    return action.state.jsons;
  default:
    return state;
  }
}
export default jsonReducer;