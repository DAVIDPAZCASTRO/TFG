function waitForParseXMLReducer(state = {}, action){
  switch (action.type){
  case 'XMLS_PARSED':
    return false;
  default:
    return state;
  }
}

export default waitForParseXMLReducer;
