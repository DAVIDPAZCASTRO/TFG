function gameStatusReducer(state = {}, action){
  switch (action.type){
  case 'SET_GAME_STATUS':
    return action.status;
  default:
    return state;
  }
}

export default gameStatusReducer;