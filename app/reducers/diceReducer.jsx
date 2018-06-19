function diceReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'RESET_DICE':
      newState = 0;
      return state;
    case 'ROLL_DICE':
      newState = action.number;
      return newState;
    default:
      return state;
  }
}
export default diceReducer;
