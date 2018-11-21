import {GLOBAL_CONFIG} from '../config/config.js';
import {INITIAL_STATE} from '../constants/constants';

function livesReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_LIVES':
    newState = action.lives;
    return newState;
  case 'RESET_LIVES':
    if((typeof GLOBAL_CONFIG.lives === 'number') && (GLOBAL_CONFIG.lives > 0) && (GLOBAL_CONFIG.lives <= 7)){
      newState = GLOBAL_CONFIG.lives;
    } else {
      newState = INITIAL_STATE.lives;
    }
    return newState;
  case 'IMPORT_STATE':
    return action.state.lives;
  default:
    return state;
  }
}
export default livesReducer;