function livesReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_LIVES':
      newState = action.lives;
      return newState;
    case 'RESET_LIVES':
      newState = 5;
      return newState;
    default:
      return state;
  }
}
export default livesReducer;
