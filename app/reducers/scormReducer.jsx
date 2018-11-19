function scormReducer(state = null, action){
  switch (action.type){
  case 'SCORM_CONNECTED':
    return action.scorm;
  case 'IMPORT_STATE':
    return action.state.scorm;
  default:
    return state;
  }
}

export default scormReducer;