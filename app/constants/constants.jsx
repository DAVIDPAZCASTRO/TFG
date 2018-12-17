export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
    score:0,
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
  wait_for_parse_xml:true,
  jsons:{
    jsonYellow:0,
    jsonRed:0,
    jsonBlue:0,
    jsonGreen:0,
  },
  player_position:[4, 4],
  possible_movements:[
    [4, 4],
  ],
  game_status:"0",
  dice:0,
  lives:5,
  crowns:{
    crown_yellow:{
      onBoard:true,
      position:[8, 8],
    },
    crown_blue:{
      onBoard:true,
      position:[0, 0],
    },
    crown_green:{
      onBoard:true,
      position:[8, 0],
    },
    crown_red:{
      onBoard:true,
      position:[0, 8],
    },
  },
  timer:{
    seconds:20,
    isTimer:false,
  },
  answered:false,
  question_index:{
    questionIndexYellow:0,
    questionIndexRed:0,
    questionIndexBlue:0,
    questionIndexGreen:0,
  },
  selected_choice:-1,
  objectives_pointer:[0, 0],
};
