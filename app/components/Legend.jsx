import React from 'react';

export default class Legend extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="legend">
        <div>
          <div>
            <div className="legendRow">
              <div className="category0Legend">
                0
              </div>
              <div className="legendText">Casilla inicial, los dados se vuelven a lanzar</div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category1Legend">
                1
              </div>
              <div className="legendText">Casilla de <a className="cine">CINE</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category2Legend">
                2
              </div>
              <div className="legendText">Casilla de <a className="deportes">DEPORTE</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category3Legend">
                3
              </div>
              <div className="legendText">Casilla de <a className="historia">HISTORIA</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category4Legend">
                4
              </div>
              <div className="legendText">Casilla de <a className="ciencia">CIENCIA</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
