function playerReducer(state = {}, action){
  switch(action.type) {
    case 'SET_POSITION':
      let newState = Object.assign({}, state);
      newState.position = [action.x,action.y];
      return newState;
    default:
      return state;
  }
}
export default playerReducer;
