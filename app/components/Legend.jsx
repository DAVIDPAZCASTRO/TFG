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
          <div className="legendText">Casilla de Cine</div>
        </div>
        <div>
          <button className="category2Legend">
            2
          </button>
          <div className="legendText">Casilla de Deporte</div>
        </div>
        <div>
          <button className="category3Legend">
            3
          </button>
          <div className="legendText">Casilla de Historia</div>
        </div>
        <div>
          <button className="category4Legend">
            4
          </button>
          <div className="legendText">Casilla de Ciencia</div>
        </div>
      </div>
    );
  }
}
