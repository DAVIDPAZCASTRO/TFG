export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["es","en"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.6,
    },
    n:3,
    categories:[{
        name:"pedro",
        url:"./../assets/xmls/questionsXMLhistory.xml",
      },{
        name:"cartele",
        url:"./../assets/xmls/questionsXMLmovies.xml",
      },{
        name:"ceciliacia",
        url:"./../assets/xmls/questionsXMLscience.xml",
      },{
        name:"darnassuses",
        url:"./../assets/xmls/questionsXMLsports.xml",
      },
    ],
  },
  production:{
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
        url:"./../assets/xmls/questionsXMLhistory.xml",
      },{
        name:"cine",
        url:"./../assets/xmls/questionsXMLmovies.xml",
      },{
        name:"ciencia",
        url:"./../assets/xmls/questionsXMLscience.xml",
      },{
        name:"deportes",
        url:"./../assets/xmls/questionsXMLsports.xml",
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
