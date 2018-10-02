function timerReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_TIME_LEFT':
      newState = action.time;
      return newState;
    default:
      return state;
  }
}
export default timerReducer;
