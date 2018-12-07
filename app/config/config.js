export let GLOBAL_CONFIG = {
  dev:{
    // Se puede especificar el tiempo para responder (> 0, etiqueta timer:) y el número de vidas ((> 0) y (<= 7), etiqueta lives:).
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["es", "en"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:3,
    categories:[{
      name:"historia",
      url:"assets/xmls/questionsXMLyellow.xml",
    }, {
      name:"cine",
      url:"assets/xmls/questionsXMLblue.xml",
    }, {
      name:"ciencia",
      url:"assets/xmls/questionsXMLgreen.xml",
    }, {
      name:"deportes",
      url:"assets/xmls/questionsXMLred.xml",
    },
    ],
  },
  production:{
    // Se puede especificar el tiempo para responder (> 0) y el número de vidas ((> 0) y (<= 7)).
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["es", "en"],
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:undefined,
    categories:[{
      name:"historia",
      url:"assets/xmls/test_MoodleXML.xml",
    }, {
      name:"cine",
      url:"assets/xmls/questionsXMLblue.xml",
    }, {
      name:"ciencia",
      url:"assets/xmls/questionsXMLgreen.xml",
    }, {
      name:"deportes",
      url:"assets/xmls/questionsXMLred.xml",
    },
    ],
  },
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();