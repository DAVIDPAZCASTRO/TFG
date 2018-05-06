function movementReducer(state = {}, action){
  switch (action.type){
  case 'SET_POSSIBLE_MOVEMENTS':
    let newState = Object.assign({}, state);
    newState.possible_movements = action.array;
    return newState;
  default:
    return state;
  }
}

export default movementReducer;
