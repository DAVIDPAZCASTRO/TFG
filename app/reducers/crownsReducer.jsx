function crownsReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_CROWN_HISTORY':
    newState.crown_history.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_MOVIES':
    newState.crown_movies.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_SCIENCE':
    newState.crown_science.onBoard = action.onBoard;
    return newState;
  case 'SET_CROWN_SPORTS':
    newState.crown_sports.onBoard = action.onBoard;
    return newState;
  case 'IMPORT_STATE':
    return action.state.crowns;
  default:
    return state;
  }
}
export default crownsReducer;