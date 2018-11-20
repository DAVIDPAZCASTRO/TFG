import {GLOBAL_CONFIG} from '../config/config.js';
import {INITIAL_STATE} from '../constants/constants';

function timerReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'SET_SECONDS':
    newState.seconds = action.seconds;
    return newState;
  case 'IS_TIMER':
    newState.isTimer = action.isTimer;
    return newState;
  case 'IMPORT_STATE':
    let newTimer = action.state.timer;
    // if(typeof GLOBAL_CONFIG.timer === "number"){
    //   newTimer.seconds = GLOBAL_CONFIG.timer;
    // } else {
    //   newTimer.seconds = INITIAL_STATE.timer.seconds;
    // }
    return newTimer;
  default:
    return state;
  }
}
export default timerReducer;