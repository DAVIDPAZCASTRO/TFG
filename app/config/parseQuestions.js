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



  //Load Moodle XML file
      fetch('assets/xmls/questionsXMLhistory.xml')
      .then(function(response) {
        return response.text();
      })
      .then(function(myXML) {
        console.log("myXML")
        console.log(myXML);
        var parseString = require('xml2js').parseString;
        parseString(myXML, function (err, myJSON) {
            console.log("XML in JSON")
            console.dir(myJSON);
            //Generar nuevo objeto JSON a partir del recibido
            var myJSON = {};
            //...
            //Guardar el objeto JSON generado en el estado utilizando Redux
        });
      })


}
