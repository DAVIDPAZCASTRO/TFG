function playerPositionReducer(state = {}, action){
  switch (action.type){
  case 'SET_POSITION':
    let newState = Object.assign({}, state);
    newState = [action.x, action.y];
    return newState;
  case 'IMPORT_STATE':
    return action.state.player_position;
  default:
    return state;
  }
}
export default playerPositionReducer;