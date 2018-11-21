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
import answeredReducer from './answeredReducer';
import selectedChoiceReducer from './selectedChoiceReducer';
import objectivesPointerReducer from './objectivesPointerReducer';

const GlobalState = combineReducers({
  tracking:trackingReducer,
  scorm:scormReducer,
  user_profile:userProfileReducer,
  wait_for_user_profile:waitForUserProfileReducer,
  wait_for_parse_xml:waitForParseXMLReducer,
  jsons:jsonReducer,
  player_position:playerPositionReducer,
  possible_movements:possibleMovementsReducer,
  game_status:gameStatusReducer,
  dice:diceReducer,
  lives:livesReducer,
  crowns:crownsReducer,
  timer:timerReducer,
  answered:answeredReducer,
  selected_choice:selectedChoiceReducer,
  objectives_pointer:objectivesPointerReducer,
});

export default GlobalState;