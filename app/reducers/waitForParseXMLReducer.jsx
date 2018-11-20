function waitForParseXMLReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'XMLS_PARSED':
    newState = false;
    return newState;
  default:
    return state;
  }
}

export default waitForParseXMLReducer;