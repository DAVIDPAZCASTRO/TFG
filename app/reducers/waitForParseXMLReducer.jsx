function waitForParseXMLReducer(state = {}, action){
  let newState;
  newState = Object.assign({}, state);
  switch (action.type){
  case 'XMLS_PARSED':
    console.log("entra XML_PARSED")
    newState = false;
    console.log(newState);
    return newState;
  default:
    return state;
  }
}

export default waitForParseXMLReducer;
