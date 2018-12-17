export function scormConnected(scorm){
  return {
    type:'SCORM_CONNECTED',
    scorm:scorm,
  };
}
export function rollDice(number){
  return {
    type:'ROLL_DICE',
    number:number,
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

export function setSelectedChoice(choice){
  return {
    type:'SET_SELECTED_CHOICE',
    choice:choice,
  };
}

export function setObjectivesPointer(pointer){
  return {
    type:'SET_OBJECTIVES_POINTER',
    objectives_pointer:pointer,
  };
}

export function xmlsParsed(){
  return {
    type:'XMLS_PARSED',
  };
}

export function setQuestionIndexYellow(questionIndex){
  return {
    type:'SET_QUESTION_INDEX_YELLOW',
    questionIndex:questionIndex,
  };
}

export function setQuestionIndexBlue(questionIndex){
  return {
    type:'SET_QUESTION_INDEX_BLUE',
    questionIndex:questionIndex,
  };
}

export function setQuestionIndexRed(questionIndex){
  return {
    type:'SET_QUESTION_INDEX_RED',
    questionIndex:questionIndex,
  };
}

export function setQuestionIndexGreen(questionIndex){
  return {
    type:'SET_QUESTION_INDEX_GREEN',
    questionIndex:questionIndex,
  };
}

export function resetLives(item){
  return {
    type:'RESET_LIVES',
  };
}

export function setCrownYellow(onBoard){
  return {
    type:'SET_CROWN_YELLOW',
    onBoard:onBoard,
  };
}

export function setCrownBlue(onBoard){
  return {
    type:'SET_CROWN_BLUE',
    onBoard:onBoard,
  };
}

export function setCrownGreen(onBoard){
  return {
    type:'SET_CROWN_GREEN',
    onBoard:onBoard,
  };
}

export function setCrownRed(onBoard){
  return {
    type:'SET_CROWN_RED',
    onBoard:onBoard,
  };
}

export function resetCrowns(item){
  return {
    type:'RESET_CROWNS',
  };
}

export function setJsonYellow(json){
  return {
    type:'SET_JSON_YELLOW',
    json:json,
  };
}

export function setJsonRed(json){
  return {
    type:'SET_JSON_RED',
    json:json,
  };
}

export function setJsonGreen(json){
  return {
    type:'SET_JSON_GREEN',
    json:json,
  };
}

export function setJsonBlue(json){
  return {
    type:'SET_JSON_BLUE',
    json:json,
  };
}

export function setPosition(x, y){
  return {
    type:'SET_POSITION',
    x:x,
    y:y,
  };
}

export function setPossibleMovements(array){
  return {
    type:'SET_POSSIBLE_MOVEMENTS',
    array:array,
  };
}

export function setGameStatus(status){
  return {
    type:'SET_GAME_STATUS',
    status:status,
  };
}

export function setSeconds(seconds){
  return {
    type:'SET_SECONDS',
    seconds:seconds,
  };
}

export function setAnswered(answ){
  return {
    type:'SET_ANSWERED',
    answered:answ,
  };
}

export function isTimer(timer){
  return {
    type:'IS_TIMER',
    isTimer:timer,
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

export function objectiveAccomplished(objectiveId, accomplishedScore = 0){
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

export function importState(state){
  return {
    type:'IMPORT_STATE',
    state:state,
  };
}