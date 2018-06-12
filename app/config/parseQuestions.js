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
            var auxJSON = {
              "title":"Preguntas de Historia",
              "questions":[],
            };
            let questions = myJSON.quiz.question;
            console.log(questions.length)
            let array = [];
            let q = {
              "type":"multiple_choice",
              "value":"",
              "choices":[],
            }
            let answ = {
              "id":"",
              "value":"",
              "answer":"",
            }
            for(let i=1; i<questions.length; i++){
              q.type = "multiple_choice";
              q.value = questions[i].questiontext[0].text[0];

              let newQ = Object.assign({}, q);
              array.push(newQ)
            }
            console.dir(array)
            //...
            //Guardar el objeto JSON generado en el estado utilizando Redux
        });
      })


}
