let next_objective_id = 1;

export function Objective(options){
  // Constructor
  let defaults = {
    id:next_objective_id,
    accomplished:false,
    progress_measure:0,
    score:null,
    accomplished_score:null,
  };
  let _objective = Object.assign({}, defaults, options);

  _objective.progress_measure = Math.max(0, Math.min(1, _objective.progress_measure));

  if(typeof _objective.score === "number"){
    _objective.score = Math.max(0, Math.min(1, _objective.score));
    if(typeof _objective.accomplished_score === "number"){
      _objective.accomplished_score = Math.min(_objective.accomplished_score, _objective.score);
    }
  }

  next_objective_id += 1;
  return _objective;
}

export function ResetObjective(objective){
  if(typeof objective !== "object"){
    return objective;
  }
  objective.accomplished = false;
  objective.accomplished_score = null;
  return objective;
}
//ordena el array... Hay que entender bien como...
//El .map realiza la función entre paréntesis a cada elemento del array. Lo que hace en este caso es convertir cada elemento en otro miniarray con el propio valor que tenia antes y un valor aleatorio.
//El sort ordena el array primario según el valor aleatorio. El ultimo map vuelve a convertir el array en el original. El resultado es un desorden aleatorio del array primario.
export function shuffleArray(array){
  return array.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
}
