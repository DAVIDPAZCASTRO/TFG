function diceReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'RESET_DICE':
    newState = 0;
    return newState;
  case 'ROLL_DICE':
    newState = action.number;
    return newState;
  case 'IMPORT_STATE':
    return action.state.dice;
  default:
    return state;
  }
}
export default diceReducer;