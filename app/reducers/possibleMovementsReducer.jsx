function possibleMovementsReducer(state = {}, action){
  switch (action.type){
  case 'SET_POSSIBLE_MOVEMENTS':
    let newState = Object.assign({}, state);
    newState = action.array;
    return newState;
  default:
    return state;
  }
}

export default possibleMovementsReducer;