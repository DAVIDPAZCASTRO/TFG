function playerPositionReducer(state = {}, action){
  switch(action.type) {
    case 'SET_POSITION':
      return action.player;
    default:
      return state;
  }
}
export default playerPositionReducer;
