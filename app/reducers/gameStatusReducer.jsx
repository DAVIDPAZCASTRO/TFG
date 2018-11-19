function gameStatusReducer(state = {}, action){
  switch (action.type){
  case 'SET_GAME_STATUS':
    return action.status;
  case 'IMPORT_STATE':
    return action.state.game_status;
  default:
    return state;
  }
}

export default gameStatusReducer;