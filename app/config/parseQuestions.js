
function constructMyJSON(categoryJSON){
  var auxJSON = {
    "title":"Preguntas de Historia",
    "questions":[],
  };
  let questions = categoryJSON.quiz.question;

  //console.log(questions.length)
  let arrayQuestions = [];

  let q = {
    "type":"multiple_choice",
    "value":"",
    "choices":[],
  }

  for(let i=1; i<questions.length; i++){
    let arrayChoices = [];
    let choices = questions[i].answer;
    let choi = {
      "id":"",
      "value":"",
      "answer":"",
    }
    q.type = "multiple_choice";
    q.value = questions[i].questiontext[0].text[0];
    for(let j=0; j<choices.length; j++){
      choi.id = j+1;
      choi.value = choices[j].text[0];
      //console.log(choices[j].$.fraction)
      if(choices[j].$.fraction === "100"){
        choi.answer = true;
      } else{
        choi.answer = false;
      }
      let newChoi = Object.assign({}, choi);
      arrayChoices.push(newChoi)
    }
    //console.log("CHOICES")
    //console.dir(arrayChoices)
    q.choices = arrayChoices;
    let newQ = Object.assign({}, q);
    arrayQuestions.push(newQ)
  }

  auxJSON.questions = arrayQuestions;
  //console.dir(auxJSON)
  return auxJSON;
}

export function parseHistory(){
  let result = [{
    hola:[],
  }];
  console.log([1,2,3,1])
  let promise = new Promise((resolve,reject) => {

    //Load Moodle XML file
    fetch('assets/xmls/questionsXMLhistory.xml')
    .then(function(response) {
      //console.log(response)
      return response.text();
    })
    .then(function(myXML) {
      //console.log("myXML")
      //console.log(myXML);
      var parseString = require('xml2js').parseString;
      parseString(myXML, function (err, myJSON) {
          //console.log("XML in JSON")
          //console.dir(myJSON);
          //Generar nuevo objeto JSON a partir del recibido
          let newjson = Object.assign({}, myJSON);

          var myJSON =  constructMyJSON(newjson) //construyo mi json correcto

          //aqui no puedo llamar a this.props dispatch
          //los metodos no
          resolve(constructMyJSON(newjson));

          //Guardar el objeto JSON generado en el estado utilizando Redux
      });


    })
  })
  console.dir(promise)

  return promise;

}
