function playerPositionReducer(state = {}, action){
  switch (action.type){
  case 'SET_POSITION':
    let newState = Object.assign({}, state);
    newState = [action.x, action.y];
    return newState;
  default:
    return state;
  }
}
export default playerPositionReducer;