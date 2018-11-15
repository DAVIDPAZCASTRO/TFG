function timerReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_SECONDS':
    newState.seconds = action.seconds;
    return newState;
  case 'IS_TIMER':
    newState.isTimer = action.isTimer;
    // console.log("newstate timer");
    // console.log(newState);
    // console.log(newState.isTimer);
    return newState;
  default:
    return state;
  }
}
export default timerReducer;