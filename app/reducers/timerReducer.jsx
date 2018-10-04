function timerReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_TIME_LEFT':
      newState.time = action.time;
      return newState;
    case 'IS_TIMER':
      newState.is_timer = action.is_timer;
      return newState;
    default:
      return state;
  }
}
export default timerReducer;
