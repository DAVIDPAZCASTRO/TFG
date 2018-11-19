function jsonReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_JSON_HISTORY':
    newState.jsonHistory = action.json;
    return newState;
  case 'SET_JSON_MOVIES':
    newState.jsonMovies = action.json;
    return newState;
  case 'SET_JSON_SPORTS':
    newState.jsonSports = action.json;
    return newState;
  case 'SET_JSON_SCIENCE':
    newState.jsonScience = action.json;
    return newState;
  case 'IMPORT_STATE':
    return action.state.jsons;
  default:
    return state;
  }
}
export default jsonReducer;