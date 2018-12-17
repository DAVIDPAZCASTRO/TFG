import React from 'react';

import {GLOBAL_CONFIG} from '../config/config.js';

export default class Legend extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
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
              <div className="legendText">Casilla de <a className="cine blue">{(GLOBAL_CONFIG.categories[1].name).toUpperCase()}</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category2Legend">
                2
              </div>
              <div className="legendText">Casilla de <a className="deportes red">{(GLOBAL_CONFIG.categories[3].name).toUpperCase()}</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category3Legend">
                3
              </div>
              <div className="legendText">Casilla de <a className="historia yellow">{(GLOBAL_CONFIG.categories[0].name).toUpperCase()}</a></div>
            </div>
          </div>
          <div>
            <div className="legendRow">
              <div className="category4Legend">
                4
              </div>
              <div className="legendText">Casilla de <a className="ciencia green">{(GLOBAL_CONFIG.categories[2].name).toUpperCase()}</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}