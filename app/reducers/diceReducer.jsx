function diceReducer(state = {}, action){
  switch(action.type) {
    case 'RESET_DICE':
      return state;
    case 'ROLL_DICE':
      return action.number;
    default:
      return state;
  }
}
export default diceReducer;
