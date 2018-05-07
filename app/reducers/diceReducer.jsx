function diceReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'ENABLE_DICE':
      newState.disabled = false;
      return newState;
    case 'DISABLE_DICE':
      newState.disabled = true;
      return newState;
    case 'RESET_DICE':
      newState.number = 0;
      return state;
    case 'ROLL_DICE':
      newState.number = action.number;
      return newState;
    default:
      return state;
  }
}
export default diceReducer;
