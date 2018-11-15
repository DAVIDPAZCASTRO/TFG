export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:null,
    objectives:{},
    finished:false,
  },
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  wait_for_user_profile:false,
  dice:0,
  player_position:[4, 4],
  possible_movements:[
    [4, 4],
  ],
  game_status:"0",
  lives:5,
  crowns:{
    crown_history:{
      onBoard:true,
      position:[8, 8],
    },
    crown_movies:{
      onBoard:true,
      position:[0, 0],
    },
    crown_science:{
      onBoard:true,
      position:[8, 0],
    },
    crown_sports:{
      onBoard:true,
      position:[0, 8],
    },
  },
  jsons:{
    jsonHistory:0,
    jsonSports:0,
    jsonMovies:0,
    jsonScience:0,
  },
  timer:{
    seconds:20,
    isTimer:false,
  },
  wait_for_parse_xml:true,
};