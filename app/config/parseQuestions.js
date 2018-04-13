/*var xmlDoc;
export function parseHistory(){

  var moz = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined');
  var ie = (typeof window.ActiveXObject != 'undefined');

  if (moz) {
    xmlDoc = document.implementation.createDocument("", "", null);
    xmlDoc.async=false;
    xmlDoc.load("./questionsXMLhistory.xml");
  }
  else if (ie)
  {
	  xmlDoc = new ActiveXObject("MSXML2.DOMDocument");
	  xmlDoc.async = false;
	  while(xmlDoc.readyState != 4) {};
	  xmlDoc.load("./questionsXMLhistory.xml");
  }
*/

export function parseHistory(){

  //var fs = require('fs');
  //var XMLH = require('./questionsXMLhistory')
  var xml2js = require('xml2js');
  var XMLH = '<?xml version="1.0" encoding="UTF-8"?><quiz><question type="category"><category><text>Moodle QUIZ XML export</text></category></question><question type="multichoice"><name><text>Pregunta de historia:</text></name><questiontext><text>¿En qué año se descubrió América?</text></questiontext><shuffleanswers>0</shuffleanswers><single>true</single><answer fraction="0"><text>1493</text></answer><answer fraction="0"><text>1495­</text></answer><answer fraction="0"><text>1494­</text></answer><answer fraction="100"><text>1492</text></answer></question></quiz>';
  var parser = new xml2js.Parser();
  //fs.readFile('./questionsXMLhistory.xml', function(err, data) {

      parser.parseString(XMLH, function (err, result) {
      console.dir(result);
      console.log('Done');
    //});


  });
}
