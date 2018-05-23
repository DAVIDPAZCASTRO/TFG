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
  dice:{
    number:0,
    disabled:true,
  },
  player:{
    position:[4,4],
    playerIn:true,
  },
  movement:{
    possible_movements:[
      [4,4],
    ],
    number:0,
  },
  game_status:"A",
  lives:5,
  crowns:0,
};
