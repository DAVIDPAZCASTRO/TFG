import React from 'react';

export default class RestoreStateMenu extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <div>Hay una partida anterior guardada, ¿quieres continuarla?</div>
                <button>Reanudar</button>
                <button>Empezar de nuevo</button>
            </div>
        );
    }
}