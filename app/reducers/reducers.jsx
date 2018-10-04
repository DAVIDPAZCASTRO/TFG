import {combineReducers} from 'redux';
import trackingReducer from './trackingReducer';
import scormReducer from './scormReducer';
import userProfileReducer from './userProfileReducer';
import waitForUserProfileReducer from './waitForUserProfileReducer';
import diceReducer from './diceReducer';
import playerPositionReducer from './playerPositionReducer';
import possibleMovementsReducer from './possibleMovementsReducer';
import gameStatusReducer from './gameStatusReducer';
import livesReducer from './livesReducer';
import crownsReducer from './crownsReducer';
import jsonReducer from './jsonReducer';
import timerReducer from './timerReducer';
import waitForParseXMLReducer from './waitForParseXMLReducer';

const GlobalState = combineReducers({
  tracking:trackingReducer,
  scorm:scormReducer,
  user_profile:userProfileReducer,
  wait_for_user_profile:waitForUserProfileReducer,
  dice:diceReducer,
  player_position:playerPositionReducer,
  possible_movements:possibleMovementsReducer,
  game_status:gameStatusReducer,
  lives:livesReducer,
  crowns:crownsReducer,
  jsons:jsonReducer,
  wait_for_parse_xml:waitForParseXMLReducer,
  timer:timerReducer,
});

export default GlobalState;
