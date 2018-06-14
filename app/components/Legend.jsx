import React from 'react';

export default class Legend extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="legend">
        <div>
          <button className="category0Legend">
            0
          </button>
          <div className="legendText">Casilla inicial, los dados se vuelven a lanzar</div>
        </div>
        <div>
          <button className="category1Legend">
            1
          </button>
          <div className="legendText">Casilla de <a className="cine">CINE</a></div>
        </div>
        <div>
          <button className="category2Legend">
            2
          </button>
          <div className="legendText">Casilla de <a className="deportes">DEPORTE</a></div>
        </div>
        <div>
          <button className="category3Legend">
            3
          </button>
          <div className="legendText">Casilla de <a className="historia">HISTORIA</a></div>
        </div>
        <div>
          <button className="category4Legend">
            4
          </button>
          <div className="legendText">Casilla de <a className="ciencia">CIENCIA</a></div>
        </div>
      </div>
    );
  }
}
