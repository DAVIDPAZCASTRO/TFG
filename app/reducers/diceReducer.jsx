function diceReducer(state = {}, action){
  let newState;
  switch(action.type) {
    case 'RESET_DICE':
      newState = JSON.parse(JSON.stringify(state));
      //newState.dice = 0;
      return state;
    case 'ROLL_DICE':
      newState = JSON.parse(JSON.stringify(state));
      console.log('SE TIRA EL DADO!!!!');
      //newState.dice_number = action.number;
      //return newState;
      return action.number;
    default:
      return state;
  }
}
export default diceReducer;
