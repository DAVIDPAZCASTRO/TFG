function possibleMovementsReducer(state = {}, action){
  switch (action.type){
  case 'SET_POSSIBLE_MOVEMENTS':
    let newState = Object.assign({}, state);
    newState = action.array;
    return newState;
  case 'IMPORT_STATE':
    return action.state.possible_movements;
  default:
    return state;
  }
}

export default possibleMovementsReducer;