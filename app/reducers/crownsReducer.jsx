function crownsReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch(action.type) {
    case 'SET_CROWNS':
      newState = action.crowns;
      return newState;
    case 'RESET_CROWNS':
      newState = 0;
      return newState;
    default:
      return state;
  }
}
export default crownsReducer;
