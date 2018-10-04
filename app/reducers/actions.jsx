export function scormConnected(scorm){
  return {
    type:'SCORM_CONNECTED',
    scorm:scorm,
  };
}
export function rollDice(number){
  return {
    type:'ROLL_DICE',
    number: number,
  };
}

export function resetDice(item){
  return {
    type:'RESET_DICE',
  };
}

export function setLives(lives){
  return {
    type:'SET_LIVES',
    lives:lives,
  };
}

export function xmlsParsed(){
  return {
    type:'XMLS_PARSED',
  };
}

export function resetLives(item){
  return {
    type:'RESET_LIVES',
  };
}

export function setCrownHistory(onBoard){
  return {
    type:'SET_CROWN_HISTORY',
    onBoard:onBoard,
  };
}

export function setCrownMovies(onBoard){
  return {
    type:'SET_CROWN_MOVIES',
    onBoard:onBoard,
  };
}

export function setCrownScience(onBoard){
  return {
    type:'SET_CROWN_SCIENCE',
    onBoard:onBoard,
  };
}

export function setCrownSports(onBoard){
  return {
    type:'SET_CROWN_SPORTS',
    onBoard:onBoard,
  };
}

export function resetCrowns(item){
  return {
    type:'RESET_CROWNS',
  };
}

export function setJsonHistory(json){
  return {
    type:'SET_JSON_HISTORY',
    json:json,
  };
}

export function setJsonSports(json){
  return {
    type:'SET_JSON_SPORTS',
    json:json,
  };
}

export function setJsonScience(json){
  return {
    type:'SET_JSON_SCIENCE',
    json:json,
  };
}

export function setJsonMovies(json){
  return {
    type:'SET_JSON_MOVIES',
    json:json,
  };
}

export function setPosition(x,y){
  return{
    type:'SET_POSITION',
    x:x,
    y:y,
  };
}

export function setPossibleMovements(array){
  return{
    type:'SET_POSSIBLE_MOVEMENTS',
    array:array,
  };
}

export function setGameStatus(status){
  return{
    type:'SET_GAME_STATUS',
    status:status,
  };
}

export function setTimeLeft(time){
  return{
    type:'SET_TIME_LEFT',
    time:time,
  };
}

export function isTimer(is_timer){
  return{
    type:'IS_TIMER',
    is_timer:is_timer,
  };
}

export function updateUserProfile(user_profile){
  return {
    type:'UPDATE_USER_PROFILE',
    user_profile:user_profile,
  };
}

export function addObjectives(objectives){
  return {
    type:'ADD_OBJECTIVES',
    objectives:objectives,
  };
}

export function resetObjectives(objectives){
  return {
    type:'RESET_OBJECTIVES',
  };
}

export function objectiveAccomplished(objectiveId, accomplishedScore = null){
  return {
    type:'OBJECTIVE_ACCOMPLISHED',
    objective_id:objectiveId,
    accomplished_score:accomplishedScore,
  };
}

// Example of action created using the redux-thunk middleware for Redux
export function objectiveAccomplishedThunk(objectiveId, accomplishedScore = null){
  return (dispatch, getState) => {
    const firstState = JSON.parse(JSON.stringify(getState()));
    dispatch(objectiveAccomplished(objectiveId, accomplishedScore = null));

    // Perform another action after accomplishing the objective
    const secondState = getState();
    if((typeof firstState.tracking.objectives[objectiveId] === "object") && (firstState.tracking.objectives[objectiveId].accomplished === false) && (typeof secondState.tracking.objectives[objectiveId] === "object") && (secondState.tracking.objectives[objectiveId].accomplished === true)){
      // Objective with id objectiveId was accomplished.
      // Do something and/or dispatch another action.
      console.log("Objective with id " + objectiveId + " was accomplished.");
      dispatch(showDialog("Objective with id " + objectiveId + " was accomplished."));
    }
  };
}

export function showDialog(text){
  return (dispatch, getState) => {
    alert(text);
  };
}

export function finishApp(finished = true){
  return {
    type:'FINISH_APP',
    finished:finished,
  };
}
