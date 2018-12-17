function crownsReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_CROWN_YELLOW':
    newState.crown_yellow.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_BLUE':
    newState.crown_blue.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_GREEN':
    newState.crown_green.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_RED':
    newState.crown_red.onBoard = action.onBoard;
    return newState;
  case 'IMPORT_STATE':
    return action.state.crowns;
  default:
    return state;
  }
}
export default crownsReducer;